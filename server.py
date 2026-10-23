import http.server
import socketserver
import os
import json
import time
import urllib.parse

PORT = int(os.environ.get("PORT", 8000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

BENEFICIARIES = {
    "9876543210": {
        "name": "Ramesh Kumar",
        "district": "Bahraich",
        "state": "Uttar Pradesh",
        "status": "Active Beneficiary",
        "coverageTotal": "₹5,00,000",
        "coverageAvailable": "₹5,00,000",
        "abhaId": "49-2188-2190-3312",
        "preferredLang": "hi-IN"
    },
    "8765432109": {
        "name": "Sunita Bai",
        "district": "Barwani",
        "state": "Madhya Pradesh",
        "status": "e-KYC Renewal Recommended",
        "coverageTotal": "₹5,00,000",
        "coverageAvailable": "₹4,20,000",
        "abhaId": "12-8801-4412-9018",
        "preferredLang": "hi-IN"
    },
    "9422012345": {
        "name": "Ganesh Patil",
        "district": "Gadchiroli",
        "state": "Maharashtra",
        "status": "Active Beneficiary",
        "coverageTotal": "₹5,00,000",
        "coverageAvailable": "₹5,00,000",
        "abhaId": "27-4491-0021-6672",
        "preferredLang": "mr-IN"
    }
}

CALL_LOGS = []
SERVER_START_TIME = time.time()

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/stats":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            payload = {
                "serverUptimeSeconds": int(time.time() - SERVER_START_TIME),
                "totalCallsLogged": len(CALL_LOGS),
                "registeredBeneficiaries": len(BENEFICIARIES),
                "recentCalls": CALL_LOGS[-5:]
            }
            self.wfile.write(json.dumps(payload).encode("utf-8"))
            return

        if parsed.path == "/api/beneficiary":
            qs = urllib.parse.parse_qs(parsed.query)
            phone = qs.get("phone", [""])[0]
            profile = BENEFICIARIES.get(phone)
            self.send_response(200 if profile else 404)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            res = profile if profile else {"error": "Not Found", "phone": phone}
            self.wfile.write(json.dumps(res).encode("utf-8"))
            return

        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/missed-call":
            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"
            try:
                data = json.loads(body)
            except Exception:
                data = {}

            phone = data.get("phone", "Unknown")
            lang = data.get("lang", "hi-IN")
            timestamp = time.strftime("%Y-%m-%d %H:%M:%S")

            profile = BENEFICIARIES.get(phone, {
                "name": "Unregistered Citizen",
                "status": "Verification Required",
                "coverageTotal": "₹5,00,000 (Eligible on e-KYC)"
            })

            record = {
                "caller": phone,
                "timestamp": timestamp,
                "language": lang,
                "beneficiary": profile.get("name"),
                "status": "Callback Scheduled",
                "callbackDelaySeconds": 3
            }
            CALL_LOGS.append(record)

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(record).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Dynamic PM-JAY Server running at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            httpd.server_close()
