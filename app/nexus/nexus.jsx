"use client";

import { useState, useEffect, useRef } from "react";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const REGISTER_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSc3u-eqg6RPAaAKsP7yG9v5UwQmQrhVpmsMwNkQzQ8zIbShwA/viewform";
const COMMUNITY_LINK = "https://chat.whatsapp.com/DLaRXucBAb11QfJDoHx95Z?mode=gi_t";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stages = [
  { id: 1, date: "06 Feb – 06 Mar 2026", tag: "LIVE", title: "Official Hackathon Nexus Registration", desc: "Complete your registration and form a team of 4–6 members. Join the official WhatsApp community for updates, announcements, resources, and mentorship support.", icon: "📝" },
  { id: 2, date: "06 Mar – 20 Mar 2026", tag: "ROUND 1", title: "Idea Submission (PPT)", desc: "Submit a PowerPoint presentation covering Team Intro, Problem Statement, Analysis & Methodology, Technology & AI Integration, and Implementation Plan.", icon: "💡" },
  { id: 3, date: "22 Mar – 31 Mar 2026", tag: "ROUND 2", title: "Prototype Submission", desc: "Upload a functional prototype, demo video (3–5 min), technical architecture, code repository link, and AI model details via Google Drive.", icon: "🛠️" },
  { id: 4, date: "04 Apr – 08 Apr 2026", tag: "ROUND 3", title: "Pre-Finale — Live Demo", desc: "Shortlisted candidates present a live demo via Zoom/Google Meet. Top 15 teams advance to the Grand Finale. Link shared in official group.", icon: "🎤" },
  { id: 5, date: "11 Apr 2026", tag: "GRAND FINALE", title: "Grand Finale — Winner Declaration", desc: "Official orientation, final evaluation, and winner declaration. Best student-centric AI solutions showcased and celebrated.", icon: "🏆" },
];

const highlights = [
  { label: "Team Size", value: "4–6 Members", icon: "👥" },
  { label: "Duration", value: "7+ Weeks", icon: "📅" },
  { label: "Mode", value: "Online", icon: "🌐" },
  { label: "Focus", value: "AI & Innovation", icon: "🤖" },
];

const problemStatements = [

{

id: 1,

title: "AI Lecture Companion",

tagline: "Never miss a detail in class again",

problem: "Problem Statement - College students frequently miss critical details, struggle to comprehend complex concepts in real time during live lectures, produce incomplete/illegible/disorganized handwritten notes, and find revisiting full lecture recordings excessively time-consuming, resulting in poor retention and inefficient revision. In fast-paced lectures, students face challenges in simultaneously listening, understanding, and capturing key information. Handwritten notes often omit important explanations or become hard to read later. Many lecturers speak quickly, use dense terminology, or lack clear structure, exacerbating the issue. After class, rewatching hours of recordings to extract value is impractical amid packed schedules, leading to forgotten concepts, superficial understanding, increased study stress, and lower academic performance. Existing manual note-taking and passive recording methods fall short of providing intelligent, instant, and personalized post-lecture support.",

aiAreas: [

"Speech-to-Text & real-time transcription",

"Audio/Video understanding & speaker diarization",

"Question Answering & conversational AI",

"Personalization via learning style adaptation",

],

color: "#14B8A6",

emoji: "🎓",

},

{

id: 2,

title: "AI Personalized Study Path Generator",

tagline: "Study smarter, not harder",

problem: "Problem Statement - College students often rely on generic, one-size-fits-all timetables and study plans that fail to align with their individual learning pace, strengths/weaknesses, retention patterns, study habits, and upcoming exam/deadline schedules, resulting in inefficient time use, knowledge gaps, last-minute cramming, burnout, and suboptimal academic outcomes across multiple subjects.Fixed college timetables and self-made plans rarely account for personal factors like faster mastery in some subjects, slower progress in others, forgetting curves, preferred learning modalities (visual, auditory, etc.), daily energy levels, or overlapping deadlines. This mismatch causes overemphasis on already-strong areas, neglect of weak topics, wasted effort on low-yield activities, mounting stress as exams approach, and inconsistent performance. Without adaptive guidance, students struggle to balance coursework, leading to inefficiency and preventable underachievement.",

aiAreas: [

"ML for predictive modeling & retention forecasting",

"Reinforcement Learning for optimal scheduling",

"LLM for parsing syllabi & user inputs",

"Knowledge tracing & student modeling",

"Personalization engines with feedback loops",

],

color: "#06B6D4",

emoji: "📚",

},

{

id: 3,

title: "AI Group Project Collaborator",

tagline: "Make teamwork actually work",

problem: "Problem Statement In college group projects, students encounter unequal contributions, poor communication, conflicting ideas, version control issues across shared documents, inefficient meetings, chaotic group chats, last-minute integration problems, overlooked errors, and lack of overall cohesion, leading to frustration, unfair grading, and subpar project quality.Description Team assignments suffer from classic coordination failures: dominant members doing most work, free-riding, misaligned expectations, scattered files/versions (e.g., multiple Google Docs), endless back-and-forth messages, unproductive meetings without clear agendas, and rushed final merges that introduce inconsistencies or mistakes. Without structured support, groups waste time on logistics instead of content, experience interpersonal tension, and produce outputs that don't reflect collective potential—often reflected in uneven peer evaluations and individual dissatisfaction.",

aiAreas: [

"LLM for communication analysis & action items",

"Document AI & intelligent version control",

"Task allocation & role recommendation",

"Meeting intelligence & summarization",

"Sentiment analysis & group dynamics monitoring",

"Automated quality assurance & plagiarism flagging",

],

color: "#38BDF8",

emoji: "🤝",

},

];
const perks = [
  { icon: "🏅", title: "Custom Certificates", desc: "Participation & winner recognition certificates for all." },
{ 
  icon: "🔥", 
  title: "₹15K Mega Cash Prize Pool Awaits You!", 
  desc: "Show your skills, win big, and get recognized by top industry leaders." 
},
  { icon: "🧑‍🏫", title: "Expert Mentorship", desc: "Mandatory webinars & guidance from industry mentors." },
  { icon: "💼", title: "Internships & Jobs", desc: "Top performers get exclusive career opportunities." },
  { icon: "🌱", title: "Skill Growth", desc: "Hands-on AI/ML, teamwork & presentation experience." },
  { icon: "🔗", title: "Networking", desc: "Connect with innovators, mentors & industry professionals." },
];

const communityBenefits = [
  "🔔 Complete event schedule & announcements",
  "💼 Job & internship opportunities",
  "📹 Mandatory webinar links & timings",
  "🧑‍🏫 Mentor office hours",
  "👥 Team formation opportunities",
  "📦 Technical resources & toolkits",
  "📄 Submission guidelines & formats",
  "🏆 Finale details",
];

const whyParticipate = [
  { icon: "🎯", text: "Solve Real Student Problems — impact your own community" },
  { icon: "🧠", text: "Hands-on AI Experience — build real solutions with AI/ML" },
  { icon: "📂", text: "Portfolio Projects — impressive additions to your resume" },
  { icon: "🚀", text: "Career Opportunities — get noticed by partner companies" },
];

// ─── SCOPED STYLES ───────────────────────────────────────────────────────────
// All rules scoped under .nexus-root so they never leak to navbar or other components

const scopedStyles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

.nexus-root {
  --n-teal:#0D9488;--n-teal-d:#0F766E;--n-teal-l:#14B8A6;
  --n-blue:#0C4A6E;--n-blue-m:#0369A1;--n-blue-l:#38BDF8;
  --n-cyan:#06B6D4;--n-white:#FFF;--n-slate:#334155;--n-slate-l:#94A3B8;--n-dark:#0F172A;
  font-family:'Outfit',sans-serif;
  color:var(--n-white);
  line-height:1.5;
}

/* Reset only inside nexus-root */
.nexus-root *, .nexus-root *::before, .nexus-root *::after {
  margin:0;padding:0;box-sizing:border-box;
}
.nexus-root a { color: inherit; }
.nexus-root button { font-family: inherit; }
.nexus-root img { display: block; max-width: 100%; }

/* MOBILE STICKY */
.nexus-msb{display:none;position:fixed;top:0;left:0;right:0;z-index:1000;padding:10px 16px;background:linear-gradient(135deg,var(--n-blue),var(--n-teal-d));backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.1);animation:nexus-slideD .4s ease;font-family:'Outfit',sans-serif}
.nexus-msb a{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:13px;border-radius:12px;background:linear-gradient(135deg,var(--n-teal),var(--n-cyan));color:#fff;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 4px 20px rgba(13,148,136,.4)}
.nexus-msb a:active{transform:scale(.97)}
@media(max-width:768px){.nexus-msb{display:block}.nexus-root .n-wrap{padding-top:64px}}

/* WRAPPER */
.nexus-root .n-wrap{width:100%;min-height:100vh;background:radial-gradient(ellipse 80% 60% at 20% 10%,rgba(13,148,136,.12),transparent 60%),radial-gradient(ellipse 60% 50% at 80% 80%,rgba(3,105,161,.1),transparent 60%),var(--n-dark)}

/* HERO */
.nexus-root .n-hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden}
.nexus-root .n-hero-bg{position:absolute;inset:0;z-index:0}
.nexus-root .n-hero-bg img{width:100%;height:100%;object-fit:cover;opacity:.18;filter:saturate(.5)}
.nexus-root .n-hero-ov{position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,23,42,.5),rgba(15,23,42,.7) 40%,rgba(15,23,42,.95));z-index:1}
.nexus-root .n-hero-gl{position:absolute;inset:0;z-index:1;opacity:.04;background-image:linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px);background-size:60px 60px}
.nexus-root .n-glow{position:absolute;width:500px;height:500px;border-radius:50%;filter:blur(120px);z-index:1;animation:nexus-pulse 6s ease-in-out infinite}
.nexus-root .n-glow-1{top:-100px;right:-100px;background:rgba(13,148,136,.25)}
.nexus-root .n-glow-2{bottom:-150px;left:-100px;background:rgba(3,105,161,.2);animation-delay:3s}
@keyframes nexus-pulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.15);opacity:1}}

.nexus-root .n-hc{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:120px 24px 80px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:28px}

.nexus-root .n-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 20px;border-radius:100px;background:rgba(13,148,136,.12);border:1px solid rgba(13,148,136,.3);font-family:'Space Mono',monospace;font-size:13px;color:var(--n-teal-l);letter-spacing:2px;text-transform:uppercase;animation:nexus-fiu .8s ease}
.nexus-root .n-bdot{width:8px;height:8px;border-radius:50%;background:var(--n-teal-l);animation:nexus-blink 1.5s ease-in-out infinite}
.nexus-root .n-badge.n-live{position:relative;overflow:visible}
.nexus-root .n-badge.n-live::after{content:'';position:absolute;inset:0;border-radius:999px;box-shadow:0 0 18px rgba(20,184,166,0.18),0 0 40px rgba(20,184,166,0.12);filter:blur(6px);opacity:0.9;transform:scale(1);transition:all .3s}
.nexus-root .n-badge.n-live .n-bdot{box-shadow:0 0 8px rgba(20,184,166,0.9),0 0 16px rgba(20,184,166,0.6);}
.nexus-root .n-badge.n-live::before{content:'';position:absolute;left:50%;top:50%;width:10px;height:10px;border-radius:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(20,184,166,0.7),rgba(20,184,166,0.15) 40%,transparent 60%);filter:blur(6px);opacity:0.8;animation:nexus-live-pulse 1.8s ease-in-out infinite}
@keyframes nexus-live-pulse{0%{transform:translate(-50%,-50%) scale(.9);opacity:.9}50%{transform:translate(-50%,-50%) scale(1.25);opacity:1}100%{transform:translate(-50%,-50%) scale(.9);opacity:.9}}
@keyframes nexus-blink{0%,100%{opacity:1}50%{opacity:.3}}

.nexus-root .n-htitle{font-size:clamp(3rem,8vw,6.5rem);font-weight:900;line-height:1;letter-spacing:-3px;animation:nexus-fiu .8s ease .15s both}
.nexus-root .n-tg{background:linear-gradient(135deg,#fff,var(--n-teal-l) 50%,var(--n-cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nexus-root .n-to{-webkit-text-stroke:1.5px rgba(255,255,255,.25);-webkit-text-fill-color:transparent}

.nexus-root .n-hsub{font-size:clamp(1rem,2.5vw,1.35rem);font-weight:300;color:var(--n-slate-l);max-width:640px;line-height:1.7;animation:nexus-fiu .8s ease .3s both}
.nexus-root .n-horg{display:flex;align-items:center;gap:10px;font-size:14px;color:rgba(255,255,255,.5);animation:nexus-fiu .8s ease .35s both}
.nexus-root .n-horg span{color:var(--n-teal-l);font-weight:600}

/* COUNTDOWN */
.nexus-root .n-cdrow{display:flex;gap:16px;animation:nexus-fiu .8s ease .45s both}
.nexus-root .n-cdb{display:flex;flex-direction:column;align-items:center;padding:16px 20px;min-width:80px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(10px)}
.nexus-root .n-cdn{font-family:'Space Mono',monospace;font-size:2rem;font-weight:700;color:var(--n-teal-l)}
.nexus-root .n-cdl{font-size:11px;color:var(--n-slate-l);text-transform:uppercase;letter-spacing:1.5px;margin-top:4px}

/* BUTTONS */
.nexus-root .n-hctas{display:flex;gap:16px;flex-wrap:wrap;justify-content:center;animation:nexus-fiu .8s ease .55s both}
.nexus-root .n-bp{display:inline-flex;align-items:center;gap:10px;padding:16px 40px;border-radius:14px;background:linear-gradient(135deg,var(--n-teal),var(--n-cyan));color:#fff;text-decoration:none;font-weight:700;font-size:16px;letter-spacing:.5px;border:none;cursor:pointer;box-shadow:0 8px 30px rgba(13,148,136,.35);transition:all .3s;position:relative;overflow:hidden}
.nexus-root .n-bp::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.15),transparent);opacity:0;transition:opacity .3s}
.nexus-root .n-bp:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(13,148,136,.45),0 0 0 4px rgba(13,148,136,.15)}
.nexus-root .n-bp:hover::before{opacity:1}
.nexus-root .n-bs{display:inline-flex;align-items:center;gap:10px;padding:16px 32px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:#fff;text-decoration:none;font-weight:500;font-size:16px;cursor:pointer;transition:all .3s}
.nexus-root .n-bs:hover{background:rgba(255,255,255,.1);border-color:var(--n-teal-l);color:var(--n-teal-l);transform:translateY(-2px)}
.nexus-root .n-bc{display:inline-flex;align-items:center;gap:10px;padding:16px 36px;border-radius:14px;background:linear-gradient(135deg,#25D366,#128C7E);color:#fff;text-decoration:none;font-weight:700;font-size:16px;border:none;cursor:pointer;box-shadow:0 8px 30px rgba(37,211,102,.3);transition:all .3s}
.nexus-root .n-bc:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(37,211,102,.45),0 0 0 4px rgba(37,211,102,.15)}

/* HIGHLIGHTS */
.nexus-root .n-hls{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;max-width:1000px;margin:-40px auto 0;position:relative;z-index:3;border-radius:20px;overflow:hidden;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);animation:nexus-fiu .8s ease .65s both}
.nexus-root .n-hli{display:flex;flex-direction:column;align-items:center;gap:8px;padding:28px 16px;background:rgba(15,23,42,.6);backdrop-filter:blur(20px);transition:background .3s}
.nexus-root .n-hli:hover{background:rgba(13,148,136,.08)}
.nexus-root .n-hli-i{font-size:28px}
.nexus-root .n-hli-v{font-weight:700;font-size:18px}
.nexus-root .n-hli-l{font-size:13px;color:var(--n-slate-l);text-transform:uppercase;letter-spacing:1px}

/* SECTION */
.nexus-root .n-sec{max-width:1100px;margin:0 auto;padding:100px 24px}
.nexus-root .n-sl{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:var(--n-teal-l);margin-bottom:12px}
.nexus-root .n-st{font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-1.5px;line-height:1.15;margin-bottom:20px}
.nexus-root .n-sd{font-size:1.1rem;color:var(--n-slate-l);line-height:1.7;max-width:700px;font-weight:300}

/* ABOUT */
.nexus-root .n-ag{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-top:50px}
.nexus-root .n-aiw{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:2/3}
.nexus-root .n-aiw img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
.nexus-root .n-aiw:hover img{transform:scale(1.05)}
.nexus-root .n-ait{position:absolute;bottom:20px;left:20px;padding:8px 16px;border-radius:10px;background:rgba(15,23,42,.8);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:12px;color:var(--n-teal-l);letter-spacing:1px}
.nexus-root .n-afs{display:flex;flex-direction:column;gap:16px;margin-top:24px}
.nexus-root .n-af{display:flex;gap:14px;padding:18px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);transition:all .3s}
.nexus-root .n-af:hover{background:rgba(13,148,136,.06);border-color:rgba(13,148,136,.2);transform:translateX(4px)}
.nexus-root .n-af-i{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--n-teal),var(--n-blue-m));display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.nexus-root .n-af-t p{font-size:15px;color:rgba(255,255,255,.8);line-height:1.5}

/* CAROUSEL */
.nexus-root .n-carousel-wrap{margin-top:50px;position:relative}
.nexus-root .n-carousel-card{border-radius:24px;padding:48px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);transition:all .5s ease;position:relative;overflow:hidden}
.nexus-root .n-cc-topbar{position:absolute;top:0;left:0;right:0;height:4px;border-radius:4px 4px 0 0}
.nexus-root .n-carousel-nav{display:flex;gap:12px;position:absolute;top:48px;right:48px}
.nexus-root .n-cnav-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
.nexus-root .n-cnav-btn:hover{background:rgba(13,148,136,.15);border-color:var(--n-teal-l)}
.nexus-root .n-cc-num{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;opacity:.5}
.nexus-root .n-cc-emoji{font-size:48px;margin-bottom:16px;display:block}
.nexus-root .n-cc-title{font-size:1.6rem;font-weight:800;letter-spacing:-.5px;margin-bottom:6px}
.nexus-root .n-cc-tagline{font-size:15px;font-style:italic;opacity:.6}
.nexus-root .n-cc-problem{margin:28px 0}
.nexus-root .n-cc-problem h4,.nexus-root .n-cc-ai h4{font-size:13px;font-family:'Space Mono',monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.nexus-root .n-cc-problem h4{color:var(--n-teal-l)}
.nexus-root .n-cc-ai h4{color:var(--n-cyan)}
.nexus-root .n-cc-problem p{font-size:15px;color:rgba(255,255,255,.65);line-height:1.75}
.nexus-root .n-cc-ai-list{display:flex;flex-wrap:wrap;gap:10px}
.nexus-root .n-cc-ai-tag{padding:8px 16px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);font-size:13px;color:rgba(255,255,255,.7);transition:all .2s}
.nexus-root .n-cc-ai-tag:hover{background:rgba(13,148,136,.08);border-color:rgba(13,148,136,.2)}
.nexus-root .n-carousel-dots{display:flex;justify-content:center;gap:12px;margin-top:28px}
.nexus-root .n-cdot{width:12px;height:12px;border-radius:50%;border:2px solid rgba(255,255,255,.15);background:transparent;cursor:pointer;transition:all .3s}
.nexus-root .n-cdot.active{border-color:var(--n-teal-l);background:var(--n-teal-l);box-shadow:0 0 12px rgba(20,184,166,.4)}

/* TIMELINE */
.nexus-root .n-tlc{margin-top:60px;position:relative}
.nexus-root .n-tll{position:absolute;left:28px;top:0;bottom:0;width:3px;background:rgba(255,255,255,.06);border-radius:10px}
.nexus-root .n-tllf{position:absolute;left:28px;top:0;width:3px;background:linear-gradient(180deg,var(--n-teal),var(--n-cyan));border-radius:10px;transition:height .6s}
.nexus-root .n-sc{display:flex;gap:28px;padding:32px 0;position:relative;opacity:.35;transition:opacity .5s}
.nexus-root .n-sc.act{opacity:1}
.nexus-root .n-sd2{width:56px;height:56px;border-radius:16px;background:rgba(15,23,42,.8);border:2px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;z-index:2;transition:all .4s}
.nexus-root .n-sc.act .n-sd2{border-color:var(--n-teal);background:rgba(13,148,136,.15);box-shadow:0 0 30px rgba(13,148,136,.2)}
.nexus-root .n-sb{flex:1;padding:8px 28px 28px;border-radius:20px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);transition:all .4s}
.nexus-root .n-sc.act .n-sb{background:rgba(13,148,136,.04);border-color:rgba(13,148,136,.15)}
.nexus-root .n-stag{display:inline-block;padding:4px 12px;border-radius:6px;font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:1.5px;margin-bottom:10px;margin-top:18px}
.nexus-root .n-stag.live{background:rgba(13,148,136,.15);color:var(--n-teal-l);border:1px solid rgba(13,148,136,.3)}
.nexus-root .n-stag.round{background:rgba(56,189,248,.1);color:var(--n-blue-l);border:1px solid rgba(56,189,248,.2)}
.nexus-root .n-stag.finale{background:rgba(250,204,21,.1);color:#FBBF24;border:1px solid rgba(250,204,21,.2)}
.nexus-root .n-stt{font-size:1.4rem;font-weight:700;margin-bottom:8px;letter-spacing:-.5px}
.nexus-root .n-sdt{font-family:'Space Mono',monospace;font-size:13px;color:var(--n-slate-l);margin-bottom:12px}
.nexus-root .n-sds{font-size:15px;color:rgba(255,255,255,.6);line-height:1.7}

/* PREP TABS */
.nexus-root .n-prep-tabs{display:flex;gap:8px;margin-top:40px;margin-bottom:32px;flex-wrap:wrap}
.nexus-root .n-ptab{padding:10px 22px;border-radius:10px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);color:var(--n-slate-l);font-size:14px;font-weight:600;cursor:pointer;transition:all .3s;white-space:nowrap}
.nexus-root .n-ptab.active{background:rgba(13,148,136,.15);color:var(--n-teal-l);border-color:rgba(13,148,136,.3)}
.nexus-root .n-ptab:hover{background:rgba(255,255,255,.06)}
.nexus-root .n-prep-content{border-radius:24px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);padding:40px;transition:all .3s}
.nexus-root .n-prep-content h3{font-size:1.3rem;font-weight:700;margin-bottom:8px;display:flex;align-items:center;gap:12px}
.nexus-root .n-prep-content h3 span{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--n-teal),var(--n-blue-m));display:inline-flex;align-items:center;justify-content:center;font-size:18px}
.nexus-root .n-prep-desc{font-size:14px;color:var(--n-slate-l);margin-bottom:24px;line-height:1.6}
.nexus-root .n-slist{display:flex;flex-direction:column;gap:12px}
.nexus-root .n-sli{display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.04);transition:all .2s}
.nexus-root .n-sli:hover{background:rgba(13,148,136,.05);border-color:rgba(13,148,136,.15)}
.nexus-root .n-sln{width:32px;height:32px;border-radius:8px;background:rgba(13,148,136,.15);color:var(--n-teal-l);font-family:'Space Mono',monospace;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.nexus-root .n-sinfo h5{font-size:14px;font-weight:600}
.nexus-root .n-sinfo p{font-size:13px;color:var(--n-slate-l);margin-top:2px}
.nexus-root .n-cklist{display:flex;flex-direction:column;gap:14px}
.nexus-root .n-cki{display:flex;align-items:center;gap:14px;font-size:15px;color:rgba(255,255,255,.75);line-height:1.5}
.nexus-root .n-ckic{width:28px;height:28px;border-radius:8px;background:rgba(13,148,136,.12);color:var(--n-teal-l);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.nexus-root .n-warn-box{margin-top:24px;padding:14px 18px;border-radius:12px;background:rgba(250,204,21,.06);border:1px solid rgba(250,204,21,.15);font-size:13px;color:rgba(255,255,255,.6);line-height:1.6}
.nexus-root .n-prep-tip{display:flex;gap:14px;padding:18px;border-radius:14px;background:rgba(56,189,248,.05);border:1px solid rgba(56,189,248,.12);margin-top:20px}
.nexus-root .n-prep-tip-i{font-size:24px;flex-shrink:0}
.nexus-root .n-prep-tip p{font-size:14px;color:rgba(255,255,255,.6);line-height:1.6}
.nexus-root .n-prep-tip strong{color:var(--n-blue-l)}

/* PERKS */
.nexus-root .n-pg{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:50px}
.nexus-root .n-pc{padding:36px 28px;border-radius:22px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.06);transition:all .4s;position:relative;overflow:hidden}
.nexus-root .n-pc::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--n-teal),var(--n-cyan),var(--n-blue-l));opacity:0;transition:opacity .3s}
.nexus-root .n-pc:hover{border-color:rgba(13,148,136,.2);transform:translateY(-6px);background:rgba(13,148,136,.04)}
.nexus-root .n-pc:hover::before{opacity:1}
.nexus-root .n-pi{width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg,rgba(13,148,136,.15),rgba(3,105,161,.1));border:1px solid rgba(13,148,136,.15);display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:20px}
.nexus-root .n-pc h4{font-size:1.15rem;font-weight:700;margin-bottom:10px}
.nexus-root .n-pc p{font-size:14px;color:var(--n-slate-l);line-height:1.65}

/* COMMUNITY */
.nexus-root .n-comm{position:relative;margin:40px 24px;max-width:1100px;margin-left:auto;margin-right:auto;border-radius:28px;overflow:hidden}
.nexus-root .n-comm-in{display:grid;grid-template-columns:1fr 1fr}
.nexus-root .n-comm-l{padding:60px 50px;background:linear-gradient(135deg,rgba(12,74,110,.3),rgba(13,148,136,.15));border:1px solid rgba(255,255,255,.06);border-radius:28px 0 0 28px}
.nexus-root .n-comm-r{position:relative;overflow:hidden;border-radius:0 28px 28px 0}
.nexus-root .n-comm-r img{width:100%;height:100%;object-fit:cover;opacity:.6}
.nexus-root .n-comm-ro{position:absolute;inset:0;background:linear-gradient(90deg,rgba(15,23,42,.8),rgba(15,23,42,.2))}
.nexus-root .n-comm-l h2{font-size:clamp(1.6rem,3.5vw,2.2rem);font-weight:800;letter-spacing:-1px;margin-bottom:8px;line-height:1.2}
.nexus-root .n-comm-l .n-csub{font-size:1rem;color:var(--n-slate-l);margin-bottom:32px;line-height:1.6}
.nexus-root .n-cbs{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:36px}
.nexus-root .n-cbi{display:flex;align-items:center;gap:10px;font-size:14px;color:rgba(255,255,255,.75);padding:10px 14px;border-radius:10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.04);transition:all .2s}
.nexus-root .n-cbi:hover{background:rgba(13,148,136,.06);border-color:rgba(13,148,136,.15);transform:translateX(3px)}

/* CTA */
.nexus-root .n-ctab{position:relative;margin:60px 24px 80px;max-width:1100px;margin-left:auto;margin-right:auto;border-radius:28px;overflow:hidden;padding:70px 50px;text-align:center;background:linear-gradient(135deg,rgba(13,148,136,.2),rgba(12,74,110,.2) 50%,rgba(13,148,136,.15));border:1px solid rgba(13,148,136,.2)}
.nexus-root .n-ctab::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 30% 50%,rgba(13,148,136,.15),transparent 60%),radial-gradient(circle at 70% 50%,rgba(56,189,248,.1),transparent 60%)}
.nexus-root .n-ctab>*{position:relative;z-index:1}
.nexus-root .n-ctab h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;letter-spacing:-1px;margin-bottom:16px}
.nexus-root .n-ctab p{font-size:1.1rem;color:var(--n-slate-l);max-width:550px;margin:0 auto 32px;line-height:1.7}
.nexus-root .n-ctabtns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}

/* FOOTER */
.nexus-root .n-ft{text-align:center;padding:40px 24px;border-top:1px solid rgba(255,255,255,.05)}
.nexus-root .n-ft-o{font-size:15px;color:var(--n-slate-l);margin-bottom:6px}
.nexus-root .n-ft-o a{color:var(--n-teal-l);text-decoration:none;font-weight:600}
.nexus-root .n-ft-c{font-size:13px;color:rgba(255,255,255,.25)}

@keyframes nexus-fiu{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes nexus-slideD{from{transform:translateY(-100%)}to{transform:translateY(0)}}

/* RESPONSIVE */
@media(max-width:768px){
  .nexus-root .n-hc{padding:100px 20px 60px;gap:22px}
  .nexus-root .n-htitle{letter-spacing:-1.5px}
  .nexus-root .n-cdrow{gap:10px}
  .nexus-root .n-cdb{min-width:64px;padding:12px 14px}
  .nexus-root .n-cdn{font-size:1.5rem}
  .nexus-root .n-hls{grid-template-columns:repeat(2,1fr);margin:-20px 20px 0;border-radius:16px}
  .nexus-root .n-hli{padding:20px 12px}
  .nexus-root .n-sec{padding:60px 20px}
  .nexus-root .n-ag{grid-template-columns:1fr;gap:32px}
  .nexus-root .n-sc{gap:16px}
  .nexus-root .n-sd2{width:44px;height:44px;font-size:18px;border-radius:12px}
  .nexus-root .n-sb{padding:6px 20px 22px}
  .nexus-root .n-stt{font-size:1.15rem}
  .nexus-root .n-tll,.nexus-root .n-tllf{left:22px}
  .nexus-root .n-pg{grid-template-columns:1fr;gap:16px}
  .nexus-root .n-pc{padding:28px 24px}
  .nexus-root .n-comm-in{grid-template-columns:1fr}
  .nexus-root .n-comm-l{border-radius:28px;padding:40px 28px}
  .nexus-root .n-comm-r{display:none}
  .nexus-root .n-cbs{grid-template-columns:1fr}
  .nexus-root .n-ctab{padding:50px 28px;margin:20px 16px 60px}
  .nexus-root .n-hctas .n-bp,.nexus-root .n-hctas .n-bs{width:100%;justify-content:center}
  .nexus-root .n-ctabtns .n-bp,.nexus-root .n-ctabtns .n-bc{width:100%;justify-content:center}
  .nexus-root .n-carousel-card{padding:32px 24px}
  .nexus-root .n-carousel-nav{top:32px;right:24px}
  .nexus-root .n-cc-title{font-size:1.3rem}
  .nexus-root .n-prep-content{padding:28px 24px}
  .nexus-root .n-prep-tabs{gap:6px}
  .nexus-root .n-ptab{padding:8px 16px;font-size:13px}
}
@media(min-width:769px) and (max-width:1024px){.nexus-root .n-pg{grid-template-columns:repeat(2,1fr)}}
@media(max-width:480px){.nexus-root .n-hls{grid-template-columns:repeat(2,1fr)}.nexus-root .n-cdrow{flex-wrap:wrap;justify-content:center}}
`;

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Nexus1Landing() {
  const [activeStage, setActiveStage] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const stageRefs = useRef([]);
  const carouselInterval = useRef(null);

  useEffect(() => {
    const target = new Date("2026-03-06T00:00:00+05:30").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    carouselInterval.current = setInterval(() => {
      setCurrentProblem((p) => (p + 1) % problemStatements.length);
    }, 6000);
    return () => clearInterval(carouselInterval.current);
  }, []);

  const goToProblem = (i) => {
    setCurrentProblem(i);
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      setCurrentProblem((p) => (p + 1) % problemStatements.length);
    }, 6000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveStage(Number(e.target.dataset.idx)); }); },
      { threshold: 0.4 }
    );
    stageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cp = problemStatements[currentProblem];

  return (
    <>
      <style>{scopedStyles}</style>

      {/* MOBILE STICKY — outside .nexus-root so it stays fixed at viewport top */}
   

      <div className="nexus-root">
        <div className="n-wrap">

          {/* ═══ HERO ═══ */}
          <section className="n-hero">
            <div className="n-hero-bg"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="" /></div>
            <div className="n-hero-ov" />
            <div className="n-hero-gl" />
            <div className="n-glow n-glow-1" />
            <div className="n-glow n-glow-2" />
            <div className="n-hc">
              <div className="n-badge n-live"><span className="n-bdot" /> Registration Live</div>
              <h1 className="n-htitle"><span className="n-tg">NEXUS</span>{" "}<span className="n-to">1.0</span></h1>
              <p className="n-hsub">A 7-week student innovation challenge — ideate, build &amp; showcase AI-powered solutions that transform student life.</p>
              <div className="n-horg">Organized by <span>BridgegapEdge Solutions Pvt. Ltd.</span></div>
              <div className="n-cdrow">
                {[{ n: timeLeft.days, l: "Days" },{ n: timeLeft.hours, l: "Hours" },{ n: timeLeft.mins, l: "Mins" },{ n: timeLeft.secs, l: "Secs" }].map((c) => (
                  <div className="n-cdb" key={c.l}><span className="n-cdn">{String(c.n).padStart(2, "0")}</span><span className="n-cdl">{c.l}</span></div>
                ))}
              </div>
              <div className="n-hctas">
                <a className="n-bp" href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">Register Now →</a>
                <a className="n-bs" href="#nexus-stages">View Stages ↓</a>
              </div>
            </div>
          </section>

          {/* ═══ HIGHLIGHTS ═══ */}
          <div className="n-hls">
            {highlights.map((h) => (
              <div className="n-hli" key={h.label}><span className="n-hli-i">{h.icon}</span><span className="n-hli-v">{h.value}</span><span className="n-hli-l">{h.label}</span></div>
            ))}
          </div>

          {/* ═══ ABOUT ═══ */}
          <section className="n-sec">
            <span className="n-sl">About the Challenge</span>
            <h2 className="n-st">Empowering students to solve <span style={{ color: "var(--n-teal-l)" }}>real problems</span> with AI</h2>
            <p className="n-sd">Nexus 1.0 guides teams from ideation to prototype across 7+ weeks, culminating in a grand finale showcasing student-built AI solutions.</p>
            <div className="n-ag">
              <div className="n-aiw">
                <img src="/images/nx.webp" alt="Team" />
                <div className="n-ait">🎯 STUDENT INNOVATION</div>
              </div>
              <div>
                <div className="n-afs">
                  {whyParticipate.map((f) => (
                    <div className="n-af" key={f.text}><div className="n-af-i">{f.icon}</div><div className="n-af-t"><p>{f.text}</p></div></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ PROBLEM STATEMENTS CAROUSEL ═══ */}
          <section className="n-sec">
            <span className="n-sl">Problem Statements</span>
            <h2 className="n-st">Choose your <span style={{ color: "var(--n-cyan)" }}>challenge</span></h2>
            <p className="n-sd">Three real-world student problems. Pick one and build an AI-powered solution that makes a difference.</p>
            <div className="n-carousel-wrap">
              <div className="n-carousel-card" style={{ borderColor: `${cp.color}22` }}>
                <div className="n-cc-topbar" style={{ background: `linear-gradient(90deg, ${cp.color}, ${cp.color}88)` }} />
                <div className="n-carousel-nav">
                  <button className="n-cnav-btn" onClick={() => goToProblem((currentProblem - 1 + problemStatements.length) % problemStatements.length)}>←</button>
                  <button className="n-cnav-btn" onClick={() => goToProblem((currentProblem + 1) % problemStatements.length)}>→</button>
                </div>
                <div className="n-cc-num">Problem {cp.id} of {problemStatements.length}</div>
                <span className="n-cc-emoji">{cp.emoji}</span>
                <h3 className="n-cc-title">{cp.title}</h3>
                <p className="n-cc-tagline">{cp.tagline}</p>
                <div className="n-cc-problem"><h4>The Problem</h4><p>{cp.problem}</p></div>
                <div className="n-cc-ai">
                  <h4>AI Areas for Scoring</h4>
                  <div className="n-cc-ai-list">{cp.aiAreas.map((a, i) => <span className="n-cc-ai-tag" key={i}>{a}</span>)}</div>
                </div>
              </div>
              <div className="n-carousel-dots">
                {problemStatements.map((_, i) => (
                  <button key={i} className={`n-cdot ${i === currentProblem ? "active" : ""}`} onClick={() => goToProblem(i)} />
                ))}
              </div>
            </div>
          </section>

          {/* ═══ STAGES ═══ */}
          <section className="n-sec" id="nexus-stages">
            <span className="n-sl">Stages & Timeline</span>
            <h2 className="n-st">Five stages to the <span style={{ color: "var(--n-cyan)" }}>Grand Finale</span></h2>
            <p className="n-sd">Registration → Idea → Prototype → Live Demo → Finale</p>
            <div className="n-tlc">
              <div className="n-tll" />
              <div className="n-tllf" style={{ height: `${((activeStage + 1) / stages.length) * 100}%` }} />
              {stages.map((s, i) => (
                <div key={s.id} ref={(el) => (stageRefs.current[i] = el)} data-idx={i} className={`n-sc ${i <= activeStage ? "act" : ""}`}>
                  <div className="n-sd2">{s.icon}</div>
                  <div className="n-sb">
                    <span className={`n-stag ${s.tag === "LIVE" ? "live" : s.tag === "GRAND FINALE" ? "finale" : "round"}`}>{s.tag}</span>
                    <h3 className="n-stt">{s.title}</h3>
                    <p className="n-sdt">{s.date}</p>
                    <p className="n-sds">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ WHAT TO PREPARE ═══ */}
          <WhatToPrepare />

          {/* ═══ PERKS ═══ */}
          <section className="n-sec">
            <span className="n-sl">Perks & Rewards</span>
            <h2 className="n-st">What you <span style={{ color: "var(--n-teal-l)" }}>gain</span> from Nexus 1.0</h2>
            <p className="n-sd">Beyond competition — grow your skills, expand your network, and unlock real career opportunities.</p>
            <div className="n-pg">
              {perks.map((p) => (<div className="n-pc" key={p.title}><div className="n-pi">{p.icon}</div><h4>{p.title}</h4><p>{p.desc}</p></div>))}
            </div>
          </section>

          {/* ═══ COMMUNITY ═══ */}
          <div className="n-comm">
            <div className="n-comm-in">
              <div className="n-comm-l">
                <span className="n-sl">Join Our Community</span>
                <h2>Stay connected. Stay <span style={{ color: "var(--n-cyan)" }}>ahead.</span></h2>
                <p className="n-csub">Join the official Nexus WhatsApp community for jobs, internships, event updates & exclusive resources.</p>
                <div className="n-cbs">
                  {communityBenefits.map((b, i) => <div className="n-cbi" key={i}>{b}</div>)}
                </div>
                <a className="n-bc" href={COMMUNITY_LINK} target="_blank" rel="noopener noreferrer">💬 Join WhatsApp Community</a>
              </div>
              <div className="n-comm-r">
<img src="/images/scr.webp" alt="Community" />
                <div className="n-comm-ro" />
              </div>
            </div>
          </div>

          {/* ═══ CTA ═══ */}
          <div className="n-ctab">
            <h2>Ready to innovate?</h2>
            <p>Form your team of 4–6, register before the deadline, and start building the future of student life with AI.</p>
            <div className="n-ctabtns">
              <a className="n-bp" href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" style={{ fontSize: 18, padding: "18px 48px" }}>🚀 Register Your Team</a>
              <a className="n-bc" href={COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" style={{ fontSize: 18, padding: "18px 40px" }}>💬 Join Community</a>
            </div>
          </div>

          {/* ═══ FOOTER ═══ */}
          <footer className="n-ft">
            <p className="n-ft-o">Organized by <a href="mailto:amala.sebastian@thebridgegap.com">BridgegapEdge Solutions Pvt. Ltd.</a></p>
          </footer>
        </div>
      </div>
    </>
  );
}

// ─── WHAT TO PREPARE (TABBED) ────────────────────────────────────────────────

function WhatToPrepare() {
  const [tab, setTab] = useState(0);

  const tabs = [
    { label: "📝 Registration", id: 0 },
    { label: "💡 Round 1 — PPT", id: 1 },
    { label: "🛠️ Round 2 — Prototype", id: 2 },
    { label: "🎤 Round 3 — Live Demo", id: 3 },
    { label: "🏆 Grand Finale", id: 4 },
  ];

  const slides = [
    { num: "1", title: "Team Introduction", desc: "Team name, all member names & college" },
    { num: "2", title: "Problem Statement", desc: "Selected problem & key challenges" },
    { num: "3", title: "Analysis & Methodology", desc: "Solution approach & workflow diagram" },
    { num: "4", title: "Tech & AI Integration", desc: "Tools, platforms & AI/ML usage" },
    { num: "5", title: "Implementation Plan", desc: "Solution summary & expected impact" },
  ];

  const proto = [
    "Functional Prototype with complete documentation",
    "Demo Video (3–5 minutes) demonstrating the solution",
    "Technical Architecture (diagrams & explanations)",
    "Code Repository Link (GitHub/GitLab)",
    "AI Model Details (if AI/ML is used)",
  ];

  return (
    <section className="n-sec">
      <span className="n-sl">What to Prepare</span>
      <h2 className="n-st">Stage-by-stage <span style={{ color: "var(--n-teal-l)" }}>preparation guide</span></h2>
      <p className="n-sd">Each round has specific requirements. Here is exactly what you need for every stage.</p>
      <div className="n-prep-tabs">
        {tabs.map((t) => (
          <button key={t.id} className={`n-ptab ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
      </div>
      <div className="n-prep-content">
        {tab === 0 && (<>
          <h3><span>📝</span> Registration Phase</h3>
          <p className="n-prep-desc">06 Feb – 06 Mar 2026 • Get your team ready</p>
          <div className="n-cklist">
            <div className="n-cki"><div className="n-ckic">✓</div>Form a team of 4–6 members</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Complete registration on Unstop</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Join the official WhatsApp community</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Attend all mandatory webinars from industry mentors</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Review the 3 problem statements and choose one</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Start brainstorming your solution approach</div>
          </div>
          <div className="n-prep-tip"><div className="n-prep-tip-i">💡</div><p><strong>Tip:</strong> All webinars are mandatory and cover technical frameworks, AI tools, and problem-solving approaches. Make sure every team member joins the WhatsApp group.</p></div>
        </>)}
        {tab === 1 && (<>
          <h3><span>💡</span> Round 1 — Idea Submission (PPT)</h3>
          <p className="n-prep-desc">06 Mar – 20 Mar 2026 • Submit a 5-slide presentation</p>
          <div className="n-slist">
            {slides.map((s) => (
              <div className="n-sli" key={s.num}><div className="n-sln">{s.num}</div><div className="n-sinfo"><h5>{s.title}</h5><p>{s.desc}</p></div></div>
            ))}
          </div>
          <div className="n-prep-tip"><div className="n-prep-tip-i">💡</div><p><strong>Tip:</strong> Keep slides clean and visual. Use workflow diagrams in Slide 3. Be specific about which AI/ML technologies you will use in Slide 4.</p></div>
        </>)}
        {tab === 2 && (<>
          <h3><span>🛠️</span> Round 2 — Prototype Submission</h3>
          <p className="n-prep-desc">22 Mar – 31 Mar 2026 • Submit via Google Drive link</p>
          <div className="n-cklist">
            {proto.map((c, i) => (<div className="n-cki" key={i}><div className="n-ckic">✓</div>{c}</div>))}
          </div>
          <div className="n-warn-box">⚠️ Ensure the Drive link has <strong style={{color:"#FBBF24"}}>view access enabled</strong> for evaluators. All files must be clearly named and organized. Incomplete or inaccessible links may lead to disqualification.</div>
          <div className="n-prep-tip"><div className="n-prep-tip-i">💡</div><p><strong>Tip:</strong> Your demo video should be 3–5 minutes and clearly show the solution working. Include a README in your code repository.</p></div>
        </>)}
        {tab === 3 && (<>
          <h3><span>🎤</span> Round 3 — Pre-Finale Live Demo</h3>
          <p className="n-prep-desc">04 Apr – 08 Apr 2026 • Live presentation to judges</p>
          <div className="n-cklist">
            <div className="n-cki"><div className="n-ckic">✓</div>Prepare a live demo of your working prototype</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Ensure stable internet & working microphone/camera</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Prepare to explain your technical architecture</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Be ready for Q&A from the judging panel</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Have a backup plan if live demo has issues</div>
          </div>
          <div className="n-prep-tip"><div className="n-prep-tip-i">💡</div><p><strong>Tip:</strong> The Zoom/Google Meet link will be shared in the official WhatsApp group. Top 15 teams advance to the Grand Finale. Practice your demo multiple times!</p></div>
        </>)}
        {tab === 4 && (<>
          <h3><span>🏆</span> Grand Finale</h3>
          <p className="n-prep-desc">11 Apr 2026 • Final evaluation & winner declaration</p>
          <div className="n-cklist">
            <div className="n-cki"><div className="n-ckic">✓</div>Polish your prototype based on Round 3 feedback</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Prepare a refined final presentation</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Attend the official orientation session</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Be ready for final evaluation by the judging panel</div>
            <div className="n-cki"><div className="n-ckic">✓</div>Prepare to showcase your solution's real-world impact</div>
          </div>
          <div className="n-prep-tip"><div className="n-prep-tip-i">🎉</div><p><strong>This is it!</strong> The best student-centric AI solutions will be showcased and winners declared. Focus on demonstrating real impact and innovation.</p></div>
        </>)}
      </div>
    </section>
  );
}