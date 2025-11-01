import React, { useEffect, useRef, useState } from 'react';

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);
  const animationRef = useRef();

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!isMobile) {
      const cursor = cursorRef.current;
      let mouseX = 0, mouseY = 0;

      const updateCursor = () => {
        if (cursor) {
          cursor.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
        }
        animationRef.current = requestAnimationFrame(updateCursor);
      };

      const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const handleMouseDown = () => {
        setIsClicking(true);
        const newRipple = {
          id: Date.now(),
          x: mouseX,
          y: mouseY,
        };
        setRipples(prev => [...prev, newRipple]);
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 600);
      };

      const handleMouseUp = () => setIsClicking(false);

      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      
      updateCursor();

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[10000] will-change-transform"
        style={{
          background: '#00ff88',
          boxShadow: '0 0 20px #00ff88',
          transform: isClicking ? 'scale(1.5)' : 'scale(1)',
          transition: 'transform 0.1s ease',
        }}
      />
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed rounded-full pointer-events-none z-[9999] animate-ping"
          style={{
            left: ripple.x - 15,
            top: ripple.y - 15,
            width: 30,
            height: 30,
            border: '2px solid #00ff88',
            animationDuration: '0.6s',
          }}
        />
      ))}
      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
          body { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default MagneticCursor;