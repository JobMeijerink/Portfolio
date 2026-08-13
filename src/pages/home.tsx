import { Navbar } from "@/components/navbar";
import { OrbBackground } from "@/components/orb-background";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, ChevronDown, ChevronRight, Instagram, Linkedin, Mail, Phone, Scissors, Sparkles, Zap, Film, Layers, TrendingUp, Image as ImageIcon, Eye, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const UGC_ADS = [
  { title: "UGC Ad 01", thumb: "/ugc/1XYk5yXXpHRdkLas5s60ffKLUWBJOl6Kd.jpg",        link: "https://drive.google.com/file/d/1XYk5yXXpHRdkLas5s60ffKLUWBJOl6Kd/view" },
  { title: "UGC Ad 02", thumb: "/ugc/1zLpBhMr3loecVBvJMzRX4PqemBpBmOv6.jpg",        link: "https://drive.google.com/file/d/1zLpBhMr3loecVBvJMzRX4PqemBpBmOv6/view" },
  { title: "UGC Ad 03", thumb: "/ugc/1zw9nZdw6dURM3cb0jLJsf4I_GP_uxMlm.jpg",        link: "https://drive.google.com/file/d/1zw9nZdw6dURM3cb0jLJsf4I_GP_uxMlm/view" },
  { title: "UGC Ad 04", thumb: "/ugc/1EEAvhbjDCsd2sGw2kob-F3dxGxlIgNas.jpg",        link: "https://drive.google.com/file/d/1EEAvhbjDCsd2sGw2kob-F3dxGxlIgNas/view" },
  { title: "UGC Ad 05", thumb: "/ugc/1qPXvLRg_xDU8LG11WBBtAA4g_nPi8xCp.jpg",        link: "https://drive.google.com/file/d/1qPXvLRg_xDU8LG11WBBtAA4g_nPi8xCp/view?usp=sharing" },
  { title: "UGC Ad 06", thumb: "/ugc/1wsVikbOTNEMB3cB94IexT5WeWySyoyht.jpg",         link: "https://drive.google.com/file/d/1wsVikbOTNEMB3cB94IexT5WeWySyoyht/view" },
  { title: "UGC Ad 07", thumb: "/ugc/1y8Pyc1Loxs2zTAj6aSS0d9uhFIBqnIuZ.jpg",        link: "https://drive.google.com/file/d/1y8Pyc1Loxs2zTAj6aSS0d9uhFIBqnIuZ/view" },
  { title: "UGC Ad 08", thumb: "/ugc/1NQM3BodmirD_GZZy_zAEzKP1wEjDaSNX.jpg",        link: "https://drive.google.com/file/d/1NQM3BodmirD_GZZy_zAEzKP1wEjDaSNX/view" },
  { title: "UGC Ad 09", thumb: "/ugc/10ZAeqTX6kWHFf9IZUVXZJSqucrc8WG8w.jpg",        link: "https://drive.google.com/file/d/10ZAeqTX6kWHFf9IZUVXZJSqucrc8WG8w/view" },
  { title: "UGC Ad 10", thumb: "/ugc/comfit-thumb.jpg",                               link: "https://drive.google.com/file/d/1HfMZYQ425sTeB3h8t5MC_KkVUvHLt1Ri/view?usp=drive_link" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <OrbBackground />
      <Navbar />
      <main className="relative z-10">
        
        {/* SECTION 1 - HERO + ABOUT ME */}
        <section className="pt-24 md:pt-28 pb-16 px-6 relative">
          <div className="max-w-7xl mx-auto relative z-10">

            {/* ── ROW 1: Hero text (left) + selfie (right) ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <FadeIn delay={0.2}>
                  <h1 className="text-[6.5vw] sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.15]">
                    Hand Me Your Raw Footage{'\u00A0'}And
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 relative inline-block">
                      I'll Take Care Of It
                      <svg
                        className="absolute -bottom-3 left-0 w-full overflow-visible"
                        height="16"
                        viewBox="0 0 200 16"
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="ul-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6C63FF" />
                            <stop offset="100%" stopColor="#c084fc" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M10 2 Q50 14 100 10 T190 8"
                          stroke="url(#ul-grad)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          className="squiggle-path"
                        />
                      </svg>
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="text-lg md:text-xl text-muted-foreground mb-7 max-w-xl font-light leading-relaxed">
                    I help creators and brands produce high-performing content that converts views into real growth — from YouTube documentaries to viral short-form.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4} className="flex flex-row items-center gap-3 mb-0">
                  <Button className="hover:-translate-y-[2%] transition-transform duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                    Work With Me
                  </Button>
                  <Button variant="outline" className="group hover:-translate-y-[2%] transition-transform duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </FadeIn>
              </div>

              {/* Selfie — right on desktop, below CTAs on mobile */}
              <FadeIn direction="left" delay={0.3} className="relative group flex flex-col items-center mt-4 lg:mt-0 pb-2 lg:pb-4">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700 pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-card w-48 sm:w-64 lg:w-80 aspect-[3/4] hover:-translate-y-[2%] transition-all duration-300 shadow-[0_0_28px_-2px_rgba(139,92,246,0.7),_0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_45px_-4px_rgba(139,92,246,0.75),_0_8px_32px_rgba(0,0,0,0.5)] hover:border-violet-500/30">
                  <img src="/job-selfie.jpg" alt="Job Meijerink" className="w-full h-full object-cover object-top transition-all duration-700" />
                </div>
                {/* Sticker badge — overlaps bottom ~25% onto photo */}
                <div className="relative -mt-5 z-10 flex items-center gap-2 bg-card/80 backdrop-blur-xl border border-white/20 text-white px-5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),_0_0_16px_-4px_rgba(139,92,246,0.5)] whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                  <span className="text-sm font-semibold tracking-wide">Video Editor & Social Media Expert</span>
                </div>
                {/* Scroll chevrons — mobile only, no extra layout space */}
                <div className="md:hidden flex flex-col items-center gap-0 mt-3 select-none pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-primary/60 animate-bounce" style={{ animationDelay: '0s' }} />
                  <ChevronDown className="w-4 h-4 text-primary/30 animate-bounce" style={{ animationDelay: '0.15s' }} />
                </div>
              </FadeIn>
            </div>

            {/* ── ROW 2: About Me — laptop photo left, text right (desktop); text first on mobile ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-3 lg:mt-16 pt-12 border-t border-white/15 items-center">

              {/* About me text — order-1 on mobile (appears first), order-2 on desktop (right col) */}
              <FadeIn delay={0.2} className="order-1 lg:order-2">
                <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">About Me</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">A Dutch Video Editor Living Life on the Road</h2>
                <p className="text-muted-foreground text-lg md:text-xl mb-5 leading-relaxed font-light">My name is Job (Jacob in English). I'm 27, Dutch, and I've been traveling the world while building a career in video editing.</p>
                <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed font-light">I've built a global network in the creator space, worked with e.g. big YouTube channels and UGC-agencies, and generated over 500 million views across platforms through organic content alone.</p>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Premiere Pro',        Icon: Scissors,   rest: 'bg-indigo-950/30 border-indigo-500/20',   hov: 'hover:bg-indigo-950/70 hover:border-indigo-500/40 hover:text-indigo-200 hover:shadow-[0_0_16px_-4px_rgba(99,102,241,0.45)]' },
                    { label: 'After Effects',        Icon: Sparkles,   rest: 'bg-purple-950/30 border-purple-500/20',   hov: 'hover:bg-purple-950/70 hover:border-purple-500/40 hover:text-purple-200 hover:shadow-[0_0_16px_-4px_rgba(168,85,247,0.45)]' },
                    { label: 'Short-Form',           Icon: Zap,        rest: 'bg-cyan-950/30 border-cyan-500/20',       hov: 'hover:bg-cyan-950/70 hover:border-cyan-500/40 hover:text-cyan-200 hover:shadow-[0_0_16px_-4px_rgba(34,211,238,0.4)]' },
                    { label: 'Long-Form',            Icon: Film,       rest: 'bg-blue-950/30 border-blue-500/20',       hov: 'hover:bg-blue-950/70 hover:border-blue-500/40 hover:text-blue-200 hover:shadow-[0_0_16px_-4px_rgba(59,130,246,0.4)]' },
                    { label: 'Motion Design',        Icon: Layers,     rest: 'bg-rose-950/30 border-rose-500/20',       hov: 'hover:bg-rose-950/70 hover:border-rose-500/40 hover:text-rose-200 hover:shadow-[0_0_16px_-4px_rgba(251,113,133,0.4)]' },
                    { label: 'UGC Ads',              Icon: TrendingUp, rest: 'bg-emerald-950/30 border-emerald-500/20', hov: 'hover:bg-emerald-950/70 hover:border-emerald-500/40 hover:text-emerald-200 hover:shadow-[0_0_16px_-4px_rgba(52,211,153,0.4)]' },
                    { label: 'Thumbnails',           Icon: ImageIcon,  rest: 'bg-amber-950/30 border-amber-500/20',     hov: 'hover:bg-amber-950/70 hover:border-amber-500/40 hover:text-amber-200 hover:shadow-[0_0_16px_-4px_rgba(251,191,36,0.4)]' },
                    { label: 'Visual Story Telling', Icon: Eye,        rest: 'bg-rose-950/30 border-rose-500/20',       hov: 'hover:bg-rose-950/70 hover:border-rose-500/40 hover:text-rose-200 hover:shadow-[0_0_16px_-4px_rgba(251,113,133,0.4)]' },
                  ].map(({ label, Icon, rest, hov }) => (
                    <span key={label} className={`flex flex-col items-center justify-center gap-1 border text-white/90 px-2 py-2 rounded-xl text-[10px] md:text-xs font-medium transition-all duration-200 cursor-default text-center leading-tight ${rest} ${hov}`}>
                      <Icon className="w-3.5 h-3.5 opacity-60 shrink-0" />
                      {label}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* Laptop photo — order-2 on mobile (after text), order-1 on desktop (left col) */}
              <FadeIn direction="right" delay={0.3} className="order-2 lg:order-1 relative group flex flex-col items-center mt-6 lg:mt-0">
                <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700 pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-card w-full max-w-[261px] lg:max-w-[326px] aspect-[4/5] hover:-translate-y-[2%] transition-all duration-300 shadow-[0_0_28px_-2px_rgba(239,68,68,0.49),_0_8px_32px_rgba(0,0,0,0.5)] lg:shadow-[0_0_28px_-2px_rgba(239,68,68,0.65),_0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_45px_-4px_rgba(239,68,68,0.52),_0_8px_32px_rgba(0,0,0,0.5)] lg:hover:shadow-[0_0_45px_-4px_rgba(239,68,68,0.69),_0_8px_32px_rgba(0,0,0,0.5)] hover:border-red-500/30">
                  <img src="/job-laptop.jpg" alt="Job Meijerink working remotely" className="w-full h-full object-cover object-center transition-all duration-700" />
                </div>
                {/* Sticker badge — overlaps bottom of photo */}
                <div className="relative -mt-5 z-10 flex items-center gap-2 bg-card/80 backdrop-blur-xl border border-white/20 text-white px-5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6),_0_0_16px_-4px_rgba(239,68,68,0.35)] whitespace-nowrap">
                  <Globe className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-sm font-semibold tracking-wide">Worldwide</span>
                </div>
              </FadeIn>
            </div>

          </div>

        </section>

        {/* SECTION 4 - STATS ROW */}
        <section className="pt-0 pb-12 px-6 relative">

          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
              <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 grid grid-cols-2 md:flex md:flex-row md:items-center justify-around gap-0 md:gap-6 text-center shadow-[0_0_90px_-10px_rgba(79,70,229,0.33),_0_0_40px_-5px_rgba(59,130,246,0.13)] hover:-translate-y-1 transition-transform duration-300">
                <div className="px-2 py-3 md:py-1 flex flex-col items-center justify-center border-b border-r md:border-b-0 md:border-r-0 border-white/15">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">+500M</div>
                  <div className="text-muted-foreground uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-2">Views Generated</div>
                  <span className="text-lg md:text-xl leading-none" style={{ filter: 'saturate(0.65) brightness(0.82)', display: 'inline-block' }}>👁️</span>
                </div>
                <div className="hidden md:block w-px h-14 bg-border/50 shrink-0"></div>
                <div className="px-2 py-3 md:py-1 flex flex-col items-center justify-center border-b md:border-b-0 border-white/15">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">4+</div>
                  <div className="text-muted-foreground uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-2">Years Freelancing</div>
                  <span className="text-lg md:text-xl leading-none" style={{ filter: 'saturate(0.65) brightness(0.82)', display: 'inline-block' }}>⏱️</span>
                </div>
                <div className="hidden md:block w-px h-14 bg-border/50 shrink-0"></div>
                <div className="px-2 py-3 md:py-1 flex flex-col items-center justify-center border-r md:border-r-0 border-white/15">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">125+</div>
                  <div className="text-muted-foreground uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-2">Projects Delivered</div>
                  <span className="text-lg md:text-xl leading-none" style={{ filter: 'saturate(0.65) brightness(0.82)', display: 'inline-block' }}>💼</span>
                </div>
                <div className="hidden md:block w-px h-14 bg-border/50 shrink-0"></div>
                <div className="px-2 py-3 md:py-1 flex flex-col items-center justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">4</div>
                  <div className="text-muted-foreground uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-2">Countries Worked From</div>
                  <div className="flex items-center gap-1.5">
                    {['🇳🇱', '🇦🇷', '🇧🇷', '🇪🇸'].map((flag, i) => (
                      <span key={i} className="text-lg md:text-xl leading-none" style={{ filter: 'saturate(0.65) brightness(0.82)', display: 'inline-block' }}>{flag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6"><div className="border-t border-white/15" /></div>

        {/* SECTION 5 - PROJECTS */}
        <section id="projects" className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">View My Past Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">A selection of my recent work across different content types.</p>
            </FadeIn>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {[
                { title: "Mansion Tours",    thumb: "https://i.ytimg.com/vi/t1cNwVAjRXE/maxresdefault.jpg",                          link: "https://youtu.be/t1cNwVAjRXE?si=1kxM7_KexBECnI-p",                                     badge: "Long-Form",   objectPos: "center 30%", thumbCls: "scale-[1.35] group-hover:scale-[1.4]"  },
                { title: "Post Production", thumb: "https://i.ytimg.com/vi/aO0ZSTDxeYc/maxresdefault.jpg",                          link: "https://www.youtube.com/watch?v=aO0ZSTDxeYc",                                          badge: "Production",  objectPos: "top",        thumbCls: "scale-[1.15] group-hover:scale-[1.2]"  },
                { title: "Real Estate Vlogs", thumb: "https://ucarecdn.com/f4e166a2-e803-4354-9f2e-b727d061bc1d/-/format/auto/",    link: "https://www.facebook.com/aaronvankampenFB/videos/2052477421932547",                      badge: "Vlog",        objectPos: "center 20%", thumbCls: "scale-[1.3] group-hover:scale-[1.35]"  },
                { title: "Travel Vlogs",    thumb: "https://i.ytimg.com/vi/XX-46T6D9os/maxresdefault.jpg",                          link: "https://youtu.be/XX-46T6D9os?si=YyYDF39xRikslhHK",                                     badge: "Travel",      objectPos: "center",     thumbCls: "scale-[1.15] group-hover:scale-[1.2]"  },
              ].map((project, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block relative rounded-2xl overflow-hidden bg-card border border-white/15 hover:border-primary/40 hover:shadow-[0_0_40px_-15px_hsl(var(--primary))] transition-all duration-500 h-full flex flex-col hover:-translate-y-[2%]">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img src={project.thumb} alt={project.title} className={`w-full h-full object-cover transition-transform duration-700 ${project.thumbCls}`} style={{ objectPosition: project.objectPos }} />
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
                        <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                          {project.badge}
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="bg-primary text-white p-3 sm:p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Play className="w-4 h-4 sm:w-6 sm:h-6 ml-0.5 sm:ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3 sm:p-6 border-t border-white/10 flex-grow">
                      <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                      <span className="text-primary text-xs sm:text-sm font-semibold flex items-center">
                        Watch <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </span>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6"><div className="border-t border-white/15" /></div>

        {/* SECTION 5b - UGC PORTFOLIO */}
        <section className="py-16 px-6 relative section-dark-grid-open-bottom">

          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Short-Form Ads</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">UGC Ad Portfolio</h2>
                  <p className="text-xl text-muted-foreground font-light">High-converting short-form ads edited for brands and agencies.</p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1sr8BDuWEb0KCRps-whnPKenla5JAJw5d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-card border border-white/15 hover:bg-primary hover:border-primary text-white font-semibold text-base px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-[2px] group"
                >
                  View Full Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                <div
                  className="flex gap-3 md:gap-5 overflow-x-auto pt-3 pb-6"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {UGC_ADS.map((ad, i) => (
                    <a
                      key={i}
                      href={ad.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group shrink-0 ${i % 2 === 1 ? 'mt-4 md:mt-8' : ''}`}
                    >
                      <div className="relative w-[95px] md:w-[190px] rounded-[1rem] md:rounded-[2rem] overflow-hidden border-2 border-white/10 bg-black shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8),_0_14px_28px_-6px_rgba(249,115,22,0.33)] hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-0 left-0 right-0 h-4 md:h-6 z-20 flex justify-center items-end pb-1 pointer-events-none">
                          <div className="w-8 md:w-14 h-[5px] bg-white/20 rounded-full" />
                        </div>
                        <div className="aspect-[9/16] relative overflow-hidden">
                          <img
                            src={ad.thumb}
                            alt={ad.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 group-hover:from-black/40 group-hover:via-transparent group-hover:to-black/10 transition-all duration-500" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 text-black p-2 md:p-3.5 rounded-full shadow-xl">
                              <Play className="w-3 h-3 md:w-5 md:h-5 ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center z-10">
                            <span className="bg-black/50 backdrop-blur-md text-white text-[9px] md:text-[11px] font-semibold px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-white/10">
                              {ad.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* Swipe hint — mobile only */}
              <div className="md:hidden flex justify-end mt-3 pr-1 select-none pointer-events-none">
                <div className="flex items-center gap-1.5 bg-white/8 border border-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-white/50">Swipe</span>
                  <ChevronRight className="w-3.5 h-3.5 text-primary animate-bounce" style={{ animationDelay: '0s' }} />
                  <ChevronRight className="w-3.5 h-3.5 text-primary/50 animate-bounce" style={{ animationDelay: '0.15s' }} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6"><div className="border-t border-white/15" /></div>

        {/* SECTION 6 - PAST PARTNERSHIPS */}
        <section className="py-16 relative bg-black">
          <div className="px-6 max-w-7xl mx-auto relative z-10">
          <FadeIn className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Past and Current Partnerships</h2>
            <p className="text-xl text-muted-foreground font-light">Creators and channels I've had the privilege to work with so far.</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { name: "Aaron van Kampen", image: "https://ucarecdn.com/929b30bc-f188-48a1-8aaa-4ec405bb9f93/-/format/auto/", desc: "Canadian real estate content creator. Worked on mansion tour videos and real estate vlogs." },
              { name: "The Calum Johnson Show", image: "https://yt3.googleusercontent.com/_rIE-WwpkpqrtcHmNNsvEuPzo1OvQi_9LrQYxc6D2ejvsT23J8CKyseBjZ4cOwL93KTVa8zqig=s400-c-k-c0x00ffffff-no-rj", desc: "Grew the podcast from 900 to 250K+ YouTube subscribers through consistent editing and creative innovation." },
              { name: "Reuben Schmitz", image: "https://yt3.googleusercontent.com/9OyETUL-aNJaf18h9mM0Xuw_5buRTeYy0xSsScGDTU-BGbkvk2aOK30zOwn7dCiOKM6NjPuyVw=s400-c-k-c0x00ffffff-no-rj", initials: "RS", desc: "Travel & lifestyle YouTuber. Edited travel vlogs showcasing destinations around the world." },
            ].map((partner, i) => (
              <FadeIn
                key={i}
                delay={i * 0.15}
                className={i === 2 ? 'col-span-2 md:col-span-1 flex justify-center mt-4 md:mt-0' : ''}
              >
                <div className={`relative h-full w-full ${i === 2 ? 'max-w-[calc(50%-6px)] md:max-w-none' : ''}`}>
                  <div className="group bg-card/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-3.5 md:p-8 h-full flex flex-col hover:-translate-y-1 hover:scale-[1.025] active:scale-95 transition-all duration-200 border border-white/10 hover:border-red-500/30 shadow-[0_0_22px_-6px_rgba(239,68,68,0.44)] hover:shadow-[0_0_35px_-4px_rgba(239,68,68,0.69)] cursor-pointer select-none">
                    <div className="flex items-center gap-2 md:gap-3 mb-2.5 md:mb-6">
                      <span className="text-white/10 font-black text-lg md:text-4xl leading-none group-hover:text-red-500/30 transition-colors duration-200">#{i + 1}</span>
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-red-500/20 blur-lg md:blur-2xl rounded-full scale-150 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {partner.image ? (
                          <img src={partner.image} alt={partner.name} className="relative w-9 h-9 md:w-20 md:h-20 rounded-full object-cover border border-white/15 md:border-2 group-hover:border-red-500/40 transition-colors duration-200" />
                        ) : (
                          <div className="relative w-9 h-9 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-red-900/40 to-red-950/40 border border-red-500/20 md:border-2 flex items-center justify-center text-xs md:text-2xl font-bold text-white">
                            {partner.initials}
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xs md:text-2xl font-bold text-white mb-1.5 md:mb-3 leading-snug group-hover:text-red-300/90 transition-colors duration-200">{partner.name}</h3>
                    <p className="text-muted-foreground text-[11px] md:text-base leading-relaxed">{partner.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          </div>
        </section>

        {/* BRANDS MARQUEE — directly after partnerships */}
        <BrandsMarquee />

        {/* SECTION 7 - BACKSTORY */}
        <section className="py-16 relative">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(58, 35, 145, 0.22)', maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }} />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">My Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground/90 font-light leading-relaxed text-left sm:text-center text-balance mx-auto">
                <p>4 years ago I embarked on my freelance journey. No experience, no network, no clarity. Considering I had quit my job, was forced to leave my house, and had just graduated from university, I decided to bet on myself.</p>
                <p>
                  In 2022, I bought a flight ticket to Argentina and started living on a different continent. While traveling, I needed something to finance my lifestyle — something useful, refreshing, and something I was genuinely passionate about. Video editing had always been there in the back of my mind. I had been making YouTube videos since I was 14. So, I decided to make it my career.
                </p>
                <p>
                  I cold-emailed hundreds of creators, built my portfolio from scratch, and slowly — one client at a time — built a global editing business. Today I work with creators and brands worldwide, have generated over 500 million views across platforms, and run Vantage Point Editing — a course to help other editors do the same.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} className="mt-16 relative group">
              {/* Background scene image */}
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl group-hover:-translate-y-[2%] transition-transform duration-300">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none"></div>
                <img
                  src="https://ucarecdn.com/c037aafb-a0c9-4912-9064-094d90edb376/-/format/auto/"
                  alt="Cinematic workspace"
                  className="w-full aspect-video object-cover transition-all duration-700"
                />
              </div>

              {/* Departure portrait — left-center overlay */}
              <div className="absolute top-1/2 -translate-y-1/2 left-6 z-20">
                <div className="group-hover:-translate-y-3 transition-transform duration-300">
                  {/* Photo frame */}
                  <div className="relative overflow-hidden rounded-2xl w-[88px] md:w-[215px] border border-white/20 shadow-[0_12px_50px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 z-10 pointer-events-none" />
                    <img
                      src="/job-departure.jpg"
                      alt="Job departing for Argentina"
                      className="w-full object-cover h-[165px] md:h-[330px]"
                      style={{ objectPosition: 'center 18%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Arrow — mobile (portrait right edge ≈ 24 + 88 = 112px) */}
              <svg
                className="absolute z-30 pointer-events-none group-hover:-translate-y-3 transition-transform duration-300 md:hidden"
                style={{ top: '30%', left: '100px' }}
                width="36" height="28" viewBox="0 0 72 56" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 6 48 C 8 10, 44 4, 66 22" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <path d="M 52 18 L 66 22 L 58 10" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>

              {/* Arrow — desktop (portrait right edge ≈ 24 + 215 = 239px) */}
              <svg
                className="absolute z-30 pointer-events-none group-hover:-translate-y-3 transition-transform duration-300 hidden md:block"
                style={{ top: '34%', left: '188px' }}
                width="72" height="56" viewBox="0 0 72 56" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 6 48 C 8 10, 44 4, 66 22" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <path d="M 52 18 L 66 22 L 58 10" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 8 - TESTIMONIALS */}
        <section id="testimonials" className="py-16 relative section-dark-grid">
          <div className="px-6 max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What People Say</h2>
            <p className="text-xl text-muted-foreground font-light">From the creators and clients I've worked with.</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {[
              {
                quote: "Extremely reliable video editor. He knows what it takes to create viral content and you can always count on him. He was pivotal for the success of my channels.",
                author: "Aaron van Kampen",
                role: "Content Creator",
                photo: "https://ucarecdn.com/929b30bc-f188-48a1-8aaa-4ec405bb9f93/-/format/auto/"
              },
              {
                quote: "Thanks to Job we were able to grow the podcast from 900 to 150K+ subscribers. He communicates well and is constantly innovating new ideas.",
                author: "Calum Johnson",
                role: "Podcast Host",
                photo: "https://yt3.googleusercontent.com/_rIE-WwpkpqrtcHmNNsvEuPzo1OvQi_9LrQYxc6D2ejvsT23J8CKyseBjZ4cOwL93KTVa8zqig=s400-c-k-c0x00ffffff-no-rj"
              },
              {
                quote: "Job was one of the video editors in our UGC-agency team. I would recommend using him as an editor because he does what he says and the performance of his ads was great.",
                author: "Kevin Vriens",
                role: "Agency Owner",
                photo: "/kevin-vriens.png"
              }
            ].map((testimonial, i) => (
              <FadeIn
                key={i}
                delay={i * 0.15}
                className={i === 2 ? 'col-span-2 md:col-span-1 flex justify-center mt-1 md:mt-0' : ''}
              >
                <div className={`relative h-full w-full ${i === 2 ? 'max-w-[calc(50%-6px)] md:max-w-none' : ''}`}>
                  <div className="absolute -inset-12 bg-[radial-gradient(ellipse_at_center,_#080808_0%,_transparent_65%)] pointer-events-none" />
                  <div className="bg-card border border-white/10 rounded-xl md:rounded-[2rem] p-3 md:p-8 h-full flex flex-col relative overflow-hidden group hover:border-green-500/30 hover:-translate-y-1 transition-all duration-200 shadow-[0_0_22px_-6px_rgba(34,197,94,0.44)] hover:shadow-[0_0_35px_-4px_rgba(34,197,94,0.69)]">
                  <div className="absolute top-0 right-0 p-3 md:p-8 opacity-5 text-4xl md:text-8xl font-serif text-white group-hover:text-green-400 transition-colors leading-none">"</div>
                  <p className="text-muted-foreground text-[10px] md:text-lg leading-relaxed mb-3 md:mb-8 flex-grow relative z-10 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto relative z-10 flex items-center justify-between gap-2 md:gap-4">
                    <div>
                      <h4 className="text-white font-bold text-xs md:text-lg">{testimonial.author}</h4>
                      <p className="text-green-400 text-[9px] md:text-sm font-medium">{testimonial.role}</p>
                    </div>
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-green-500/30 blur-xl rounded-full scale-125 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img
                        src={testimonial.photo}
                        alt={testimonial.author}
                        className="relative w-7 h-7 md:w-14 md:h-14 rounded-full object-cover border md:border-2 border-green-500/30 group-hover:border-green-500/50 transition-colors duration-200"
                      />
                    </div>
                  </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6"><div className="border-t border-white/15" /></div>

        {/* SECTION 9 - COURSE CALLOUT */}
        <section className="py-12 px-6 relative">

          <div className="max-w-2xl mx-auto relative z-10">
            <FadeIn>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-card to-[#1a153a] border border-white/15 shadow-[0_0_50px_-20px_hsl(var(--primary))] p-8 md:p-12 flex flex-col items-center text-center gap-8">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none"></div>

                {/* Logo */}
                <div className="relative z-10 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-10 bg-orange-500/8 blur-3xl rounded-full pointer-events-none" style={{ animation: 'vpe-pulse 4s ease-in-out infinite' }} />
                    <div className="absolute -inset-5 bg-orange-500/12 blur-2xl rounded-full pointer-events-none" style={{ animation: 'vpe-pulse 3s ease-in-out infinite', animationDelay: '0.8s' }} />
                    <div className="absolute -inset-1 bg-orange-500/18 blur-md rounded-full pointer-events-none" style={{ animation: 'vpe-pulse 2s ease-in-out infinite', animationDelay: '1.6s' }} />
                    <div className="relative w-24 h-24 rounded-full border-2 border-orange-500/25 shadow-[0_0_16px_rgba(249,115,22,0.22),_inset_0_0_8px_rgba(249,115,22,0.06)] overflow-hidden">
                      <img src="/vpe-logo.jpg" alt="Vantage Point Editing" className="w-full h-full object-cover scale-[1.05]" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Want to learn the craft?</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Master Video Editing & Land Clients From Anywhere</h2>
                  <p className="text-muted-foreground text-base mb-6 font-light">
                    I built Vantage Point Editing — a course teaching aspiring editors how to reach a professional level in video editing AND how to land real clients, so you can work from anywhere in the world.
                  </p>
                  <a href="https://vantagepointediting.com" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="group shadow-[0_0_20px_-5px_hsl(var(--primary))] hover:-translate-y-[2%] transition-transform duration-300">
                      Explore the Course
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 10 - FAQ */}
        <section id="faq" className="py-16 relative section-dark-grid">
          <div className="px-6 max-w-4xl mx-auto relative z-10">
          <FadeIn className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground font-light">Everything you need to know before reaching out.</p>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "What types of content do you edit?",
                a: "I work across a wide range: YouTube vlogs, podcast videos, documentary-style long-form content, short-form reels/TikToks, UGC ads, real estate content, travel videos, and more."
              },
              {
                q: "What tools do you use?",
                a: "Adobe Premiere Pro and Adobe After Effects are my primary tools. I also have experience in motion design and basic graphic design."
              },
              {
                q: "How long does it take to get my video ready?",
                a: "Short-form content is typically 24–48 hours. Long-form YouTube videos are usually 3–5 business days."
              },
              {
                q: "Do you work with brands and agencies?",
                a: "Yes — I've worked with UGC agencies, brands, and independent creators. I'm comfortable working within brand guidelines and adapting to different content styles."
              },
              {
                q: "How do we get started?",
                a: "Send me an email or reach out via LinkedIn or Instagram. We'll have a short intro call to discuss your needs, and go from there."
              },
              {
                q: "Where are you based?",
                a: "I'm Dutch, but I work fully remotely — I've been traveling the world for the past few years and work with clients globally."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
          </div>
        </section>

        {/* SECTION 11 - CONTACT */}
        <section id="contact" className="py-16 px-6 relative">

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance tracking-tight">
                Let's Create Something <span className="italic text-primary font-serif">Worth Watching</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-12">
                Reach out and let's talk about your next project.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button size="lg" className="w-full sm:w-auto hover:-translate-y-[2%] transition-transform duration-300" onClick={() => window.open('mailto:jobmeijerink@gmail.com')}>
                  Send an Email
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto hover:-translate-y-[2%] transition-transform duration-300" onClick={() => window.open('https://calendar.app.google/nMGuY3dQJ3CHQCaT7', '_blank')}>
                  Book a Call
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-card/40 backdrop-blur-md border border-border/50 rounded-[1.5rem] p-4">
                <a href="mailto:jobmeijerink@gmail.com" className="flex flex-col items-center gap-1.5 group p-2 rounded-xl hover:bg-white/5 hover:-translate-y-1 transition-all duration-300">
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-white font-medium group-hover:text-primary transition-colors text-xs text-center leading-tight">jobmeijerink@gmail.com</span>
                </a>
                <a href="tel:+31636352146" className="flex flex-col items-center gap-1.5 group p-2 rounded-xl hover:bg-white/5 hover:-translate-y-1 transition-all duration-300">
                  <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-white font-medium group-hover:text-primary transition-colors text-xs">+31 6 36352146</span>
                </a>
                <a href="https://www.linkedin.com/in/job-meijerink-b07249182" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group p-2 rounded-xl hover:bg-white/5 hover:-translate-y-1 transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-white font-medium group-hover:text-primary transition-colors text-xs">Job Meijerink</span>
                </a>
                <a href="https://www.upwork.com/freelancers/~018fa53a0a0ba73bfe?mp_source=share" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group p-2 rounded-xl hover:bg-white/5 hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                  </svg>
                  <span className="text-white font-medium group-hover:text-primary transition-colors text-xs">Upwork Profile</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/15 bg-background/80 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
            <p className="text-sm">© {new Date().getFullYear()} Job Meijerink. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/jobmeijerink/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/job-meijerink-b07249182" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

// Brands marquee with logo images and center-saturation effect
const BRANDS = [
  { name: "Cloudpillo",        logo: "/logos/cloudpillo.avif",  invert: false, small: false, hasBg: false },
  { name: "Adwave Agency",     logo: "/logos/adwave.webp",      invert: false, small: true,  hasBg: false },
  { name: "Mango Media",       logo: "/logos/mangomedia.avif",  invert: false, small: false, hasBg: false },
  { name: "Wesmyle",           logo: "/logos/wesmyle.svg",      invert: false, small: false, hasBg: false },
  { name: "Crosslab Agency",   logo: "/logos/crosslab.svg",     invert: false, small: false, hasBg: false },
  { name: "GoViral NL",        logo: "/logos/goviralnl.svg",    invert: false, small: false, hasBg: false },
  { name: "Detailrs",          logo: "/logos/detailrs.png",     invert: true,  small: false, hasBg: false },
  { name: "Ridge",             logo: "/logos/ridge.svg",        invert: true,  small: true,  hasBg: false },
  { name: "Cook & Pan",        logo: "/logos/cookandpan.svg",   invert: false, small: true,  hasBg: false },
  { name: "YouTube",           logo: "/logos/youtube.svg",      invert: false, small: false, hasBg: false },
  { name: "Voetbalzone",       logo: "/logos/voetbalzone.svg",  invert: false, small: false, hasBg: false },
];

function BrandsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const update = () => {
      const center = window.innerWidth / 2;
      const fadeRadius = window.innerWidth * 0.38;
      const items = trackRef.current?.querySelectorAll<HTMLElement>(".brand-logo-item");
      items?.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.left + rect.width / 2;
        const dist = Math.abs(elCenter - center);
        const gs = Math.min(1, dist / fadeRadius);
        el.style.filter = `grayscale(${gs})`;
        el.style.opacity = `${0.4 + 0.6 * (1 - gs)}`;
      });
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="pt-2 pb-20 relative section-dark-grid-open-top">
      {/* Background matches the partnerships section above */}

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
        <h3 className="text-lg font-bold tracking-widest text-white/90 uppercase">Brands I Have Worked With</h3>
      </div>

      <div className="relative z-10 overflow-hidden">
        <div ref={trackRef} className="flex animate-marquee items-center gap-8 md:gap-16 px-8" style={{ width: "max-content" }}>
          {doubled.map((brand, i) => (
            <div key={brand.name + i} className="brand-logo-item flex items-center justify-center shrink-0 transition-none w-[112px] md:w-[140px]">
              <BrandLogo name={brand.name} logo={brand.logo} invert={brand.invert} small={brand.small} hasBg={brand.hasBg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ name, logo, invert, small, hasBg }: { name: string; logo: string; invert: boolean; small?: boolean; hasBg?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="text-white/70 font-bold text-lg tracking-wide whitespace-nowrap px-2">{name}</span>
    );
  }
  const img = (
    <img
      src={logo}
      alt={name}
      onError={() => setFailed(true)}
      className={`${small ? "h-4 md:h-5" : "h-[26px] md:h-8"} w-auto max-w-[112px] md:max-w-[130px] object-contain`}
      style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
  if (hasBg) {
    return (
      <div className="bg-white rounded-md px-3 py-1.5 flex items-center">
        {img}
      </div>
    );
  }
  return img;
}

// Separate component for FAQ to manage internal open/close state beautifully
function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <div 
        className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${isOpen ? 'bg-card border-primary/30 shadow-[0_0_28px_-8px_rgba(79,70,229,0.22)]' : 'bg-card border-border/50 hover:border-primary/25 hover:shadow-[0_0_28px_-8px_rgba(79,70,229,0.18)]'}`}
      >
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
        >
          <span className="text-lg font-medium text-white pr-8">{question}</span>
          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : ''}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
        <div 
          className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-muted-foreground font-light leading-relaxed">{answer}</p>
        </div>
      </div>
    </FadeIn>
  );
}
