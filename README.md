# PM-JAY AwaajSahayak (आवाज़ सहायक)

Zero-Data, Voice-Guided Healthcare Entitlements Platform for Aspirational Districts.

Built for Nirman 2026 (Problem Statement ID - 3: NIRMAN LAB-SEC2-73 / SH26).

## Overview

PM-JAY AwaajSahayak empowers low-literacy, rural populations to access their Ayushman Bharat PM-JAY benefits without needing smartphones, internet connectivity, or reading skills.

Beneficiaries dial a toll-free number (1800-111-5688) and disconnect after one ring. The system records the missed call and dispatches an automated voice callback in the beneficiary's regional language (Hindi, Marathi, English) with DTMF keypad navigation.

## Features

- **Feature Phone & IVR Simulator**: Interactive on-screen feature phone simulating missed-call callback flow with dual-tone keypad navigation.
- **Multilingual Voice Engine**: Browser-based Web Speech API with phonetic Devanagari voice resolution for Hindi and Marathi audio guidance.
- **Village / ASHA Kiosk Desk**: High-contrast, assisted interface for ASHA health workers and Panchayat centers with one-click voice readout.
- **Field Survey & Ground Insights**: Live analysis and interactive dataset of 10 primary field survey responses demonstrating an 80% willingness for voice-based healthcare navigation.

## Tech Stack

- Frontend: HTML5, CSS3, JavaScript (Vanilla ES6+)
- Audio & Speech: Web Speech API, Web Audio API
- Backend: Python 3
- Data: CSV, In-Memory JSON
- Deployment: Render (Static Site)

## Running Locally

Clone the repository and run the local server:

```bash
python server.py
```

Then open your browser and navigate to `http://localhost:8000`.

## Deploying on Render

This project is configured for one-click deployment on Render as a Static Site via `render.yaml`.

1. Push this repository to GitHub.
2. Sign in to [Render](https://render.com).
3. Click **New** > **Static Site** (or **Blueprint**).
4. Select this repository.
5. Set the Publish Directory to `.` and deploy.
