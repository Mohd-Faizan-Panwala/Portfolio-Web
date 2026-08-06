import React from 'react';

export default function ProjectsPage() {
  const upcomingProjects = [
    {
      title: "Role-Based Task Management System",
      status: "LIVE / ACTIVE",
      statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      desc: "A full-stack enterprise task and workforce management application with strict hierarchical role privileges, cloud database persistence, and team member oversight.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      concept: "Hierarchical RBAC, Cloud DB Sync & Responsive UI",
      githubUrl: "",
      liveDemoUrl: ""
    },
    {
      title: "LootBaazar Admin Dashboard",
      status: "LIVE / ACTIVE",
      statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      desc: "A fully responsive e-commerce administrative control panel built for managing platform users, product inventory, adding new items, and overseeing core operational details.",
      tech: ["React", "Vite", "Tailwind CSS"],
      concept: "E-Commerce Management, Inventory Control & Dashboard UI",
      githubUrl: "https://github.com/Mohd-Faizan-Panwala/lootbaazar_frontend",
      liveDemoUrl: "https://lootbaazar-frontend.vercel.app/"
    },
    {
      title: "Developer Portfolio Website",
      status: "LIVE / ACTIVE",
      statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      desc: "A modern responsive portfolio site built to showcase coding journey, core skills, and upcoming project builds.",
      tech: ["React", "Vite", "Tailwind CSS"],
      concept: "Component Architecture & Responsive Design",
      githubUrl: "",
      liveDemoUrl: ""
    }
  ];

  return (
    <div className="w-full space-y-8 animate-fadeIn pb-12">
      
      {/* HEADER SECTION */}
      <section className="bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-8 rounded-3xl space-y-3 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase flex items-center gap-2">
          <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          // LAB_&_BUILD_QUEUE
        </span>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 font-mono">
          // PROJECT_DEVELOPMENT_ROADMAP
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-4xl font-light">
          A transparent look at what I am currently constructing and testing. I prioritize writing clean, functional code step-by-step over copying pre-made templates.
        </p>
      </section>

      {/* PROJECT CARDS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {upcomingProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-slate-900/30 border border-cyan-500/20 backdrop-blur-xl p-6 rounded-3xl space-y-5 flex flex-col justify-between hover:border-cyan-400/50 transition duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            <div className="space-y-4">
              {/* STATUS BADGE */}
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border ${project.statusColor}`}>
                  ● {project.status}
                </span>
                <span className="text-[10px] font-mono text-slate-500">BUILD_ID: 0{index + 1}</span>
              </div>

              {/* TITLE & DESCRIPTION */}
              <div>
                <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{project.desc}</p>
              </div>

              {/* LEARNING CONCEPT */}
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 font-mono text-[11px]">
                <span className="text-slate-500 uppercase block text-[9px]">Key Focus:</span>
                <span className="text-slate-300 font-semibold">{project.concept}</span>
              </div>
            </div>

            {/* TECH TAGS & LINKS */}
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-slate-950 text-cyan-300 font-mono text-[10px] px-2.5 py-1 rounded-lg border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a 
                  href={project.githubUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-[11px] font-mono transition flex items-center gap-1 ${project.githubUrl ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 pointer-events-none'}`}
                >
                  GitHub →
                </a>
                <a 
                  href={project.liveDemoUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-[11px] font-mono transition flex items-center gap-1 ${project.liveDemoUrl ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 pointer-events-none'}`}
                >
                  Live Demo →
                </a>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* FOOTER NOTICE */}
      <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl text-center font-mono text-xs text-slate-400">
        💻 <span className="text-slate-300">Code repositories will be published to GitHub as each build milestone completes.</span>
      </div>

    </div>
  );
}