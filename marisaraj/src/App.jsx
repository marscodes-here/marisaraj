import './App.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function App() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const rings = 12;
    const points = 80;
    const baseRadius = 40;
    const ringSpacing = 10;

    const noiseOffset = Array.from({ length: rings }, () =>
      Array.from({ length: points }, () => Math.random() * 1000)
    );

    const lerp = (a, b, t) => a + (b - a) * t;

    window.addEventListener('mousemove', (e) => {
      gsap.to(mouse.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out'
      });
    });

    let time = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      ctx.translate(mouse.current.x, mouse.current.y);

      for (let r = 0; r < rings; r++) {
        const radius = baseRadius + r * ringSpacing;
        ctx.beginPath();

        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const n = noiseOffset[r][i % points];
          const noise = Math.sin(time * 0.002 + n) * 8;

          const rad = radius + noise;
          const x = rad * Math.cos(angle);
          const y = rad * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const red = Math.floor(255 - r * (255 / rings));
        const alpha = 1 - r / rings;
        ctx.strokeStyle = `rgba(${red}, 0, 0, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.restore();
      time += 1;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className="container">
      <canvas ref={canvasRef} className="background-canvas"></canvas>

      <nav className="navbar">
        <a href='https://www.linkedin.com/in/marisaraj/' target='_blank' rel='noreferrer' className="nav-link">Conta<br/>ct Me/</a>
      </nav>

      <div className="content-row">
        <div className="name-block">
          <h1>Marisa</h1>
          <h2>Raj.</h2>
        </div>

        <div className="bio-block">
          <p>
          I'm a Software Engineer with over 3 years of experience building scalable solutions across Telecom, FinTech, and EV sectors. 
          <br></br>
          I started out in frontend development with React, gradually expanded into backend work using Go and Python, and eventually embraced DevOps to ensure smoother, more reliable deployments. 
          <br/>   
          I enjoy working closely with stakeholders to turn complex business needs into practical, maintainable software.
          <br></br>
          At the core, I love solving real-world problems, learning new things, and building software that actually makes a difference.
          </p>
        </div>
      </div>

      <img src="/assets/komodo_dragon.png" alt="Komodo Sketch" className="komodo-background" />
    </div>
  );
}

export default App;
