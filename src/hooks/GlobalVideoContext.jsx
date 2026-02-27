import { createContext, useContext, useRef, useEffect, useState } from 'react';

const VideoContext = createContext();

export function useGlobalVideo() {
  return useContext(VideoContext);
}

export function GlobalVideoProvider({ children }) {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current && visible) {
      videoRef.current.play();
    }
  }, [videoSrc, visible]);


  useEffect(() => {
    const handleVisibility = () => {
      if (videoRef.current) {
        if (document.hidden) {
          videoRef.current.pause();
        } else if (visible) {
          videoRef.current.play();
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [visible]);

  return (
    <VideoContext.Provider value={{ setVideoSrc, setVisible, videoSrc, visible }}>
      {children}
      {videoSrc && visible && (
        <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            width={387}
            height={200}
            style={{ borderRadius: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
          />
        </div>
      )}
    </VideoContext.Provider>
  );
}
