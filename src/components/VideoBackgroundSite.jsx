import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import video1 from '../assets/video.mp4'
export default function VideoBackgroundSite() {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
  }, []);

  const handleUserInteraction = () => {
    if (!userInteracted && videoRef.current) {
      setUserInteracted(true);
      videoRef.current.muted = false;
      setIsAudioMuted(false);
      videoRef.current.play().catch(err => console.log('Video play failed:', err));
    }
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsAudioMuted(!isAudioMuted);
      handleUserInteraction();
    }
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().catch(err => console.log('Video play failed:', err));
        setIsVideoPlaying(true);
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" onClick={handleUserInteraction}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* Replace 'your-video.mp4' with your actual video file path */}
        <source src={video1} type="video/mp4" />
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Click to enable audio notification */}
      {!userInteracted && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 animate-pulse z-30">
          <p className="text-white text-sm font-medium">🔊 Click anywhere to enable audio</p>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transform transition-all duration-1000 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            Welcome to the
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
            Experience innovation with immersive design and cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center gap-2">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full transform transition-all duration-1000 delay-300 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { title: 'Innovative', desc: 'Pushing boundaries of design' },
            { title: 'Responsive', desc: 'Perfect on any device' },
            { title: 'Modern', desc: 'Built with latest tech' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-20">
        <button
          onClick={toggleVideo}
          className="p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
          aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
        >
          {isVideoPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
        
        <button
          onClick={toggleAudio}
          className="p-4 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
          aria-label={isAudioMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isAudioMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </div>
  );
}