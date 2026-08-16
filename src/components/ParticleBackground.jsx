import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    const isMobile = W < 768;
    const COUNT = isMobile ? 40 : 100;
    const CONNECT_DIST = isMobile ? 80 : 130;
    const MOUSE_DIST = 120;

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.hue = Math.random() < 0.5 ? 180 : 270; // cyan or violet
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        // mouse repulsion
        const dx = this.x - mouseRef.current.x;
        const dy = this.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST;
          this.x += (dx / dist) * force * 2;
          this.y += (dy / dist) * force * 2;
        }
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `hsl(${this.hue}, 100%, 70%)`;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.25;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const grd = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            grd.addColorStop(0, `hsl(${particles[i].hue}, 100%, 70%)`);
            grd.addColorStop(1, `hsl(${particles[j].hue}, 100%, 70%)`);
            ctx.strokeStyle = grd;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.restore();
          }
        }
        particles[i].update();
        particles[i].draw();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onTouch = (e) => {
      if (e.touches[0]) mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', onMouse);
    window.addEventListener('touchmove', onTouch);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
    />
  );
}
