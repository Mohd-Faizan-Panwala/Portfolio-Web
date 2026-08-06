import React from 'react';

export default function AboutPage({ data }) {
  // Upgraded coreFocus array with animated, glowing SVG vector icons
  const coreFocus = [
    {
      title: "Responsive Web Design",
      desc: "Building clean, mobile-friendly user interfaces using React and Tailwind CSS.",
      icon: (
        <svg className="w-7 h-7 stroke-cyan-400 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      title: "Backend & APIs",
      desc: "Creating basic REST APIs and handling database requests with Node.js/Express.",
      icon: (
        <svg className="w-7 h-7 stroke-emerald-400 fill-none animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      )
    },
    {
      title: "Database Basics",
      desc: "Storing and managing application data cleanly using MongoDB or SQL databases.",
      icon: (
        <svg className="w-7 h-7 stroke-purple-400 fill-none animate-bounce" style={{ animationDuration: '3s' }} viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      )
    },
    {
      title: "Continuous Learning",
      desc: "Constantly practicing code, debugging errors, and exploring modern web tools.",
      icon: (
        <svg className="w-7 h-7 stroke-amber-400 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      )
    }
  ];

  const practicalHighlights = [
    { label: "Status", val: "Computer Science Graduate / Entry-Level Developer" },
    { label: "Core Subjects", val: "Data Structures, Algorithms, DBMS, Web Development" },
    { label: "Primary Stack", val: "JavaScript, React, Node.js, HTML/CSS, Git" },
    { label: "Goal", val: "Seeking an entry-level / junior role to learn and contribute" }
  ];

  return (
    <div className="w-full space-y-8 animate-fadeIn pb-12">
      
      {/* REALISTIC BIO */}
      <section className="bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-8 rounded-3xl space-y-4 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase flex items-center gap-2">
          <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          // ABOUT_ME
        </span>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 font-mono">
          // MY APPROACH TO CODING
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-4xl font-light">
          I am a Computer Science graduate passionate about building practical web applications. I focus on writing clear, readable code and understanding fundamental web concepts. I enjoy turning ideas into functional user interfaces and working on backend logic to connect everything together.
        </p>
      </section>

      {/* 2-COLUMN GRID: JOURNEY + QUICK INFO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* LEFT: GROUNDED TIMELINE */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-6 lg:p-8 rounded-3xl space-y-6">
          <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase flex items-center gap-2">
            // LEARNING_JOURNEY
          </h3>

          <div className="space-y-6 border-l-2 border-cyan-500/30 pl-6 ml-2">
            
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">CURRENT</span>
              <h4 className="text-lg font-bold text-white">Junior Web Developer / Aspiring Engineer</h4>
              <p className="text-xs text-slate-400 mt-1">
                Building personal full-stack projects to strengthen hands-on coding and problem-solving skills.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-emerald-400"></div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">PROJECT WORK</span>
              <h4 className="text-lg font-bold text-white">Full-Stack Practice Projects</h4>
              <p className="text-xs text-slate-400 mt-1">
                Developed responsive frontend interfaces with React and connected them to Node.js backend services.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-purple-400"></div>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">EDUCATION</span>
              <h4 className="text-lg font-bold text-white">Computer Science Degree</h4>
              <p className="text-xs text-slate-400 mt-1">
                Studied fundamental software engineering concepts, database management, and programming basics.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT: QUICK HIGHLIGHTS */}
        <div className="lg:col-span-5 bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-6 lg:p-8 rounded-3xl space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-emerald-400 tracking-widest uppercase flex items-center gap-2">
              // PROFILE_SUMMARY
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {practicalHighlights.map((item, idx) => (
                <div key={idx} className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase">{item.label}</div>
                  <div className="text-slate-200 font-semibold">{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-xs font-mono text-cyan-300 flex items-center gap-3">
            <span className="text-xl">🚀</span>
            <span>Eager to join a team where I can grow, learn best practices, and contribute.</span>
          </div>
        </div>

      </section>

      {/* WHAT I DO SECTION WITH ANIMATED VECTOR ICONS */}
      <section className="space-y-4">
        <h3 className="font-mono text-xs text-purple-400 tracking-widest uppercase flex items-center gap-2">
          // WHAT_I_DO
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {coreFocus.map((item, index) => (
            <div key={index} className="bg-slate-900/30 border border-cyan-500/20 backdrop-blur-xl p-6 rounded-2xl space-y-3 hover:border-cyan-400/50 transition duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 w-fit drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                {item.icon}
              </div>
              <h4 className="font-bold text-white text-base font-mono">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}