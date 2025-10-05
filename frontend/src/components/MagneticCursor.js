import React, { useEffect, useRef } from 'react';

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      dotX += (mouseX - dotX) * 0.8;
      dotY += (mouseY - dotY) * 0.8;
      
      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
      }

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e) => {
      if (e.target && e.target.matches && e.target.matches('button, a, [role="button"], input, textarea')) {
        cursor.style.transform += ' scale(1.5)';
        cursor.style.background = 'rgba(0, 245, 255, 0.2)';
        cursor.style.borderColor = '#00f5ff';
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target && e.target.matches && e.target.matches('button, a, [role="button"], input, textarea')) {
        cursor.style.background = 'rgba(255, 255, 255, 0.05)';
        cursor.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9999]"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-[10000]"
        style={{
          background: '#00f5ff',
          boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff',
        }}
      />
      <style jsx>{`
        * { cursor: none !important; }
        body { cursor: none !important; }
      `}</style>
    </>
  );
};

export default MagneticCursor;