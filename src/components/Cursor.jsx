import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {

    if (window.matchMedia('(pointer: coarse)').matches) {
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = { x: -100, y: -100 };
    const smooth = { x: -100, y: -100 };
    let hovering = false;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.left = mouse.x + 'px';
      dot.style.top = mouse.y + 'px';
    };


    let raf;
    const animate = () => {
      smooth.x += (mouse.x - smooth.x) * 0.12;
      smooth.y += (mouse.y - smooth.y) * 0.12;
      ring.style.left = smooth.x + 'px';
      ring.style.top = smooth.y + 'px';
      ring.classList.toggle('hovering', hovering);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = () => { hovering = true; };
    const onLeave = () => { hovering = false; };

    const tracked = new Set();
    const track = () => {
      document.querySelectorAll('a, button, .hoverable, input, textarea, .tilt-card').forEach(el => {
        if (!tracked.has(el)) {
          tracked.add(el);
          el.addEventListener('mouseenter', onEnter);
          el.addEventListener('mouseleave', onLeave);
        }
      });
    };

    window.addEventListener('mousemove', onMove);
    track();

    const obs = new MutationObserver(track);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      obs.disconnect();
      tracked.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

