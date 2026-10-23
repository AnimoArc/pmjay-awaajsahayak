const BENEFICIARY_DATABASE = {
  "9876543210": {
    name: "Ramesh Kumar",
    nameLocal: "रमेश कुमार",
    district: "Bahraich",
    state: "Uttar Pradesh",
    status: "Active Beneficiary",
    statusLocal: "सक्रिय पात्र लाभार्थी",
    isActive: true,
    familyHead: "Ramesh Kumar",
    familySize: 5,
    coverageTotal: "₹5,00,000",
    coverageAvailable: "₹5,00,000",
    pmjayCardNo: "PMJAY-UP-9841-7721-01",
    abhaId: "49-2188-2190-3312",
    preferredLang: "hi-IN",
    hospitals: [
      { name: "Maharshi Balark District Hospital", distance: "4.2 km", type: "Public / Government", beds: "Free Cashless Available", phone: "05252-232144" },
      { name: "Seva Sadan Ayushman Center", distance: "7.8 km", type: "Private Empaneled", beds: "Cashless ICU / Surgical", phone: "05252-241500" }
    ],
    ivrMessages: {
      "hi-IN": {
        welcome: "नमस्ते रमेश जी। आयुष्मान भारत पीएम-जय आवाज़ सहायक में आपका स्वागत है। आपका आयुष्मान कार्ड सक्रिय है। आपके परिवार के लिए पांच लाख रुपये तक का मुफ्त इलाज उपलब्ध है। पात्रता और शेष राशि के लिए 1 दबाएं। अपने जिले के मुफ्त अस्पताल जानने के लिए 2 दबाएं। इलाज और क्लेम की प्रक्रिया के लिए 3 दबाएं। इस संदेश को दोबारा सुनने के लिए शून्य दबाएं।",
        option1: "रमेश जी, आपका आयुष्मान भारत कार्ड पूरी तरह सक्रिय है। परिवार के पांच सदस्यों के लिए कुल पांच लाख रुपये की वार्षिक सीमा उपलब्ध है। इस वर्ष कोई क्लेम नहीं किया गया है। पूरा पांच लाख रुपया शेष है। अस्पताल जाने के लिए केवल अपना आधार कार्ड साथ ले जाएं। मुख्य मेनू के लिए शून्य दबाएं।",
        option2: "बहराइच जिले में आपके नज़दीकी अस्पताल हैं: पहला, महर्षि बालार्क ज़िला अस्पताल, जो 4 किलोमीटर दूर है। दूसरा, सेवा सदन आयुष्मान केंद्र, जो 8 किलोमीटर दूर है। दोनों अस्पतालों में आयुष्मान मित्र आपकी मुफ्त मदद करेंगे। मुख्य मेनू के लिए शून्य दबाएं।",
        option3: "अस्पताल में मुफ्त इलाज कराने के लिए: किसी भी सूचीबद्ध अस्पताल के आयुष्मान सहायता केंद्र पर जाएं। वहां आयुष्मान मित्र को अपना आधार कार्ड या फोन नंबर दिखाएं। भर्ती, दवाएं और ऑपरेशन बिल्कुल मुफ्त हैं। किसी को कोई नकद पैसा न दें। मुख्य मेनू के लिए शून्य दबाएं।",
        repeat: "मुख्य विकल्प: पात्रता के लिए 1 दबाएं। नज़दीकी अस्पताल के लिए 2 दबाएं। क्लेम सहायता के लिए 3 दबाएं। कॉल समाप्त करने के लिए लाल बटन दबाएं।"
      },
      "mr-IN": {
        welcome: "नमस्कार रमेश जी. आयुष्यमान भारत आवाज सहाय्यक मध्ये आपले स्वागत आहे. आपले आयुष्यमान कार्ड सक्रिय आहे. पात्रता तपासण्यासाठी 1 दाबा. जवळचे रुग्णालय जाणून घेण्यासाठी 2 दाबा. क्लेम मार्गदर्शनासाठी 3 दाबा. पुन्हा ऐकण्यासाठी 0 दाबा.",
        option1: "आपले आयुष्यमान कार्ड सक्रिय असून पाच लाख रुपयांचे मोफत उपचार शिल्लक आहेत. आधार कार्ड घेऊन जवळच्या सरकारी रुग्णालयात जा.",
        option2: "आपल्या जिल्ह्यातील जिल्हा रुग्णालय व सेवा सदन केंद्र येथे मोफत उपचार उपलब्ध आहेत.",
        option3: "रुग्णालयात जाऊन आयुष्यमान मित्राशी संपर्क साधा. कोणतेही शुल्क देऊ नका. उपचार पूर्णपणे मोफत आहेत.",
        repeat: "पात्रतेसाठी 1, रुग्णालयांसाठी 2, आणि क्लेमसाठी 3 दाबा."
      },
      "en-IN": {
        welcome: "Welcome Ramesh Kumar to PM-JAY Awaaj Sahayak. Your Ayushman Bharat health cover of Rupees 5 Lakh is active. Press 1 for Eligibility and Balance. Press 2 for Empaneled Hospitals. Press 3 for Claim Instructions. Press 0 to repeat.",
        option1: "Your card is fully active. Five Lakh Rupees annual cashless cover is available for all five family members with zero claims this year.",
        option2: "Nearest empaneled hospitals in Bahraich are Maharshi Balark District Hospital and Seva Sadan Ayushman Center. Ayushman Mitras will assist you.",
        option3: "To claim free treatment, carry your Aadhaar card to any empaneled hospital. Visit the Ayushman kiosk at admission. Treatment is 100% cashless.",
        repeat: "Press 1 for eligibility, 2 for hospitals, 3 for claim guidelines, or Red button to hang up."
      }
    }
  },
  "8765432109": {
    name: "Sunita Bai",
    nameLocal: "सुनीता बाई",
    district: "Barwani",
    state: "Madhya Pradesh",
    status: "e-KYC Renewal Recommended",
    statusLocal: "ई-केवाईसी नवीनीकरण आवश्यक",
    isActive: true,
    familyHead: "Kailash Bai",
    familySize: 4,
    coverageTotal: "₹5,00,000",
    coverageAvailable: "₹4,20,000",
    pmjayCardNo: "PMJAY-MP-4100-2918-44",
    abhaId: "12-8801-4412-9018",
    preferredLang: "hi-IN",
    hospitals: [
      { name: "Barwani Civil District Hospital", distance: "3.5 km", type: "Government Hospital", beds: "Free Cashless Available", phone: "07290-222100" },
      { name: "Nimar Sanjeevani Medical Trust", distance: "6.1 km", type: "Empaneled Charitable", beds: "Maternity & General", phone: "07290-223450" }
    ],
    ivrMessages: {
      "hi-IN": {
        welcome: "नमस्ते सुनीता जी। आयुष्मान भारत आवाज़ सहायक में आपका स्वागत है। आपका आयुष्मान कार्ड मान्य है, किंतु ई-केवाईसी सत्यापन बाकी है। पात्रता और शेष राशि के लिए 1 दबाएं। बड़वानी के नज़दीकी अस्पताल के लिए 2 दबाएं। मुफ्त सहायता के लिए 3 दबाएं।",
        option1: "सुनीता जी, आपके परिवार के लिए 4 लाख 20 हज़ार रुपये का इलाज अभी भी शेष है। अपना बायोमेट्रिक सत्यापन पूरा करने के लिए नज़दीकी राशन केंद्र या आशा दीदी से संपर्क करें। मुख्य मेनू के लिए शून्य दबाएं।",
        option2: "बड़वानी में आपके नज़दीकी अस्पताल हैं: बड़वानी सिविल ज़िला अस्पताल और निमाड़ संजीवनी ट्रस्ट। दोनों जगह आयुष्मान मित्र मौजूद हैं।",
        option3: "इलाज के समय केवल अपना आधार कार्ड और राशन कार्ड अस्पताल ले जाएं। आशा कार्यकर्ता भी अस्पताल में आपकी मदद कर सकती हैं।",
        repeat: "पात्रता के लिए 1 दबाएं, अस्पताल के लिए 2 दबाएं, क्लेम के लिए 3 दबाएं।"
      },
      "mr-IN": {
        welcome: "नमस्कार सुनीता बाई. आयुष्यमान भारत आवाज सहाय्यक मध्ये आपले स्वागत आहे. माहितीसाठी 1 दाबा.",
        option1: "आपल्या कार्डवर 4 लाख 20 हजार रुपयांचे कव्हर शिल्लक आहे.",
        option2: "बडवानी सिव्हिल रुग्णालय सर्वात जवळ आहे.",
        option3: "आधार कार्ड घेऊन रुग्णालयातील आयुष्यमान कक्षात भेट द्या.",
        repeat: "मुख्य पर्यायांसाठी 1, 2 किंवा 3 दाबा."
      },
      "en-IN": {
        welcome: "Welcome Sunita Bai. Your PM-JAY card is valid with 4 Lakh 20 Thousand Rupees available. Press 1 for Balance, 2 for Hospitals, 3 for Claims.",
        option1: "Your remaining family health cover is Rupees 4 Lakh 20 Thousand. Please visit your local ASHA worker to renew your biometrics.",
        option2: "Nearest hospital is Barwani Civil Hospital, 3.5 km away. Fully cashless.",
        option3: "Carry your Aadhaar to the Ayushman Mitra counter at the hospital.",
        repeat: "Press 1 for balance, 2 for hospitals, 3 for claims."
      }
    }
  },
  "9422012345": {
    name: "Ganesh Patil",
    nameLocal: "गणेश पाटील",
    district: "Gadchiroli",
    state: "Maharashtra",
    status: "Active Beneficiary",
    statusLocal: "सक्रिय लाभार्थी",
    isActive: true,
    familyHead: "Ganesh Patil",
    familySize: 4,
    coverageTotal: "₹5,00,000",
    coverageAvailable: "₹5,00,000",
    pmjayCardNo: "PMJAY-MH-7712-9901-20",
    abhaId: "27-4491-0021-6672",
    preferredLang: "mr-IN",
    hospitals: [
      { name: "Gadchiroli District General Hospital", distance: "2.1 km", type: "Government General", beds: "Free Cashless Available", phone: "07132-222041" },
      { name: "Maa Danteshwari Multi-Speciality", distance: "8.4 km", type: "Empaneled Private", beds: "Cardiology & Trauma", phone: "07132-230112" }
    ],
    ivrMessages: {
      "mr-IN": {
        welcome: "जय महाराष्ट्र गणेश जी. आयुष्यमान भारत आवाज सहाय्यक मध्ये आपले स्वागत आहे. आपले आयुष्यमान कार्ड पूर्णपणे सक्रिय आहे. पाच लाख रुपयांपर्यंतचे मोफत उपचार उपलब्ध आहेत. पात्रता आणि शिल्लक रकमेसाठी 1 दाबा. गडचिरोली मधील नजीकच्या रुग्णालयांसाठी 2 दाबा. मोफत उपचार व क्लेम माहितीसाठी 3 दाबा. पुन्हा ऐकण्यासाठी शून्य दाबा.",
        option1: "गणेश जी, आपल्या कुटुंबासाठी पूर्ण पाच लाख रुपयांचे कॅशलेस उपचार शिल्लक आहेत. कोणत्याही आजारावर मोफत उपचारासाठी आधार कार्ड सोबत ठेवा. मुख्य मेनूसाठी शून्य दाबा.",
        option2: "गडचिरोली जिल्ह्यातील आपल्या नजीकचे रुग्णालय: गडचिरोली जिल्हा सामान्य रुग्णालय, अंतर दोन किलोमीटर. तेथे आयुष्यमान कक्ष 24 तास सुरू आहे.",
        option3: "उपचारासाठी कोणत्याही पैशांची गरज नाही. थेट रुग्णालयातील आयुष्यमान मित्राकडे जा आणि आपला फोन नंबर किंवा आधार कार्ड द्या. सर्व खर्च सरकार करेल.",
        repeat: "पात्रतेसाठी 1, रुग्णालयांसाठी 2, क्लेम माहितीसाठी 3 दाबा."
      },
      "hi-IN": {
        welcome: "नमस्ते गणेश जी। आयुष्मान भारत आवाज़ सहायक में आपका स्वागत है। आपका कार्ड सक्रिय है। पात्रता के लिए 1 दबाएं, अस्पताल के लिए 2 दबाएं, क्लेम के लिए 3 दबाएं।",
        option1: "आपके परिवार के लिए पूरे पांच लाख रुपये का मुफ्त इलाज उपलब्ध है।",
        option2: "गडचिरोली ज़िला अस्पताल आपके सबसे नज़दीक है।",
        option3: "अस्पताल में आयुष्मान मित्र के पास जाएं, पूरा इलाज कैशलेस होगा।",
        repeat: "पात्रता के लिए 1, अस्पताल के लिए 2, क्लेम के लिए 3 दबाएं।"
      },
      "en-IN": {
        welcome: "Welcome Ganesh Patil to PM-JAY Awaaj Sahayak. Your card is active with 5 Lakh Rupees cover. Press 1 for Eligibility, 2 for Hospitals, 3 for Claims.",
        option1: "Your complete Five Lakh Rupees health cover is available with zero deductible.",
        option2: "Gadchiroli District General Hospital is located 2.1 km away.",
        option3: "Visit the Ayushman desk at the hospital with your Aadhaar card for 100% cashless admission.",
        repeat: "Press 1 for eligibility, 2 for hospitals, 3 for claims."
      }
    }
  },
  "unregistered": {
    name: "Unregistered Citizen",
    nameLocal: "अपरिचित नागरिक",
    district: "Dantewada",
    state: "Chhattisgarh",
    status: "Verification Required",
    statusLocal: "सत्यापन आवश्यक",
    isActive: false,
    familyHead: "Pending Verification",
    familySize: 1,
    coverageTotal: "₹5,00,000 (Eligible on e-KYC)",
    coverageAvailable: "Pending Verification",
    pmjayCardNo: "Not Linked",
    abhaId: "Not Generated",
    preferredLang: "hi-IN",
    hospitals: [
      { name: "Dantewada District Hospital", distance: "5.0 km", type: "Public District Hospital", beds: "Free Ayushman Helpdesk", phone: "07865-252230" }
    ],
    ivrMessages: {
      "hi-IN": {
        welcome: "नमस्ते। आयुष्मान भारत आवाज़ सहायक में आपका स्वागत है। आपका यह फोन नंबर आयुष्मान डेटाबेस में अभी जुड़ा नहीं है। चिंता न करें। यदि आपका नाम राशन कार्ड में है, तो आप पांच लाख रुपये के मुफ्त इलाज के हकदार हैं। पात्रता जांचने के लिए 1 दबाएं। अपने गांव की आशा कार्यकर्ता या नज़दीकी सहायता केंद्र जानने के लिए 2 दबाएं।",
        option1: "आप अपने 12 अंकों का राशन कार्ड या आधार कार्ड लेकर नज़दीकी कॉमन सर्विस सेंटर या सरकारी अस्पताल जाएं। वहां 5 मिनट में आपका मुफ्त आयुष्मान कार्ड बन जाएगा।",
        option2: "दंतेवाड़ा ज़िला अस्पताल में मुफ्त आयुष्मान सहायता डेस्क खुली है। आप वहां जाकर अपना नाम सूची में देख सकते हैं।",
        option3: "कार्ड बनवाने के लिए कोई शुल्क नहीं लगता। यह भारत सरकार द्वारा पूरी तरह निशुल्क है।",
        repeat: "पात्रता जांचने के लिए 1 दबाएं, सहायता केंद्र के लिए 2 दबाएं।"
      },
      "mr-IN": {
        welcome: "नमस्कार. आपला फोन नंबर आयुष्यमान पोर्टलवर नोंदणीकृत नाही. माहितीसाठी 1 दाबा.",
        option1: "आपले रेशन कार्ड किंवा आधार कार्ड घेऊन जवळच्या सरकारी केंद्रात जा.",
        option2: "जवळचे जिल्हा रुग्णालय येथे मोफत आयुष्यमान कक्ष उपलब्ध आहे.",
        option3: "कार्ड काढणे पूर्णपणे विनामूल्य आहे.",
        repeat: "माहितीसाठी 1 किंवा 2 दाबा."
      },
      "en-IN": {
        welcome: "Welcome to PM-JAY Awaaj Sahayak. Your mobile number is not yet linked. You may still be eligible for 5 Lakh Rupees cover. Press 1 for guidance, 2 for nearest help desk.",
        option1: "Please take your Ration Card or Aadhaar to any government hospital or CSC center to generate your free card.",
        option2: "Nearest support center is at Dantewada District Hospital Ayushman kiosk.",
        option3: "Registration and card generation are completely free.",
        repeat: "Press 1 for guidance, 2 for help desk."
      }
    }
  }
};

const SURVEY_DATASET = [
  {
    timestamp: "2026/09/17 6:00:50 PM",
    age: "18 to 30 years",
    education: "Secondary school",
    lang: "English",
    household: "4 to 6 members",
    heardPmjay: "No",
    eligible: "No",
    phone: "Smartphone",
    connectivity: "Good and reliable",
    trust: "Local doctors or clinics",
    triedClaims: "Cannot recall",
    formDifficulty: 3,
    appComfort: 3,
    willingVoice: "No",
    challenge: "General navigation difficulty",
    suggestion: "Needs simple direct interface"
  },
  {
    timestamp: "2026/09/17 6:00:50 PM",
    age: "18 to 30 years",
    education: "No formal schooling",
    lang: "Regional",
    household: "7 or more members",
    heardPmjay: "No",
    eligible: "No",
    phone: "No phone (Shares family phone)",
    connectivity: "Intermittent or slow",
    trust: "Local doctors or clinics",
    triedClaims: "No",
    formDifficulty: 3,
    appComfort: 3,
    willingVoice: "Maybe",
    challenge: "I dont know",
    suggestion: "Voice guidance needed"
  },
  {
    timestamp: "2026/09/17 6:02:10 PM",
    age: "18 to 30 years",
    education: "Higher education",
    lang: "English",
    household: "4 to 6 members",
    heardPmjay: "No",
    eligible: "No",
    phone: "Smartphone",
    connectivity: "Intermittent or slow",
    trust: "Local doctors or clinics",
    triedClaims: "No",
    formDifficulty: 4,
    appComfort: 4,
    willingVoice: "Yes",
    challenge: "Health companies scamming putting unreal conditions in claims",
    suggestion: "Direct government IVR without middle companies"
  },
  {
    timestamp: "2026/09/17 6:05:52 PM",
    age: "18 to 30 years",
    education: "Higher education",
    lang: "English",
    household: "4 to 6 members",
    heardPmjay: "Yes",
    eligible: "Yes",
    phone: "Smartphone",
    connectivity: "Good and reliable",
    trust: "Family elders & ASHA",
    triedClaims: "Yes",
    formDifficulty: 4,
    appComfort: 4,
    willingVoice: "Yes",
    challenge: "Insurance claim paperwork barriers",
    suggestion: "Be a literate man - procedures are too complex for rural poor"
  },
  {
    timestamp: "2026/09/17 6:13:21 PM",
    age: "18 to 30 years",
    education: "Higher education",
    lang: "Hindi",
    household: "7 or more members",
    heardPmjay: "Yes",
    eligible: "Yes",
    phone: "Smartphone",
    connectivity: "Good and reliable",
    trust: "Local doctors or clinics",
    triedClaims: "Cannot recall",
    formDifficulty: 3,
    appComfort: 4,
    willingVoice: "Yes",
    challenge: "Being Aware of exact benefits",
    suggestion: "Direct audio announcements and reminders"
  },
  {
    timestamp: "2026/09/17 6:57:02 PM",
    age: "18 to 30 years",
    education: "No formal schooling",
    lang: "English",
    household: "4 to 6 members",
    heardPmjay: "No",
    eligible: "No",
    phone: "Smartphone",
    connectivity: "Intermittent or slow",
    trust: "Local doctors or clinics",
    triedClaims: "No",
    formDifficulty: 2,
    appComfort: 3,
    willingVoice: "No",
    challenge: "Literacy and procedural barriers",
    suggestion: "Provide voice in native spoken tongue"
  },
  {
    timestamp: "2026/09/17 7:09:33 PM",
    age: "31 to 45 years",
    education: "Secondary school",
    lang: "Hindi",
    household: "7 or more members",
    heardPmjay: "Yes",
    eligible: "No",
    phone: "Smartphone",
    connectivity: "Good and reliable",
    trust: "Local doctors or clinics",
    triedClaims: "No",
    formDifficulty: 5,
    appComfort: 5,
    willingVoice: "Yes",
    challenge: "Lack of awareness about the scheme and the claims process.",
    suggestion: "Provide information in simple local languages and make claims simple."
  },
  {
    timestamp: "2026/09/17 9:03:59 PM",
    age: "18 to 30 years",
    education: "Secondary school",
    lang: "English",
    household: "4 to 6 members",
    heardPmjay: "Yes",
    eligible: "Maybe",
    phone: "Smartphone",
    connectivity: "Good and reliable",
    trust: "Government healthcare workers",
    triedClaims: "No",
    formDifficulty: 3,
    appComfort: 4,
    willingVoice: "Yes",
    challenge: "Lack of hospitable staff to guide patients",
    suggestion: "24/7 automated telephone guidance"
  },
  {
    timestamp: "2026/09/17 10:06:12 PM",
    age: "18 to 30 years",
    education: "Higher education",
    lang: "English",
    household: "1 to 3 members",
    heardPmjay: "No",
    eligible: "No",
    phone: "Smartphone",
    connectivity: "Good and reliable",
    trust: "Local doctors or clinics",
    triedClaims: "Cannot recall",
    formDifficulty: 2,
    appComfort: 2,
    willingVoice: "Yes",
    challenge: "Not challenged yet",
    suggestion: "Proactive outreach to families"
  },
  {
    timestamp: "2026/09/18 10:15:21 AM",
    age: "46 to 60 years",
    education: "Primary school",
    lang: "Local regional language",
    household: "7 or more members",
    heardPmjay: "No",
    eligible: "No",
    phone: "Basic feature phone",
    connectivity: "Intermittent or slow",
    trust: "Family elders & ASHA",
    triedClaims: "No",
    formDifficulty: 2,
    appComfort: 1,
    willingVoice: "Yes",
    challenge: "Cannot read digital forms, zero internet at home",
    suggestion: "Missed-call voice callback on feature phone"
  }
];

let currentPersonaKey = "ramesh";
let currentCallerPhone = "9876543210";
let currentLanguage = "hi-IN";
let audioEnabled = true;
let callTimerInterval = null;
let callSeconds = 0;
let missedCallTimeout = null;
let callbackTimeout = null;
let phoneState = "IDLE";
let availableVoices = [];

const viewIdle = document.getElementById("view-idle");
const viewCalling = document.getElementById("view-calling");
const viewIncoming = document.getElementById("view-incoming");
const viewActiveCall = document.getElementById("view-active-call");
const displayCallerPhone = document.getElementById("display-caller-phone");
const ivrTranscript = document.getElementById("ivr-transcript");
const callTimer = document.getElementById("call-timer");
const keypadPromptHelper = document.getElementById("keypad-prompt-helper");
const personaSelect = document.getElementById("persona-select");
const btnTriggerMissedCall = document.getElementById("btn-trigger-missed-call");
const btnToggleAudioMute = document.getElementById("btn-toggle-audio-mute");
const muteIcon = document.getElementById("mute-icon");
const muteLabel = document.getElementById("mute-label");
const btnCallAction = document.getElementById("btn-call-action");
const btnHangupAction = document.getElementById("btn-hangup-action");
const langPills = document.querySelectorAll(".lang-pills .lang-pill");
const navTabs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");
const deskSearchInput = document.getElementById("desk-search-input");
const btnDeskSearch = document.getElementById("btn-desk-search");
const deskResultContainer = document.getElementById("desk-result-container");
const quickChips = document.querySelectorAll(".quick-chips .chip");
const surveyTbody = document.getElementById("survey-tbody");

function initApp() {
  updateClock();
  setInterval(updateClock, 1000);
  initVoices();
  bindNavigation();
  bindPhoneKeypad();
  bindPersonaControls();
  bindAshaDesk();
  renderSurveyTable();
  renderAshaDeskResult("9876543210");
}

function initVoices() {
  if ('speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      availableVoices = window.speechSynthesis.getVoices();
    };
  }
}

function updateClock() {
  const clockEl = document.getElementById("screen-clock");
  if (clockEl) {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}

function bindNavigation() {
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab");
      navTabs.forEach(t => t.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const targetPane = document.getElementById(`tab-${targetTab}`);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
}

function bindPersonaControls() {
  personaSelect.addEventListener("change", (e) => {
    currentPersonaKey = e.target.value;
    if (currentPersonaKey === "ramesh") {
      currentCallerPhone = "9876543210";
      setLanguage("hi-IN");
    } else if (currentPersonaKey === "sunita") {
      currentCallerPhone = "8765432109";
      setLanguage("hi-IN");
    } else if (currentPersonaKey === "marathi_kisan") {
      currentCallerPhone = "9422012345";
      setLanguage("mr-IN");
    } else {
      currentCallerPhone = "9988776655";
      setLanguage("hi-IN");
    }
    displayCallerPhone.textContent = currentCallerPhone;
    resetPhone();
  });

  langPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const lang = pill.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  btnTriggerMissedCall.addEventListener("click", () => {
    triggerMissedCallSequence();
  });

  btnToggleAudioMute.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
      muteLabel.textContent = "Audio Enabled (Web Speech)";
    } else {
      window.speechSynthesis.cancel();
      muteLabel.textContent = "Audio Muted (Visual Only)";
    }
  });

  btnCallAction.addEventListener("click", () => {
    if (phoneState === "IDLE") {
      triggerMissedCallSequence();
    } else if (phoneState === "INCOMING_RINGING") {
      answerCallback();
    }
  });

  btnHangupAction.addEventListener("click", () => {
    hangupCall();
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  langPills.forEach(p => {
    if (p.getAttribute("data-lang") === lang) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
}

function bindPhoneKeypad() {
  const numKeys = document.querySelectorAll(".num-key");
  numKeys.forEach(btn => {
    btn.addEventListener("click", () => {
      const keyVal = btn.getAttribute("data-key");
      handleKeypadPress(keyVal);
    });
  });
}

function triggerMissedCallSequence() {
  if (phoneState !== "IDLE") return;
  phoneState = "DIALING";
  showScreenView(viewCalling);
  document.getElementById("calling-status-text").textContent = "Dialing 1800-111-5688...";
  playTone(440, 200);

  try {
    fetch("/api/missed-call", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: currentCallerPhone, lang: currentLanguage })
    }).catch(() => {});
  } catch (e) {}

  missedCallTimeout = setTimeout(() => {
    document.getElementById("calling-status-text").textContent = "Missed Call Registered!";
    playTone(320, 300);

    setTimeout(() => {
      showScreenView(viewIdle);
      phoneState = "WAITING_CALLBACK";
      document.getElementById("idle-prompt-text").innerHTML = "Missed Call Logged.<br><span style='color:#38bdf8;'>Callback ringing in 3s...</span>";

      callbackTimeout = setTimeout(() => {
        startIncomingRinging();
      }, 3000);
    }, 1200);
  }, 1800);
}

function startIncomingRinging() {
  phoneState = "INCOMING_RINGING";
  showScreenView(viewIncoming);
  playTone(800, 400);
}

function answerCallback() {
  if (phoneState !== "INCOMING_RINGING") return;
  phoneState = "ACTIVE_CALL";
  showScreenView(viewActiveCall);
  startCallTimer();

  const profile = getBeneficiaryProfile(currentCallerPhone);
  const langKey = profile.ivrMessages[currentLanguage] ? currentLanguage : "hi-IN";
  const welcomeText = profile.ivrMessages[langKey].welcome;

  ivrTranscript.textContent = welcomeText;
  keypadPromptHelper.textContent = "Press 1 for Eligibility, 2 for Hospitals, 3 for Claims, 0 to Repeat";
  speakText(welcomeText, langKey);
}

function handleKeypadPress(key) {
  playTone(600 + (parseInt(key) || 1) * 40, 100);

  if (phoneState !== "ACTIVE_CALL") return;

  const profile = getBeneficiaryProfile(currentCallerPhone);
  const langKey = profile.ivrMessages[currentLanguage] ? currentLanguage : "hi-IN";
  const messages = profile.ivrMessages[langKey];

  if (key === "1") {
    ivrTranscript.textContent = messages.option1;
    speakText(messages.option1, langKey);
    keypadPromptHelper.textContent = "Option 1: Eligibility & Balance Checked";
  } else if (key === "2") {
    ivrTranscript.textContent = messages.option2;
    speakText(messages.option2, langKey);
    keypadPromptHelper.textContent = "Option 2: Nearest Empaneled Hospitals Provided";
  } else if (key === "3") {
    ivrTranscript.textContent = messages.option3;
    speakText(messages.option3, langKey);
    keypadPromptHelper.textContent = "Option 3: Cashless Claim Instructions Spoken";
  } else if (key === "0" || key === "*") {
    ivrTranscript.textContent = messages.repeat || messages.welcome;
    speakText(messages.repeat || messages.welcome, langKey);
    keypadPromptHelper.textContent = "Menu Repeated";
  } else {
    const invalidText = currentLanguage === "mr-IN" 
      ? "अवैध पर्याय. कृपया 1, 2, 3 किंवा 0 दाबा." 
      : (currentLanguage === "en-IN" ? "Invalid selection. Please press 1, 2, 3 or 0." : "अमान्य विकल्प। कृपया 1, 2, 3 या 0 दबाएं।");
    ivrTranscript.textContent = invalidText;
    speakText(invalidText, langKey);
  }
}

function hangupCall() {
  clearTimeout(missedCallTimeout);
  clearTimeout(callbackTimeout);
  stopCallTimer();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  resetPhone();
}

function resetPhone() {
  phoneState = "IDLE";
  stopCallTimer();
  showScreenView(viewIdle);
  document.getElementById("idle-prompt-text").innerHTML = "Give Missed Call to<br><strong>1800-111-5688</strong>";
}

function showScreenView(targetView) {
  [viewIdle, viewCalling, viewIncoming, viewActiveCall].forEach(v => v.classList.add("hidden"));
  targetView.classList.remove("hidden");
}

function startCallTimer() {
  callSeconds = 0;
  callTimer.textContent = "00:00";
  if (callTimerInterval) clearInterval(callTimerInterval);
  callTimerInterval = setInterval(() => {
    callSeconds++;
    const mins = String(Math.floor(callSeconds / 60)).padStart(2, "0");
    const secs = String(callSeconds % 60).padStart(2, "0");
    callTimer.textContent = `${mins}:${secs}`;
  }, 1000);
}

function stopCallTimer() {
  if (callTimerInterval) {
    clearInterval(callTimerInterval);
    callTimerInterval = null;
  }
}

function resolveVoiceAndLang(requestedLang) {
  if (!availableVoices || availableVoices.length === 0) {
    availableVoices = window.speechSynthesis.getVoices();
  }

  if (requestedLang.startsWith("mr")) {
    const marathiVoice = availableVoices.find(v => 
      v.lang.toLowerCase().startsWith("mr") || 
      v.name.toLowerCase().includes("marathi")
    );
    if (marathiVoice) {
      return { voice: marathiVoice, speechLang: "mr-IN" };
    }
    const hindiVoice = availableVoices.find(v => 
      v.lang.toLowerCase().startsWith("hi") || 
      v.name.toLowerCase().includes("hindi")
    );
    if (hindiVoice) {
      return { voice: hindiVoice, speechLang: "hi-IN" };
    }
    return { voice: null, speechLang: "hi-IN" };
  }

  if (requestedLang.startsWith("hi")) {
    const hindiVoice = availableVoices.find(v => 
      v.lang.toLowerCase().startsWith("hi") || 
      v.name.toLowerCase().includes("hindi")
    );
    if (hindiVoice) {
      return { voice: hindiVoice, speechLang: "hi-IN" };
    }
    return { voice: null, speechLang: "hi-IN" };
  }

  const enIndia = availableVoices.find(v => 
    v.lang.toLowerCase().includes("en-in") || 
    v.name.toLowerCase().includes("india")
  );
  if (enIndia) {
    return { voice: enIndia, speechLang: "en-IN" };
  }

  const anyEnglish = availableVoices.find(v => v.lang.toLowerCase().startsWith("en"));
  if (anyEnglish) {
    return { voice: anyEnglish, speechLang: anyEnglish.lang };
  }

  return { voice: null, speechLang: requestedLang };
}

function speakText(text, lang) {
  if (!audioEnabled || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const resolved = resolveVoiceAndLang(lang);
  const utterance = new SpeechSynthesisUtterance(text);
  
  if (resolved.voice) {
    utterance.voice = resolved.voice;
  }
  utterance.lang = resolved.speechLang;
  utterance.rate = 0.92;
  utterance.pitch = 1.0;

  utterance.onerror = () => {
    if (lang.startsWith("mr")) {
      const fallbackUtterance = new SpeechSynthesisUtterance(text);
      fallbackUtterance.lang = "hi-IN";
      window.speechSynthesis.speak(fallbackUtterance);
    }
  };

  window.speechSynthesis.speak(utterance);
}

function playTone(freq, duration) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration / 1000);
  } catch (e) {
  }
}

function getBeneficiaryProfile(phone) {
  return BENEFICIARY_DATABASE[phone] || BENEFICIARY_DATABASE["unregistered"];
}

function bindAshaDesk() {
  btnDeskSearch.addEventListener("click", () => {
    const query = deskSearchInput.value.trim();
    renderAshaDeskResult(query);
  });

  deskSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      renderAshaDeskResult(deskSearchInput.value.trim());
    }
  });

  quickChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const num = chip.getAttribute("data-num");
      deskSearchInput.value = num;
      renderAshaDeskResult(num);
    });
  });
}

function renderAshaDeskResult(query) {
  let profile = BENEFICIARY_DATABASE[query];
  if (!profile) {
    for (const key in BENEFICIARY_DATABASE) {
      if (BENEFICIARY_DATABASE[key].abhaId && BENEFICIARY_DATABASE[key].abhaId.includes(query)) {
        profile = BENEFICIARY_DATABASE[key];
        break;
      }
    }
  }
  if (!profile) profile = BENEFICIARY_DATABASE["unregistered"];

  const hospitalsHtml = profile.hospitals.map(h => `
    <div class="hospital-card">
      <div class="hosp-info">
        <strong>${h.name}</strong>
        <div class="hosp-meta">${h.type} • Distance: ${h.distance} • Helpline: ${h.phone}</div>
      </div>
      <span class="hosp-badge">${h.beds}</span>
    </div>
  `).join("");

  const speechLang = profile.preferredLang || "hi-IN";
  let speechSummary = "";
  if (speechLang === "mr-IN") {
    speechSummary = `${profile.nameLocal}, आपले आयुष्यमान कार्ड ${profile.isActive ? "सक्रिय आहे" : "पडताळणी बाकी आहे"}. आपले एकूण कव्हर पाच लाख रुपये आहे.`;
  } else {
    speechSummary = `${profile.nameLocal}, आपका आयुष्मान कार्ड ${profile.isActive ? "सक्रिय है" : "सत्यापन बाकी है"}। आपका कुल स्वास्थ्य कवर पांच लाख रुपये का है।`;
  }

  deskResultContainer.innerHTML = `
    <div class="beneficiary-header">
      <div class="b-title">
        <h3>${profile.name} <span style="font-weight: normal; color: #64748b;">(${profile.nameLocal})</span></h3>
        <div class="b-meta">District: <strong>${profile.district}, ${profile.state}</strong> • ABHA ID: <strong>${profile.abhaId}</strong></div>
      </div>
      <div>
        <span class="b-badge ${profile.isActive ? 'b-badge-active' : 'b-badge-warning'}">
          ${profile.isActive ? '● ' + profile.status : '▲ ' + profile.status}
        </span>
      </div>
    </div>

    <div class="b-grid">
      <div class="b-item">
        <label>Annual Cashless Limit</label>
        <div class="b-val" style="color: #15803d;">${profile.coverageTotal}</div>
      </div>
      <div class="b-item">
        <label>Available Balance</label>
        <div class="b-val">${profile.coverageAvailable}</div>
      </div>
      <div class="b-item">
        <label>Head of Family</label>
        <div class="b-val">${profile.familyHead}</div>
      </div>
      <div class="b-item">
        <label>Linked Family Members</label>
        <div class="b-val">${profile.familySize} Members</div>
      </div>
    </div>

    <div class="audio-readout-bar">
      <div class="audio-readout-text">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        <span>Audio Guidance for Low-Literacy Beneficiaries (${speechLang === 'mr-IN' ? 'मराठी आवाज' : 'हिंदी आवाज'})</span>
      </div>
      <button class="btn btn-primary" id="btn-readout-aloud" style="padding: 0.45rem 1rem; font-size: 0.85rem;">
        Speak Aloud (${speechLang === 'mr-IN' ? 'ऐका' : 'बोलो'})
      </button>
    </div>

    <div class="hospitals-section">
      <h4>Empaneled Cashless Hospitals in ${profile.district}</h4>
      <div class="hospital-list">
        ${hospitalsHtml}
      </div>
    </div>
  `;

  document.getElementById("btn-readout-aloud").addEventListener("click", () => {
    speakText(speechSummary, speechLang);
  });
}

function renderSurveyTable() {
  if (!surveyTbody) return;
  surveyTbody.innerHTML = "";

  SURVEY_DATASET.forEach(row => {
    const tr = document.createElement("tr");

    let heardBadge = `<span class="badge-tag ${row.heardPmjay === 'Yes' ? 'badge-yes' : 'badge-no'}">${row.heardPmjay}</span>`;
    let eligibleBadge = `<span class="badge-tag ${row.eligible === 'Yes' ? 'badge-yes' : (row.eligible === 'Maybe' ? 'badge-maybe' : 'badge-no')}">${row.eligible}</span>`;
    let willingBadge = `<span class="badge-tag ${row.willingVoice === 'Yes' ? 'badge-yes' : (row.willingVoice === 'Maybe' ? 'badge-maybe' : 'badge-no')}">${row.willingVoice}</span>`;
    let phoneBadge = row.phone.includes("feature") || row.phone.includes("No phone") ? `<span class="badge-tag badge-feature-phone">${row.phone}</span>` : row.phone;

    tr.innerHTML = `
      <td style="color: #64748b; font-size: 0.78rem;">${row.timestamp}</td>
      <td><strong>${row.age}</strong></td>
      <td>${row.education}</td>
      <td>${row.lang}</td>
      <td>${row.household}</td>
      <td>${heardBadge}</td>
      <td>${eligibleBadge}</td>
      <td>${phoneBadge}</td>
      <td>${row.connectivity}</td>
      <td>${willingBadge}</td>
      <td style="font-size: 0.82rem; color: #1e293b;">${row.challenge}</td>
      <td style="font-size: 0.82rem; color: #15803d; font-weight: 500;">${row.suggestion}</td>
    `;
    surveyTbody.appendChild(tr);
  });
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", initApp);
}
