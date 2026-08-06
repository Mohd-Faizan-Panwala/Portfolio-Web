import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// =========================================================
// ⚙️ PASTE YOUR EMAILJS KEYS HERE
// =========================================================
const SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g., 'service_abc123'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz456'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g., 'user_pk_789xyz'
// =========================================================

export default function ContactPage({ data }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        if (formRef.current) formRef.current.reset();
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('error');
      });
  };

  return (
    <div className="w-full space-y-8 animate-fadeIn pb-12">
      
      {/* HEADER */}
      <section className="bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-8 rounded-3xl space-y-3 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
        <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          // COMMUNICATION_ENDPOINT
        </span>
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 font-mono">
          // GET IN TOUCH
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl font-light">
          Have an opportunity or question? Send a message directly to my inbox.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* CONTACT FORM */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-6 lg:p-8 rounded-3xl space-y-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            
            <div>
              <label className="block text-slate-400 mb-2 uppercase tracking-wider">// YOUR_NAME</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                placeholder="John Doe"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 text-slate-200 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 uppercase tracking-wider">// YOUR_EMAIL</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                placeholder="john@example.com"
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 text-slate-200 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 uppercase tracking-wider">// MESSAGE</label>
              <textarea 
                name="message" 
                rows="5" 
                required 
                placeholder="Write your message here..."
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 text-slate-200 focus:outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-slate-950 font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition duration-300 disabled:opacity-50 cursor-pointer"
            >
              {status === 'sending' ? 'TRANSMITTING MESSAGE...' : 'SEND MESSAGE ➔'}
            </button>

            {/* FEEDBACK MESSAGES */}
            {status === 'success' && (
              <p className="text-emerald-400 text-center font-semibold pt-2">
                ✓ Message transmitted successfully! I will reply shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center font-semibold pt-2">
                ✕ Failed to send message. Please try again or reach out directly via email.
              </p>
            )}

          </form>
        </div>

        {/* DIRECT CONTACT INFO */}
        <div className="lg:col-span-5 bg-slate-900/40 border border-cyan-500/20 backdrop-blur-xl p-6 lg:p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-mono text-xs text-cyan-400 tracking-widest uppercase">// DIRECT_CHANNELS</h3>
            
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">Primary Email</span>
                <div className="text-slate-200 font-bold">{data?.email || "faizanpanwala110@gmail.com"}</div>
              </div>

              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase">Availability</span>
                <div className="text-emerald-400 font-bold">● Open to Entry-Level Roles</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl font-mono text-[11px] text-slate-400">
            🔒 <span className="text-slate-300">Direct transmission to inbox. No database or tracking involved.</span>
          </div>
        </div>

      </div>

    </div>
  );
}