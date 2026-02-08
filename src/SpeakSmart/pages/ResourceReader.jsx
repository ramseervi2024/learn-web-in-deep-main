import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, Share2 } from 'lucide-react';

const ResourceReader = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const resourceData = {
        '100-sentences': {
            title: "100 Daily Used Sentences (Hindi-English)",
            type: "PDF Notes",
            content: [
                { en: "How are you?", hi: "Aap kaise hain?", context: "Greeting someone" },
                { en: "I am learning English.", hi: "Main English seekh raha hoon.", context: "Self-introduction" },
                { en: "Could you please help me?", hi: "Kya aap meri madad kar sakte hain?", context: "Requesting help" },
                { en: "Nice to meet you!", hi: "Aap se milkar khushi hui!", context: "Ending a conversation" },
                { en: "Where is the nearest station?", hi: "Sabse paas wala station kahan hai?", context: "Asking directions" },
                { en: "I don't understand.", hi: "Mujhe samajh nahi aa raha.", context: "Confusion" },
                { en: "Speak slowly, please.", hi: "Kripya dheere bolein.", context: "Request" },
                { en: "What is your name?", hi: "Aapka naam kya hai?", context: "Asking name" },
                { en: "I live in a small village.", hi: "Main ek chhote gaon mein rehta hoon.", context: "Origin" },
                { en: "Everything will be fine.", hi: "Sab thik ho jayega.", context: "Giving hope" }
            ]
        },
        'restaurant-script': {
            title: "Restaurant Conversation Practice Script",
            type: "Practice Script",
            content: [
                { speaker: "Waiter", text: "Welcome! Table for how many?", translation: "Swagat hai! Kitne logo ke liye table chahiye?" },
                { speaker: "You", text: "Table for two, please.", translation: "Do logo ke liye table chahiye, kripya." },
                { speaker: "Waiter", text: "Here is the menu. What would you like to order?", translation: "Ye lijiye menu. Aap kya order karna chahenge?" },
                { speaker: "You", text: "What is the specialty today?", translation: "Aaj ki specialty kya hai?" },
                { speaker: "Waiter", text: "Our Paneer Tikka is very famous.", translation: "Humara Paneer Tikka bahut mashhoor hai." },
                { speaker: "You", text: "Okay, one Paneer Tikka and two Rotis.", translation: "Thik hai, ek Paneer Tikka aur do Roti." }
            ]
        },
        'morning-drill': {
            title: "10-Minute Morning Mirror Drill",
            type: "Speaking Challenge",
            content: [
                { step: "Step 1", task: "Stand in front of the mirror with a smile.", instruction: "Mirror ke samne smile ke sath khade ho jayein." },
                { step: "Step 2", task: "Look into your eyes and say: 'I am a confident speaker'.", instruction: "Apni aankhon mein dekhein aur bolein: 'Main ek confident speaker hoon'." },
                { step: "Step 3", task: "Describe your day in 5 simple sentences.", instruction: "Apne din ke baare mein 5 simple sentences bolein." },
                { step: "Step 4", task: "Speak for 2 minutes without stopping.", instruction: "Bina ruke 2 minute tak bolein." }
            ]
        },
        'intro-lesson': {
            title: "The Art of Introduction (Hinglish)",
            type: "Audio Lesson Transcription",
            content: [
                { point: "Eye Contact", detail: "Hamesha aankhon mein dekh kar baat karein. (Always look into eyes while talking.)" },
                { point: "The Name", detail: "Say: 'My name is [Name]' instead of 'Myself [Name]'. (Myself galat hota hai.)" },
                { point: "Origin", detail: "Say: 'I am from [Place]' or 'I hail from [Place]'." },
                { point: "Occupation", detail: "Say: 'I am a student' or 'I work as a...'" }
            ]
        }
    };

    const resource = resourceData[id] || resourceData['100-sentences'];

    return (
        <div className="bg-white min-h-screen">
            <header className="bg-blue-600 text-white py-6 px-6 sticky top-0 z-10 shadow-lg">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 font-bold">
                        <ArrowLeft size={20} /> Back
                    </button>
                    <h1 className="text-xl font-bold truncate px-4">{resource.title}</h1>
                    <div className="flex gap-4">
                        <Share2 size={20} className="cursor-pointer" />
                        <Download size={20} className="cursor-pointer" />
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-12 px-6">
                <div className="mb-8 flex items-center gap-3">
                    <BookOpen className="text-blue-600" />
                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest leading-none flex items-center">{resource.type}</span>
                </div>

                <div className="space-y-6">
                    {id === 'restaurant-script' ? (
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 space-y-8">
                            {resource.content.map((item, idx) => (
                                <div key={idx} className={`flex flex-col ${item.speaker === 'You' ? 'items-end' : 'items-start'}`}>
                                    <span className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-tighter">{item.speaker}</span>
                                    <div className={`max-w-[80%] p-4 rounded-2xl ${item.speaker === 'You' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white shadow-sm border border-gray-100 rounded-tl-none'}`}>
                                        <p className="text-lg font-bold mb-1">{item.text}</p>
                                        <p className={`text-sm italic ${item.speaker === 'You' ? 'text-blue-100' : 'text-gray-500'}`}>{item.translation}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : id === 'morning-drill' ? (
                        <div className="grid grid-cols-1 gap-6">
                            {resource.content.map((item, idx) => (
                                <div key={idx} className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 flex gap-6 items-start">
                                    <div className="bg-yellow-400 text-blue-900 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0 leading-none">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-yellow-900 mb-2">{item.task}</h3>
                                        <p className="text-yellow-700 italic">{item.instruction}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {resource.content.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                                    {item.en ? (
                                        <>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-blue-900">{item.en}</h3>
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.context}</span>
                                            </div>
                                            <p className="text-lg text-gray-700 font-medium">{item.hi}</p>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="text-xl font-bold text-blue-900 mb-2">{item.point}</h3>
                                            <p className="text-lg text-gray-700 font-medium leading-relaxed">{item.detail}</p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-16 bg-blue-50 p-10 rounded-[3rem] text-center border border-blue-100">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Did you find this helpful?</h2>
                    <p className="text-lg text-blue-700 mb-8">
                        Join our full course to get 500+ such resources and daily practice sessions!
                    </p>
                    <button onClick={() => navigate('/contact')} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl">
                        Enroll in Free Batch
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ResourceReader;
