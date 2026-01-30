import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Clock, Stethoscope, Phone, MapPin, Calendar, AlertCircle, CreditCard, User, Menu, Heart, Download, FileText, Users, Building2, Ambulance, Pill, Activity, RefreshCw, ThumbsUp, ThumbsDown, Star, Sparkles, Bot } from 'lucide-react';

// Enhanced auto-reply configuration with multi-intent support
const botResponses = {
  timings: {
    keywords: ['timing', 'time', 'hours', 'open', 'close', 'opd', 'schedule', 'when'],
    reply: "🕒 **Hospital Timings:**\n\n🏥 **OPD Hours:**\n• Monday - Saturday: 8:00 AM - 8:00 PM\n• Sunday: 9:00 AM - 2:00 PM\n\n🚨 **Emergency:** 24/7 Available\n👥 **Visiting Hours:** 4:00 PM - 7:00 PM\n💊 **Pharmacy:** 24/7 Available\n🔬 **Lab Services:** 7:00 AM - 7:00 PM\n\nNeed to book an appointment? Just ask!",
    followUp: ['appointment', 'doctors', 'emergency']
  },
  emergency: {
    keywords: ['emergency', 'urgent', 'ambulance', 'critical', '911', 'help now', 'immediate'],
    reply: "🚨 **EMERGENCY SERVICES - AVAILABLE 24/7**\n\n📞 **Call Immediately:**\n• Emergency Helpline: +91 98765 43210\n• Ambulance Service: +91 98765 43211\n• ICU Direct: +91 98765 43220\n\n⚡ **Our Response:**\n• Ambulance dispatch: < 10 minutes\n• Trauma team on standby\n• Well-equipped ICU & CCU\n\n🏥 **For these emergencies, come directly:**\n• Chest pain / Heart attack\n• Severe bleeding\n• Difficulty breathing\n• Major accidents\n• Stroke symptoms\n• Unconsciousness\n\n**Don't wait - call NOW if urgent!**",
    followUp: ['location', 'doctors'],
    priority: 'high'
  },
  appointment: {
    keywords: ['appointment', 'book', 'schedule', 'visit', 'consultation', 'meet doctor', 'checkup'],
    reply: "📅 **Book Your Appointment - Multiple Ways!**\n\n📱 **Online Booking:**\n1. Website: www.hospital.com/book\n2. Mobile App: Download 'CityCare'\n3. WhatsApp: +91 98765 43213 (Send 'BOOK')\n\n☎️ **Call Us:**\n• Appointment Desk: +91 98765 43212\n• Toll-Free: 1800-123-4567\n\n🏥 **Walk-In:**\n• Visit during OPD hours (8 AM - 8 PM)\n• Registration desk on Ground Floor\n\n📋 **What to bring:**\n✓ Previous medical records\n✓ Insurance card (if applicable)\n✓ Government ID proof\n✓ Prescription (if any)\n\n**Average wait time:** 15-20 minutes\n\nWant to know doctor availability?",
    followUp: ['doctors', 'billing', 'timings']
  },
  doctors: {
    keywords: ['doctor', 'specialist', 'physician', 'surgeon', 'consultant', 'department', 'availability', 'who'],
    reply: "👨‍⚕️ **Our Expert Doctors & Departments:**\n\n❤️ **Cardiology**\n• Dr. Rajesh Sharma (MD, DM) - Mon-Sat, 9 AM-5 PM\n• 15+ years experience\n\n🦴 **Orthopedics**\n• Dr. Priya Patel (MS Ortho) - Tue-Sun, 10 AM-6 PM\n• Joint replacement specialist\n\n👶 **Pediatrics**\n• Dr. Anil Mehta (MD Pediatrics) - Mon-Fri, 8 AM-6 PM\n• Neonatal care expert\n\n🧠 **Neurology**\n• Dr. Sunita Iyer (DM Neuro) - Mon-Wed-Fri, 3 PM-7 PM\n\n🩺 **General Medicine**\n• Dr. Vikram Kumar (MD) - Daily, 8 AM-8 PM\n\n👩‍⚕️ **Gynecology**\n• Dr. Kavita Singh (MS OBG) - Mon-Sat, 9 AM-7 PM\n\n🦷 **Dental**\n• Dr. Rahul Desai (MDS) - Tue-Sun, 10 AM-6 PM\n\nNeed specific doctor info or want to book?",
    followUp: ['appointment', 'departments']
  },
  contact: {
    keywords: ['contact', 'phone', 'number', 'call', 'reach', 'email', 'helpline'],
    reply: "📞 **Complete Contact Directory:**\n\n🏥 **General Enquiries:**\n• Main Reception: +91 98765 43200\n• Email: info@citycare.com\n\n📅 **Appointments:**\n• Booking: +91 98765 43212\n• Toll-Free: 1800-123-4567\n\n🚨 **Emergency:**\n• 24/7 Helpline: +91 98765 43210\n• Ambulance: +91 98765 43211\n\n💳 **Billing & Insurance:**\n• Billing Desk: +91 98765 43214\n• Insurance Claims: +91 98765 43217\n\n🔬 **Lab Reports:**\n• Lab Enquiry: +91 98765 43215\n\n📋 **Medical Records:**\n• Records Department: +91 98765 43218\n\n💬 **WhatsApp Support:** +91 98765 43213\n\n**Response Time:** Within 2 minutes during business hours",
    followUp: ['timings', 'location']
  },
  location: {
    keywords: ['address', 'location', 'directions', 'where', 'reach', 'map', 'navigate', 'how to get'],
    reply: "📍 **Hospital Location & Directions:**\n\n🏥 **Address:**\nCity Care Hospital\n123, MG Road, Indiranagar\nBangalore - 560001, Karnataka\n\n🚗 **How to Reach:**\n\n**By Metro:**\n• Indiranagar Metro Station - 500m\n• 5 minutes walk\n\n**By Bus:**\n• Bus Stop: MG Road Junction\n• Buses: 201, 335, G4, V500\n\n**By Car:**\n• Off MG Road, opposite City Center Mall\n• GPS: 12.9716° N, 77.5946° E\n\n🅿️ **Parking:**\n• 200+ covered parking spaces\n• Free for patients & visitors\n• Valet service available\n\n🏛️ **Landmarks:**\n• Opposite Metro Station\n• Near City Center Mall\n• Behind Canara Bank\n\n📱 **Get Directions:**\n[Google Maps] www.maps.google.com/citycare\n\nNeed ambulance service?",
    followUp: ['emergency', 'appointment']
  },
  billing: {
    keywords: ['billing', 'insurance', 'payment', 'cost', 'charges', 'price', 'fees', 'estimate', 'cashless'],
    reply: "💳 **Billing, Insurance & Payment Options:**\n\n💰 **Payment Methods Accepted:**\n✓ Cash\n✓ Credit/Debit Cards (All major)\n✓ UPI (GPay, PhonePe, Paytm)\n✓ Net Banking\n✓ Health Insurance (Cashless)\n✓ EMI Options available\n\n🏥 **Insurance Partners:**\nWe have cashless tie-ups with 50+ insurers:\n• Star Health • HDFC Ergo • ICICI Lombard\n• Bajaj Allianz • Max Bupa • Care Health\n• National Insurance • And many more...\n\n📋 **For Cashless Treatment:**\n1. Bring insurance card & ID\n2. Fill pre-authorization form\n3. Approval within 2-4 hours\n4. Pay only non-covered amount\n\n💵 **Cost Estimates:**\n• OPD Consultation: ₹500-800\n• Lab Tests: ₹200-2000\n• Room charges: ₹1500-8000/day\n\n📞 **Billing Queries:** +91 98765 43214\n📧 **Email:** billing@citycare.com\n\n**Zero hidden charges policy!**",
    followUp: ['appointment', 'admission']
  },
  symptoms: {
    fever: {
      keywords: ['fever', 'temperature', 'cold', 'flu', 'cough', 'throat', 'viral'],
      reply: "🤒 **Fever & Cold Symptoms:**\n\n**Recommended Department:**\n🩺 **General Medicine**\n• Dr. Vikram Kumar (MD)\n• Available: Daily, 8 AM-8 PM\n\n⚠️ **When to visit immediately:**\n• Fever > 103°F (39.4°C)\n• Fever lasting > 3 days\n• Difficulty breathing\n• Severe headache or confusion\n• Chest pain\n\n🏥 **What to do now:**\n1. Take temperature reading\n2. Stay hydrated\n3. Rest well\n4. Book appointment or visit OPD\n\n📞 **Book Now:** +91 98765 43212\n\n**If symptoms are severe, visit Emergency 24/7**\n\nNeed to book an appointment?",
      followUp: ['appointment', 'emergency']
    },
    chest: {
      keywords: ['chest pain', 'heart', 'cardiac', 'breathless', 'heart attack', 'angina'],
      reply: "❤️ **CHEST PAIN - URGENT ATTENTION REQUIRED**\n\n⚠️ **This could be serious!**\n\n**Immediate Actions:**\n🚨 **If experiencing NOW:**\n• Severe chest pain/pressure\n• Pain radiating to arm/jaw\n• Shortness of breath\n• Sweating, nausea\n\n📞 **CALL EMERGENCY IMMEDIATELY:**\n+91 98765 43210\n\n**Our Cardiology Department:**\n❤️ Dr. Rajesh Sharma (MD, DM Cardiology)\n• 15+ years experience\n• Available: Mon-Sat, 9 AM-5 PM\n\n🏥 **Facilities Available:**\n✓ 24/7 Cardiac ICU\n✓ Emergency Angiography\n✓ Advanced ECG & Echo\n✓ Cardiac Surgery team on standby\n\n**For non-emergency consultation:**\n📞 Book appointment: +91 98765 43212\n\n⏰ **Don't delay - chest pain needs immediate evaluation!**",
      followUp: ['emergency', 'appointment'],
      priority: 'critical'
    },
    injury: {
      keywords: ['injury', 'fracture', 'bone', 'accident', 'pain', 'sprain', 'broken', 'fall'],
      reply: "🦴 **Injury & Fracture Care:**\n\n**Visit Our Orthopedics Department:**\n👨‍⚕️ Dr. Priya Patel (MS Orthopedics)\n• Joint replacement specialist\n• Available: Tue-Sun, 10 AM-6 PM\n\n🏥 **Services:**\n✓ X-Ray facility (15 min results)\n✓ Fracture & Cast room\n✓ Minor surgery OT\n✓ Physiotherapy center\n\n⚠️ **Visit Emergency if:**\n• Severe pain or swelling\n• Deformity visible\n• Unable to move limb\n• Major accident\n• Open wound with bone exposure\n\n📞 **Emergency:** +91 98765 43210\n📞 **Appointments:** +91 98765 43212\n\n💡 **First Aid (until you reach):**\n1. Don't move injured part\n2. Apply ice pack (if available)\n3. Keep limb elevated\n4. Avoid pain medication before doctor sees\n\nShall I help you book an appointment?",
      followUp: ['emergency', 'appointment']
    },
    pregnancy: {
      keywords: ['pregnant', 'pregnancy', 'baby', 'delivery', 'gynec', 'maternity', 'expecting'],
      reply: "👶 **Maternity & Gynecology Care:**\n\n**Our Expert:**\n👩‍⚕️ Dr. Kavita Singh (MS OBG)\n• 12+ years experience\n• Available: Mon-Sat, 9 AM-7 PM\n\n🏥 **Maternity Services:**\n✓ Antenatal care & checkups\n✓ High-risk pregnancy management\n✓ Normal & C-section delivery\n✓ 24/7 Labor room\n✓ NICU facilities\n✓ Postnatal care\n✓ Lactation support\n\n📋 **Maternity Packages:**\n• Normal Delivery: ₹35,000-50,000\n• C-Section: ₹50,000-75,000\n• Includes: Room, doctor fees, medicines\n\n🎁 **Free Services:**\n✓ First consultation\n✓ Pregnancy handbook\n✓ Parenting classes\n✓ Nutritionist consultation\n\n📞 **Book Consultation:** +91 98765 43212\n🚨 **Emergency OBG:** +91 98765 43210\n\nCongratulations! Need to schedule a checkup?",
      followUp: ['appointment', 'billing']
    },
    diabetes: {
      keywords: ['diabetes', 'sugar', 'blood sugar', 'insulin', 'diabetic'],
      reply: "🩸 **Diabetes Care & Management:**\n\n**Consult Our Specialists:**\n🩺 Endocrinology Department\n• Dr. Vikram Kumar (MD, Diabetes Specialist)\n• Available: Daily, 8 AM-8 PM\n\n🔬 **Diabetes Services:**\n✓ HbA1c test (₹400)\n✓ Fasting & PP blood sugar\n✓ Complete diabetic profile\n✓ Dietary consultation\n✓ Foot care clinic\n✓ Eye screening\n\n📚 **Diabetes Management Program:**\n• Regular monitoring\n• Personalized diet plans\n• Exercise guidance\n• Medication management\n• Complication prevention\n\n💊 **Pharmacy:**\n24/7 availability of all diabetes medications\n\n⏰ **Regular Checkup Recommended:**\n• Blood sugar: Monthly\n• HbA1c: Every 3 months\n• Complete profile: Every 6 months\n\n📞 **Book Consultation:** +91 98765 43212\n\nWant to know about our diabetes package?",
      followUp: ['appointment', 'reports']
    }
  },
  reports: {
    keywords: ['report', 'test', 'lab', 'result', 'blood', 'x-ray', 'scan', 'pathology'],
    reply: "🔬 **Lab Reports & Diagnostic Services:**\n\n📱 **Get Your Reports:**\n\n**Online Access:**\n1. Website: www.citycare.com/reports\n2. Enter Patient ID & Mobile number\n3. Download PDF instantly\n\n**Mobile App:**\n• Download 'CityCare' app\n• Reports sent via notification\n\n**Physical Collection:**\n• Reception desk with Patient ID\n• Available 24/7\n\n⏱️ **Report Timeline:**\n• Blood tests: 6-24 hours\n• X-Ray: 2-4 hours\n• CT/MRI: 24 hours\n• Biopsy: 3-5 days\n• Culture tests: 48-72 hours\n\n🔬 **Popular Tests & Prices:**\n• Complete Blood Count: ₹300\n• Lipid Profile: ₹500\n• Thyroid (T3, T4, TSH): ₹600\n• HbA1c: ₹400\n• Vitamin D: ₹800\n• Full Body Checkup: ₹2,500\n\n📞 **Lab Enquiry:** +91 98765 43215\n🏥 **Lab Timings:** 7:00 AM - 7:00 PM\n\n**Home sample collection available!**\n\nNeed to book a test?",
    followUp: ['appointment', 'timings']
  },
  admission: {
    keywords: ['admission', 'admit', 'hospitalize', 'room', 'bed', 'inpatient', 'stay'],
    reply: "🏥 **Hospital Admission Process:**\n\n📋 **Documents Required:**\n✓ Doctor's recommendation/prescription\n✓ Government ID proof (Aadhar/PAN)\n✓ Insurance card (if applicable)\n✓ Previous medical records\n✓ 2 passport photos\n\n💰 **Advance Deposit:**\n• General Ward: ₹10,000\n• Semi-Private: ₹20,000\n• Private Room: ₹30,000\n• Deluxe Suite: ₹50,000\n\n🛏️ **Room Categories & Charges:**\n\n**General Ward:** ₹1,500/day\n• 6-bed shared AC room\n• Basic amenities\n\n**Semi-Private:** ₹3,000/day\n• 2-bed AC room\n• TV, attached bathroom\n\n**Private Room:** ₹5,000/day\n• Single AC room\n• TV, WiFi, refrigerator\n\n**Deluxe Suite:** ₹8,000/day\n• Premium room with sofa\n• Attendant bed, WiFi, TV\n\n✨ **Facilities:**\n✓ 24/7 Nursing care\n✓ Attached cafeteria\n✓ Visitor lounge\n✓ Free WiFi\n✓ Doctor rounds twice daily\n\n📞 **Admission Desk:** +91 98765 43216\n\n**Average stay:** 2-5 days depending on condition",
    followUp: ['billing', 'doctors']
  },
  covid: {
    keywords: ['covid', 'corona', 'coronavirus', 'covid-19', 'vaccination', 'vaccine'],
    reply: "💉 **COVID-19 Services:**\n\n🦠 **Testing Available:**\n• RT-PCR Test: ₹500 (Results in 12 hours)\n• Rapid Antigen: ₹300 (Results in 30 min)\n• Antibody Test: ₹600\n\n💉 **Vaccination:**\n• Walk-in facility available\n• All age groups\n• Free government vaccines\n• Certificate provided immediately\n\n🏥 **COVID Treatment:**\n• Dedicated COVID ward\n• ICU with ventilator support\n• Experienced pulmonologists\n• All medicines in stock\n\n📋 **COVID Protocol:**\n✓ Mandatory screening at entry\n✓ Separate OPD for respiratory symptoms\n✓ Isolated testing area\n✓ Complete PPE for staff\n\n⚠️ **Symptoms? Get tested:**\n• Fever, cough, cold\n• Difficulty breathing\n• Loss of taste/smell\n• Body ache, fatigue\n\n📞 **COVID Helpline:** +91 98765 43219\n📞 **Testing Appointments:** +91 98765 43212\n\n**Home testing & vaccination available**",
    followUp: ['appointment', 'emergency']
  },
  packages: {
    keywords: ['package', 'checkup', 'health checkup', 'full body', 'screening', 'preventive'],
    reply: "📦 **Health Checkup Packages:**\n\n👨 **Basic Health Package** - ₹2,500\n• Complete Blood Count\n• Lipid Profile\n• Blood Sugar (F & PP)\n• Kidney Function Test\n• Liver Function Test\n• ECG\n• Doctor Consultation\n\n💼 **Executive Package** - ₹5,000\n• All Basic tests +\n• Thyroid Profile\n• Vitamin D & B12\n• Chest X-Ray\n• Abdominal Ultrasound\n• Stress Test\n• Specialist Consultation\n\n👑 **Comprehensive Package** - ₹10,000\n• All Executive tests +\n• HbA1c\n• Cancer markers\n• CT Scan (any one)\n• 2D Echo\n• Pulmonary Function Test\n• Nutritionist Consultation\n• Annual follow-up included\n\n👩 **Women's Wellness** - ₹4,500\n• Basic Package +\n• Pap Smear\n• Mammography\n• Bone Density\n• Gynec Consultation\n\n🎁 **Special Offers:**\n• 20% off for senior citizens\n• 15% off for corporate groups\n• Free repeat test if abnormal\n\n📞 **Book Package:** +91 98765 43212\n\n**Reports ready same day! Home collection available**",
    followUp: ['appointment', 'reports']
  },
  pharmacy: {
    keywords: ['pharmacy', 'medicine', 'drug', 'medication', 'prescription'],
    reply: "💊 **24/7 Pharmacy Services:**\n\n🏪 **Our Pharmacy:**\n• Located: Ground Floor, Main Building\n• Open: 24/7 (All days)\n• Licensed pharmacists always available\n\n💳 **Services:**\n✓ Prescription medicines\n✓ OTC drugs\n✓ Surgical items\n✓ Medical equipment\n✓ Baby care products\n✓ Health supplements\n\n📱 **Order Online:**\n• WhatsApp: +91 98765 43213\n• Send prescription photo\n• Home delivery available\n• Delivery time: 2-4 hours\n\n💰 **Payment Options:**\n• Cash, Card, UPI\n• Insurance claims accepted\n• Credit facility for admitted patients\n\n🎁 **Benefits:**\n✓ 10% discount for senior citizens\n✓ Loyalty points program\n✓ Generic alternatives suggested\n✓ Medicine reminders via SMS\n\n⚕️ **Pharmacist Consultation:**\nFree guidance on:\n• Dosage instructions\n• Drug interactions\n• Side effects\n• Storage instructions\n\n📞 **Pharmacy:** +91 98765 43221\n\n**We stock 5000+ medicines!**",
    followUp: ['contact']
  }
};

// Department information
const departments = [
  { name: 'Cardiology', icon: Heart, color: 'red' },
  { name: 'Orthopedics', icon: Activity, color: 'blue' },
  { name: 'Pediatrics', icon: Users, color: 'green' },
  { name: 'Emergency', icon: Ambulance, color: 'red' },
  { name: 'Pharmacy', icon: Pill, color: 'purple' },
  { name: 'Laboratory', icon: FileText, color: 'orange' }
];

// Quick action buttons with enhanced categories
const quickActions = [
  { icon: Clock, label: 'Hospital Timings', key: 'timings', color: 'blue' },
  { icon: Calendar, label: 'Book Appointment', key: 'appointment', color: 'green' },
  { icon: Stethoscope, label: 'Find Doctor', key: 'doctors', color: 'purple' },
  { icon: AlertCircle, label: 'Emergency', key: 'emergency', color: 'red' },
  { icon: CreditCard, label: 'Billing Info', key: 'billing', color: 'orange' },
  { icon: MapPin, label: 'Location', key: 'location', color: 'teal' },
  { icon: FileText, label: 'Lab Reports', key: 'reports', color: 'indigo' },
  { icon: Pill, label: 'Pharmacy', key: 'pharmacy', color: 'pink' }
];

const CityCareHospital = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "👋 **Hello! I'm your AI Health Assistant**\n\nI can help you with:\n✓ Appointments & Doctor info\n✓ Emergency services\n✓ Lab reports & test bookings\n✓ Hospital timings & location\n✓ Billing & insurance queries\n✓ Health checkup packages\n\nHow can I assist you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: ['appointment', 'emergency', 'doctors', 'reports']
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState([]);
  const [userSatisfaction, setUserSatisfaction] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Enhanced bot reply with context awareness
  const getBotReply = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    let matchedResponse = null;
    let matchPriority = 0;
    
    // Check for critical/high priority keywords first
    for (const [category, data] of Object.entries(botResponses)) {
      if (category === 'symptoms') {
        for (const [symptom, symptomData] of Object.entries(data)) {
          if (symptomData.keywords.some(keyword => lowerMessage.includes(keyword))) {
            if (symptomData.priority === 'critical') {
              return {
                reply: symptomData.reply,
                followUp: symptomData.followUp || [],
                priority: 'critical'
              };
            }
            if (!matchedResponse) {
              matchedResponse = {
                reply: symptomData.reply,
                followUp: symptomData.followUp || []
              };
            }
          }
        }
      } else if (data.keywords) {
        const keywordMatches = data.keywords.filter(keyword => lowerMessage.includes(keyword)).length;
        if (keywordMatches > matchPriority) {
          matchPriority = keywordMatches;
          matchedResponse = {
            reply: data.reply,
            followUp: data.followUp || []
          };
        }
      }
    }
    
    if (matchedResponse) {
      return matchedResponse;
    }
    
    // Context-aware fallback
    const contextHints = conversationContext.length > 0 
      ? `\n\n💡 Based on our conversation, you might also want to know about: ${conversationContext.slice(-2).join(', ')}`
      : '';
    
    return {
      reply: "I'm here to help! 😊\n\nI can assist you with:\n\n🏥 **Medical Services:**\n• Book appointments\n• Find doctors & departments\n• Health checkup packages\n\n🔬 **Diagnostic:**\n• Lab test bookings\n• Report collection\n• Test prices\n\n💳 **Administrative:**\n• Billing & insurance\n• Admission process\n• Hospital timings\n\n🚨 **Emergency:**\n• 24/7 emergency services\n• Ambulance booking\n\n**Try asking:**\n\"Book appointment\", \"Emergency contact\", \"Lab test prices\", \"Doctor availability\"" + contextHints,
      followUp: ['appointment', 'emergency', 'doctors', 'reports']
    };
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = {
      type: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);
    setUserSatisfaction(null);

    setTimeout(() => {
      const botReplyData = getBotReply(inputMessage);
      const botMsg = {
        type: 'bot',
        text: botReplyData.reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: botReplyData.followUp,
        priority: botReplyData.priority
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      
      // Update conversation context
      if (botReplyData.followUp && botReplyData.followUp.length > 0) {
        setConversationContext(prev => [...prev, ...botReplyData.followUp].slice(-5));
      }
    }, 1200);
  };

  const handleQuickAction = (actionKey) => {
    const action = quickActions.find(a => a.key === actionKey);
    if (action) {
      handleSuggestionClick(action.label);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleFeedback = (isPositive) => {
    setUserSatisfaction(isPositive);
    const feedbackMsg = {
      type: 'bot',
      text: isPositive 
        ? "😊 Thank you for your feedback! I'm glad I could help.\n\nIs there anything else you'd like to know?"
        : "I'm sorry I couldn't help better. Let me connect you with our support team.\n\n📞 Call: +91 98765 43200\n💬 WhatsApp: +91 98765 43213\n\nThey'll assist you right away!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, feedbackMsg]);
  };

  const resetChat = () => {
    setMessages([{
      type: 'bot',
      text: "👋 **Hello! I'm your AI Health Assistant**\n\nI can help you with:\n✓ Appointments & Doctor info\n✓ Emergency services\n✓ Lab reports & test bookings\n✓ Hospital timings & location\n✓ Billing & insurance queries\n✓ Health checkup packages\n\nHow can I assist you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: ['appointment', 'emergency', 'doctors', 'reports']
    }]);
    setConversationContext([]);
    setUserSatisfaction(null);
  };

  const ChatBubble = ({ message, onSuggestionClick }) => {
    const isBot = message.type === 'bot';
    const isPriority = message.priority === 'critical';
    
    return (
      <div className="animate-fade-in">
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
          <div className={`max-w-[80%] ${isBot ? (isPriority ? 'bg-red-50 border-2 border-red-500' : 'bg-white') : 'bg-blue-600 text-white'} rounded-2xl px-4 py-3 shadow-md`}>
            <p className="text-sm whitespace-pre-line">{message.text}</p>
            <p className={`text-xs mt-1 ${isBot ? 'text-gray-400' : 'text-blue-100'}`}>{message.time}</p>
          </div>
        </div>
        
        {isBot && message.suggestions && message.suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 ml-2">
            {message.suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => onSuggestionClick(suggestion)}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition border border-blue-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg">
              <Heart className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                City Care Hospital
              </h1>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <Sparkles size={12} className="text-yellow-500" />
                Caring for you, always • 24/7 Service
              </p>
            </div>
          </div>
          <button className="lg:hidden bg-blue-50 p-2 rounded-lg">
            <Menu size={24} className="text-blue-600" />
          </button>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 animate-pulse">
            <Ambulance size={20} />
            <p className="text-sm font-bold">EMERGENCY 24/7</p>
          </div>
          <p className="text-sm">•</p>
          <p className="text-sm font-medium">📞 +91 98765 43210</p>
          <p className="text-sm">•</p>
          <p className="text-sm">Ambulance arrives in &lt;10 minutes</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🤖 AI-Powered Health Assistant
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Health,
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Our Priority</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get instant answers to all your health queries with our intelligent chatbot. Available 24/7 to help you with appointments, emergency services, medical information, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center gap-2 transform hover:scale-105"
              >
                <Bot size={24} />
                Start Chatting Now
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
                <Phone size={20} className="inline mr-2" />
                Call Us
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-sm text-gray-600">Expert Doctors</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">24/7</p>
                <p className="text-sm text-gray-600">Emergency Care</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">10K+</p>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl">
                <Activity className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Quick Access</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Clock, label: 'OPD Timings', value: '8 AM - 8 PM (Mon-Sat)', color: 'blue' },
                { icon: AlertCircle, label: 'Emergency', value: '24/7 Available', color: 'red' },
                { icon: MapPin, label: 'Location', value: '123, MG Road, Bangalore', color: 'green' },
                { icon: Phone, label: 'Main Line', value: '+91 98765 43200', color: 'purple' },
                { icon: Calendar, label: 'Appointments', value: 'Book Online or Call', color: 'orange' },
                { icon: FileText, label: 'Lab Reports', value: 'Online Access Available', color: 'indigo' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition group">
                  <div className={`bg-${item.color}-100 p-2 rounded-lg group-hover:scale-110 transition`}>
                    <item.icon className={`text-${item.color}-600`} size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h3>
            <p className="text-gray-600 text-lg">Comprehensive healthcare services under one roof</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {departments.map((dept, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className={`bg-${dept.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  <dept.icon className={`text-${dept.color}-600`} size={32} />
                </div>
                <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition">{dept.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-gray-600 text-lg">Excellence in healthcare with patient-first approach</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Stethoscope, 
                title: 'Expert Doctors', 
                desc: 'Board-certified specialists with 10+ years experience in their respective fields',
                color: 'blue',
                features: ['50+ Specialists', 'Multiple Degrees', 'Regular Training']
              },
              { 
                icon: Building2, 
                title: 'Modern Facilities', 
                desc: 'State-of-the-art medical equipment and comfortable patient rooms',
                color: 'green',
                features: ['Latest Equipment', 'Clean Environment', '24/7 Power Backup']
              },
              { 
                icon: CreditCard, 
                title: 'Insurance & EMI', 
                desc: 'Cashless treatment with 50+ insurers and flexible payment options',
                color: 'purple',
                features: ['All Major Insurers', 'EMI Available', 'Transparent Billing']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className={`bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h3>
            <p className="text-gray-600 text-lg">Hear from our satisfied patients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', treatment: 'Cardiac Surgery', rating: 5, text: 'Excellent care and facilities. Dr. Sharma and his team saved my life. Forever grateful!' },
              { name: 'Priya Sharma', treatment: 'Maternity Care', rating: 5, text: 'The maternity ward staff were amazing. Dr. Kavita made my delivery experience comfortable and safe.' },
              { name: 'Anil Patel', treatment: 'Orthopedic', rating: 5, text: 'Quick recovery after knee replacement. Dr. Priya Patel is highly skilled and caring.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">Need Medical Assistance?</h3>
          <p className="text-xl mb-8 text-blue-50">Our AI assistant is ready to help you 24/7</p>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center gap-3"
          >
            <MessageCircle size={24} />
            Chat with Assistant Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-red-500" size={24} />
                <h4 className="font-bold text-lg">City Care Hospital</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Providing world-class healthcare services with compassion, excellence, and innovation since 1995.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="hover:text-white transition cursor-pointer">About Us</li>
                <li className="hover:text-white transition cursor-pointer">Departments</li>
                <li className="hover:text-white transition cursor-pointer">Doctors</li>
                <li className="hover:text-white transition cursor-pointer">Careers</li>
                <li className="hover:text-white transition cursor-pointer">Gallery</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="hover:text-white transition cursor-pointer">Emergency Care</li>
                <li className="hover:text-white transition cursor-pointer">Health Checkups</li>
                <li className="hover:text-white transition cursor-pointer">Laboratory</li>
                <li className="hover:text-white transition cursor-pointer">Pharmacy</li>
                <li className="hover:text-white transition cursor-pointer">Home Care</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="text-sm text-gray-400 space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  123, MG Road, Indiranagar<br/>Bangalore - 560001
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  +91 98765 43200
                </li>
                <li className="flex items-center gap-2">
                  <AlertCircle size={16} className="text-red-500" />
                  Emergency: +91 98765 43210
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2026 City Care Hospital. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 z-50 group"
        >
          <MessageCircle size={32} className="group-hover:rotate-12 transition" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            AI
          </span>
        </button>
      )}

      {/* Enhanced Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 animate-fade-in border border-gray-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-5 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-white p-2 rounded-full">
                  <Bot className="text-blue-600" size={24} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold flex items-center gap-2">
                  AI Health Assistant
                  <Sparkles size={14} className="text-yellow-300" />
                </h3>
                <p className="text-xs text-blue-100">Always active • Instant replies</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={resetChat}
                className="hover:bg-white/20 p-2 rounded-lg transition"
                title="Reset Chat"
              >
                <RefreshCw size={18} />
              </button>
              <button 
                onClick={() => setIsChatOpen(false)} 
                className="hover:bg-white/20 p-2 rounded-lg transition"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((msg, idx) => (
              <ChatBubble key={idx} message={msg} onSuggestionClick={handleSuggestionClick} />
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4 animate-fade-in">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-md">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {messages.length > 2 && userSatisfaction === null && !isTyping && (
              <div className="flex justify-center gap-3 my-4 animate-fade-in">
                <button
                  onClick={() => handleFeedback(true)}
                  className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition"
                >
                  <ThumbsUp size={16} />
                  Helpful
                </button>
                <button
                  onClick={() => handleFeedback(false)}
                  className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-100 transition"
                >
                  <ThumbsDown size={16} />
                  Not Helpful
                </button>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-3 bg-gray-50 border-t overflow-x-auto">
            <p className="text-xs text-gray-600 mb-2 font-semibold">Quick Actions:</p>
            <div className="flex gap-2 pb-2">
              {quickActions.slice(0, 4).map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickAction(action.key)}
                  className={`flex items-center gap-2 bg-${action.color}-50 text-${action.color}-700 px-3 py-2 rounded-xl text-xs font-medium hover:bg-${action.color}-100 transition whitespace-nowrap shadow-sm`}
                >
                  <action.icon size={14} />
                  {action.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t rounded-b-3xl">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                <Send size={22} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI • Instant medical assistance
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default CityCareHospital;