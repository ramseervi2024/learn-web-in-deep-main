import React from 'react';
import { Target, Users, Heart, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Intro */}
            <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-6 inline-block">Humare Baare Mein</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-8">
                        Hum North India ke students ko <span className="text-yellow-500 underline leading-relaxed pb-2 block">confident banate hain.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                        "SpeakSmart India ka ek hi lakshya hai — koi bhi student apni language ki wajah se peeche na reh jaye."
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        { title: "Our Mission", icon: <Target className="text-orange-500" />, desc: "Every student in village/town should speak English with zero fear." },
                        { title: "Empowerment", icon: <Award className="text-blue-500" />, desc: "Building leaders by removing communication barriers." },
                        { title: "Support", icon: <Heart className="text-red-500" />, desc: "Friendly environment where making mistakes is okay." },
                        { title: "Community", icon: <Users className="text-purple-500" />, desc: "A network of thousands of learners helping each other." }
                    ].map((val, idx) => (
                        <div key={idx} className="bg-gray-50 p-10 rounded-[2.5rem] text-center border border-gray-100 hover:bg-white hover:shadow-2xl transition duration-300">
                            <div className="bg-white w-20 h-20 rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8 transform -rotate-3">
                                {val.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="py-20 px-6 bg-blue-900 text-white rounded-t-[4rem]">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                            alt="Teaching"
                            className="rounded-[3rem] shadow-2xl border-4 border-yellow-400/30"
                        />
                    </div>
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold">Humari Kahani (Our Story)</h2>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            Humne dekha ki bahut saare talented students sirf isliye job ya opportunities kho dete hain kyunki wo English bolne se darrte hain.
                            Khaas kar wo bache jo chhote shehron aur gaon ke hain.
                        </p>
                        <p className="text-xl text-blue-100 leading-relaxed">
                            SpeakSmart India shuru hua usi darr ko khatam karne ke liye. Humne 10+ saal ki research ke baad aisa syllabus banaya hai jo North Indian mindset ke liye perfect hai.
                        </p>
                        <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
