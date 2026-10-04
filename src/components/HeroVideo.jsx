import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, AlertCircle, Maximize2 } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import portfolioVideo from '../assets/portfolio-video.mp4';

export default function HeroVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // IntersectionObserver to pause video when offscreen
  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting && !reducedMotion) {
            videoRef.current.play().catch(() => {
              // Browser autoplay policy might block without interaction
              setIsPlaying(false);
            });
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  // Initial playback policy respecting reduced motion
  useEffect(() => {
    if (!videoRef.current) return;

    if (reducedMotion) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [reducedMotion]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto lg:max-w-none group"
    >
      {/* Outer framing card */}
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900/90 dark:bg-[#121217] border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-2xl">
        
        {/* Subtle Window Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="ml-2 text-[11px] font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
              kirtesh-showcase.mp4
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              HD PREVIEW
            </span>
          </div>
        </div>

        {/* Video Display Area */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
          {!hasError ? (
            <video
              ref={videoRef}
              src={portfolioVideo}
              muted
              autoPlay={!reducedMotion}
              loop
              playsInline
              preload="metadata"
              aria-label="Kirtesh Chatur portfolio showcase video"
              onLoadedData={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01] ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            /* Fallback UI if video cannot load */
            <div className="flex flex-col items-center justify-center p-8 text-center bg-zinc-900 text-zinc-300">
              <AlertCircle className="w-8 h-8 text-blue-400 mb-2" />
              <p className="font-semibold text-sm text-zinc-200">Showcase Preview</p>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                Full-stack web applications, AI workflows, and software development by Kirtesh Chatur.
              </p>
            </div>
          )}

          {/* Loading shimmer placeholder */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
              <span className="text-xs font-mono text-zinc-500">Loading showcase...</span>
            </div>
          )}

          {/* Bottom Overlay Controls */}
          {!hasError && isLoaded && (
            <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause showcase video' : 'Play showcase video'}
                className="p-2 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}

          {/* Muted Indicator Pill */}
          <div className="absolute top-3 left-3 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-black/50 backdrop-blur-md text-zinc-300 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              MUTED LOOP
            </span>
          </div>
        </div>

        {/* Minimal Footer Metadata */}
        <div className="px-4 py-2 bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between text-[11px] text-zinc-500">
          <span className="truncate">Digital Products • AI Systems • UI/UX</span>
          <span className="font-mono text-zinc-400">PVPIT Pune</span>
        </div>
      </div>
    </div>
  );
}
