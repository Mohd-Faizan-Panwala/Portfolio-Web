import React from 'react';

export default function StackPage() {
  const stackCategories = [
    {
      category: "FRONTEND_DEVELOPMENT",
      color: "text-cyan-400 border-cyan-500/30",
      items: [
        {
          name: "React.js",
          level: "Intermediate",
          desc: "Building component-based interfaces, managing hooks, and routing.",
          icon: (
            <svg className="w-8 h-8 stroke-cyan-400 fill-none animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" strokeWidth="1.5">
              <ellipse cx="12" cy="12" rx="10" ry="4.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="1.5" className="fill-cyan-400" />
            </svg>
          )
        },
        {
          name: "JavaScript (ES6+)",
          level: "Core Competency",
          desc: "Async/Await, DOM manipulation, ES6 modules, and array methods.",
          icon: (
            <svg className="w-8 h-8 stroke-yellow-400 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M16 8v8a2 2 0 0 1-2 2h-1" />
              <path d="M9 12a2 2 0 0 0 2 2h1a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h2" />
            </svg>
          )
        },
        {
          name: "Tailwind CSS",
          level: "Intermediate",
          desc: "Utility-first styling, responsive grid layouts, and custom themes.",
          icon: (
            <svg className="w-8 h-8 stroke-sky-400 fill-none animate-bounce" style={{ animationDuration: '3s' }} viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M12 6c-3.3 0-5.3 1.6-6 4.8 1.3-1.6 2.8-2.1 4.5-1.6 1 0.3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6 2.8 3.3 0 5.3-1.6 6-4.8-1.3 1.6-2.8 2.1-4.5 1.6-1-0.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.8-6-2.8z"/>
              <path d="M6 13c-3.3 0-5.3 1.6-6 4.8 1.3-1.6 2.8-2.1 4.5-1.6 1 0.3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.8 6 2.8 3.3 0 5.3-1.6 6-4.8-1.3 1.6-2.8 2.1-4.5 1.6-1-0.3-1.7-1-2.5-1.8-1.3-1.3-2.8-2.8-6-2.8z"/>
            </svg>
          )
        },
        {
          name: "HTML5 / CSS3",
          level: "Proficient",
          desc: "Semantic elements, Flexbox, Grid, and cross-browser layouts.",
          icon: (
            <svg className="w-8 h-8 stroke-orange-400 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3z" />
              <path d="M16 7H8v4h7.5L15 17.5 12 18.5 9 17.5l-.3-3" />
            </svg>
          )
        }
      ]
    },
    {
      category: "BACKEND_&_APIS",
      color: "text-emerald-400 border-emerald-500/30",
      items: [
        {
          name: "Node.js",
          level: "Intermediate",
          desc: "Building event-driven JavaScript runtime environments and server logic.",
          icon: (
            <svg className="w-8 h-8 stroke-emerald-400 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
              <circle cx="12" cy="12" r="3" className="fill-emerald-400/30" />
            </svg>
          )
        },
        {
          name: "Express.js",
          level: "Intermediate",
          desc: "Creating RESTful API endpoints, request routing, and middleware.",
          icon: (
            <svg className="w-8 h-8 stroke-teal-300 fill-none animate-spin" style={{ animationDuration: '12s' }} viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12h8M12 8v8" />
            </svg>
          )
        },
        {
          name: "REST APIs",
          level: "Core Concept",
          desc: "HTTP methods (GET, POST, PUT, DELETE), JSON payloads, and status codes.",
          icon: (
            <svg className="w-8 h-8 stroke-green-400 fill-none animate-bounce" style={{ animationDuration: '2.5s' }} viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          )
        }
      ]
    },
    {
      category: "DATABASES_&_TOOLS",
      color: "text-purple-400 border-purple-500/30",
      items: [
        {
          name: "MongoDB",
          level: "Basics",
          desc: "NoSQL document collections, CRUD queries, and simple schemas.",
          icon: (
            <svg className="w-8 h-8 stroke-emerald-500 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M12 2s-7 7-7 12a7 7 0 0 0 14 0C19 9 12 2 12 2z" />
              <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
          )
        },
        {
          name: "SQL / MySQL",
          level: "Academic Basis",
          desc: "Relational database tables, SELECT queries, JOINs, and primary keys.",
          icon: (
            <svg className="w-8 h-8 stroke-indigo-400 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          )
        },
        {
          name: "Git & GitHub",
          level: "Proficient",
          desc: "Version control workflows: commits, branches, pull requests, and repos.",
          icon: (
            <svg className="w-8 h-8 stroke-purple-400 fill-none animate-pulse" viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <path d="M18 15V9a3 3 0 0 0-3-3H9" />
              <line x1="6" y1="9" x2="6" y2="15" />
            </svg>
          )
        },
        {
          name: "Postman",
          level: "Practiced",
          desc: "Testing API routes, verifying request bodies, and checking responses.",
          icon: (
            <svg className="w-8 h-8 stroke-amber-500 fill-none animate-bounce" style={{ animationDuration: '3.5s' }} viewBox="0 0 24 24" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <div className="w-full space-y-8 animate-fadeIn pb-12">
      
      {/* HEADER SECTION */}
      <section className="bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-8 rounded-3xl space-y-3 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase flex items-center gap-2">
          <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
          // TECH_INFRASTRUCTURE
        </span>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 font-mono">
          // TECHNICAL_STACK
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl font-light">
          A practical overview of the technologies, tools, and fundamentals I work with daily to construct full-stack web applications.
        </p>
      </section>

      {/* CATEGORY GROUPS */}
      <div className="space-y-8">
        {stackCategories.map((cat, idx) => (
          <section key={idx} className="space-y-4">
            <h3 className={`font-mono text-xs tracking-widest uppercase flex items-center gap-2 ${cat.color}`}>
              // {cat.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {cat.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-slate-900/30 border border-cyan-500/20 backdrop-blur-xl p-6 rounded-2xl space-y-3 hover:border-cyan-400/50 transition duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 w-fit drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-base font-mono">{item.name}</h4>
                      <span className="text-[10px] font-mono text-cyan-400 block mt-0.5">{item.level}</span>
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}