import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage({ data = {}, onNavigate }) {
  const canvasRef = useRef(null);
  const [activeLine, setActiveLine] = useState(0);

  // Exact data fallbacks matching the screenshot
  const userName = data?.name ? data.name.toUpperCase() : "FAIZAN";
  const userSubtitle = data?.subtitle || "Building scalable backend architectures, automated data pipelines, and responsive web applications with precision.";
  
  const metricsList = Array.isArray(data?.metrics) && data.metrics.length > 0 ? data.metrics : [
    { label: "CORE TECH", value: "3+" },
    { label: "PROJECTS", value: "5+" },
    { label: "YEARS EXP", value: "Fresher" }
  ];

  // Seamless navigation handler
  const handleNav = (path, pageId) => (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageId);
    }
  };

  // 1. DYNAMIC MATRIX STREAM CANVAS
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '01100101001010101110010010101001constasyncimportexport<>/{}[]';
    const fontSize = 12;
    const columns = Math.floor((canvas.width || 800) / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(11, 15, 25, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = i % 2 === 0 ? 'rgba(34, 211, 238, 0.5)' : 'rgba(16, 185, 129, 0.3)';
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 2. ACTIVE CODE INSPECTOR HIGHLIGHT LOOP
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    { num: "01", code: 'import { System } from "@core/kernel";' },
    { num: "02", code: 'const engine = new System.Pipeline({ async: true });' },
    { num: "03", code: 'await engine.deployNodes(["REST", "GraphQL", "gRPC"]);' },
    { num: "04", code: 'console.log("System status: 100% Operational");' },
    { num: "05", code: 'export default engine.init();' }
  ];

  const systemLogs = [
    { time: '08:20:12', status: 'OK', log: 'API Gateway active on port 5000' },
    { time: '08:20:15', status: 'INFO', log: 'Database connection pool initialized [PostgreSQL]' },
    { time: '08:20:18', status: 'SUCCESS', log: 'Frontend build synced across CDN nodes' },
  ];

  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fadeIn pb-28 md:pb-12 select-none">
      
      {/* HERO SECTION WITH DYNAMIC MATRIX & SCANNER OVERLAY */}
      <section className="relative overflow-hidden bg-slate-900/40 border border-cyan-500/30 backdrop-blur-xl p-5 sm:p-8 lg:p-12 rounded-3xl space-y-6 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
        
        {/* MATRIX CANVAS */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full opacity-25 pointer-events-none mix-blend-screen"
        />

        {/* SCANNING RADAR LINE ANIMATION */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-20 w-full animate-pulse pointer-events-none"></div>

        {/* GRADIENT MASK FOR READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40 pointer-events-none"></div>

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="font-mono text-cyan-400 text-[11px] sm:text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              // ARCHITECTURE & DEVELOPMENT
            </span>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">{userName}.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 leading-snug">
              FULL-STACK DEVELOPER BUILDING SCALABLE SYSTEMS.
            </p>
            
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed font-light max-w-2xl">
              {userSubtitle}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <Link 
                to="/projects" 
                onClick={handleNav('/projects', 'projects')} 
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-mono font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition flex items-center gap-2"
              >
                EXPLORE PROJECTS ↗
              </Link>
              
              <Link 
                to="/contact" 
                onClick={handleNav('/contact', 'contact')} 
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs tracking-wider uppercase hover:border-cyan-400 transition backdrop-blur-md"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>

          {/* LIVE CODE EXECUTION BOX (KernelWorker.ts) */}
          <div className="lg:col-span-5 backdrop-blur-2xl bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl font-mono text-xs space-y-3 mt-4 lg:mt-0">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                <span className="text-slate-400 text-[10px] ml-2">KernelWorker.ts</span>
              </div>
              <span className="text-emerald-400 text-[10px] animate-pulse">● EXECUTING</span>
            </div>

            <div className="space-y-1.5 py-1">
              {codeLines.map((line, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2.5 sm:gap-3 p-1 rounded transition duration-300 ${
                    activeLine === index ? 'bg-cyan-500/15 border-l-2 border-cyan-400 text-cyan-200' : 'text-slate-400'
                  }`}
                >
                  <span className="text-slate-600 select-none text-[10px]">{line.num}</span>
                  <code className="truncate text-[11px] sm:text-xs">{line.code}</code>
                </div>
              ))}
            </div>

            {/* LIVE TELEMETRY METERS */}
            <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-[10px] text-slate-400">
              <div>
                <div className="flex justify-between mb-1">
                  <span>CPU THREADS</span>
                  <span className="text-cyan-400">38%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-cyan-400 h-1.5 rounded-full w-[38%] animate-pulse"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>LATENCY</span>
                  <span className="text-emerald-400">14ms</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-1.5 rounded-full w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* METRICS ROW - Side-by-side on desktop (exact screenshot match), stacked on mobile */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full font-mono">
        {metricsList.map((m, index) => (
          <div key={index} className="backdrop-blur-2xl bg-slate-900/30 border border-cyan-500/20 p-4 sm:p-6 rounded-2xl flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-cyan-400/40 transition">
            <div className="text-xs text-slate-300 font-bold uppercase tracking-widest">{m.label}</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              {m.value}
            </div>
          </div>
        ))}
      </section>

      {/* LIVE TERMINAL LOGS & SYSTEM FOCUS HUD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* LIVE TERMINAL LOGS */}
        <div className="lg:col-span-7 backdrop-blur-2xl bg-slate-900/40 border border-cyan-500/20 p-5 sm:p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs text-cyan-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              // SYSTEM_DIAGNOSTICS_STREAM
            </span>
            <span className="text-slate-500 text-[10px] sm:text-xs">TTY_PORT: 8080</span>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            {systemLogs.map((log, i) => (
              <div key={i} className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 bg-slate-950/70 p-2.5 sm:p-3 rounded-xl border border-slate-800/80">
                <span className="text-slate-500 text-[10px] sm:text-xs">{log.time}</span>
                <span className="text-emerald-400 font-bold text-[10px] sm:text-xs">[{log.status}]</span>
                <span className="text-slate-300 truncate text-[11px] sm:text-xs w-full sm:w-auto">{log.log}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CURRENT FOCUS HUD */}
        <div className="lg:col-span-5 backdrop-blur-2xl bg-slate-900/40 border border-cyan-500/20 p-5 sm:p-6 rounded-3xl space-y-4 flex flex-col justify-between">
          <div className="space-y-2 font-mono">
            <span className="text-[11px] text-purple-400 uppercase tracking-widest font-bold block">// CURRENT_DEVELOPMENT_FOCUS</span>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">Distributed Microservices & Async Pipelines</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans sm:font-mono">
              Currently engineering high-throughput backend services and event-driven data streaming engines with Python and Node.js.
            </p>
          </div>

          <div className="pt-3">
            <Link 
              to="/stack" 
              onClick={handleNav('/stack', 'stack')} 
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition"
            >
              VIEW FULL INFRASTRUCTURE ➔
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}