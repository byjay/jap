import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';

// --- Assets & Constants ---
const ASSETS = {
  bgMountFuji: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsBUQ8NI2rBviCSsKXFO0Cpb0xqtMEqGYC29xY5pvXUYAl9Rnm5alTm0zll0e2qqQi7I5nCY2FrgYSTaf_SP1yaRTqU9U2_QKotz2rLd90LBtmqGvOSK5dGhgC9dZBZSrdE1ymejWo4FgsOlBZsZ3Y16zdDMVBuix2dODZxoWDovuORosv8h2JGBEmMOtr8T7dl7sNBkKGfPMR8ivbY64VE5GvD0Fxv_q1lZv_9XUwGxfPjtT76AWes9EPeNqCvk0Yiyzlx__AmN8",
  bgTorii: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOyC9UQgHw5ZqtmUKh1jJyyleSihof0K5g7rJ7FxKANfs7_B008DmQImuwAWO0EU4AW3FXoJ_bx-SS1162iBSkRjJQAA58euyRq-MWrLXTy2HzTAhVAgQo9pd_9nMLE3wUTm_ler-8kxSQg-MbtmcCpDFU3cyOZU62CL6z2SKO7rJaYpFQddal1BDBm4ZAtYrko9rBaTsudLPL1kzyJEZz30zYVMhmwdbHUOFnrLgHRcWwucmF0e-oWA1e_T4EIz_L-mD10wyXf0g",
  avatar1: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwHUB1bEOuO2wzs9u2f_SIwtkABtflt6A984BwBLFzFcddRY8ijD9OwLgWRJtuQd-h5roWnf3mXH-VyLwHo80M9OHVw0zv5lYjHyOB76ehQg-2Ww7Z4MK09Hj8mGEqrIxEbw9ws6ydqK5wWA4i-PRiQCnCZEOwA8e67P3m9T4yFbd3htskYvnZHGPTnkiPClEOXn1bJ39f93nByLSSX43ZzZRl7pBZWNOwIbPKyzZ5xuGVgqBOPUJ6FSs6BCmrXU9rF6Rs2cqHVqM",
  lessonThumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIgKkrJNu96UV_8j2m3L2ig5PTJMAfoULbbZG87ktM5SynT_mAK9QcAtX84lZOtEwXkWeh_aMwFnGgfknqf_CdjPZW6_z78idrUtnDCsYWjbr0UeQKcH1RapX5VveQtCyiCd3mGOxM81WdNPguACDeuLq8_i6TiJlp2Q82JdTwsCK8MrXx6HZScYrnaicHduHyoQ4c1GO5amX6zF58pm6Zh8H1lFel6IhHRRxRjg_Wa_oXTA34ull8tuHpoeOGZhANGLQGuRN6f_Y",
  kanjiCat: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSgv2sHTC7fEuKU4qEioUoAdN1I5SAKmZBaQLTfVMck9mI9QVVoty8C-GDMD5CI6xwtEgnWfOpMcrHuvy6yAyOqu68fPZJOLPjYdxICBKTa9gvjhkexH_ZjpLkOvD-392ri4wywruLmq7Jrws7kK19g0-FXfdN73UXu7VYutS9gkhNneXTlFho5xHRLEUZMZ-UM6Rv4rZFudS5ttMQHxC37N54lcK03VoskQj3Z-XDQvorwiZkFYE2ayinpPlpn9oP3AvXorHIsb4",
  friend1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAckqWV0eviP9CyZYKJ46EgkW3PpZrsp1YNXLNLCASbZLIf7C9RRcFUt4fSOJOfH6U0UKGHcSaExlHCgumObI8PZ8UdUPhSrkyH-Qrp8bj5x4UnMaWsIgH2PxZYcIO5ssXhQhmcvgu9a3Zqej2EyhhXiOVaYx7BZwkV2dVF2av6dzyElX0L9FQh3CUR1wLWT0ndF7zJKaxsslVoMrdd0k1tXjksd3wN_cf_ZeeKcbSxUOy5I46F-nQEjNVM9GKr07zn9fbr7oWT-Vs",
  friend2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwmMBSXkXTO3YBMVsGvHlznmJWxnxLMbgf6gzfcFpj8AkwcSscC_XvLZt9ABjt9sIbMkXP3ZUiZ__JK_iQiYkj0EEBaNm7it26wwMTWyLy-O6apKlpRxZUZYBGaTsRsY_JDA2aT-AiNcXIyqHgTRJMMQ-hb7gre3elw0zVs3_Mczo-tUFaa15LNP2Tt2kvjT31zOeBNPJa8G2TpdyGqHoxjQ9Hdso6zb8AbR0xLoY35eZlAMZlz8md2uXVUI2KK3DC-pRTRPOOZqo",
  videoSample: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" // Placeholder for lesson video
};

// --- Reusable Components ---

const Icon = ({ name, className = "", filled = false }: { name: string; className?: string; filled?: boolean }) => (
  <span className={`material-symbols-rounded select-none ${filled ? 'font-variation-FILL-1' : ''} ${className}`} style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}>
    {name}
  </span>
);

const Button = ({ children, onClick, variant = 'primary', className = "" }: any) => {
  const baseStyle = "w-full py-3.5 rounded-xl font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg";
  const variants: any = {
    primary: "bg-primary hover:bg-indigo-500 text-white shadow-indigo-500/30",
    secondary: "bg-dark-card hover:bg-slate-600 text-white border border-slate-600",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
    accent: "bg-gradient-to-r from-accent-gold to-orange-500 text-white shadow-orange-500/30"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: 'home', label: 'Home', path: '/app/home' },
    { icon: 'map', label: 'Path', path: '/app/map' },
    { icon: 'leaderboard', label: 'Rank', path: '/app/rank' },
    { icon: 'person', label: 'Profile', path: '/app/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-dark-bg/95 backdrop-blur-xl border-t border-slate-800 flex justify-around items-center z-50 pb-2">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button 
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 p-2 transition-all duration-300 ${isActive ? 'text-primary -translate-y-1' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Icon name={item.icon} filled={isActive} className="text-2xl" />
            <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
            {isActive && <div className="h-1 w-1 bg-primary rounded-full absolute bottom-2" />}
          </button>
        );
      })}
    </div>
  );
};

// --- Screen Components ---

const WelcomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-full w-full flex flex-col">
      <div className="relative h-[55%] w-full overflow-hidden">
        <img src={ASSETS.bgMountFuji} className="absolute inset-0 w-full h-full object-cover" alt="Mount Fuji" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/20 to-dark-bg"></div>
        <div className="absolute top-12 left-0 right-0 flex justify-center">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <Icon name="translate" className="text-primary" />
            <span className="font-bold text-lg tracking-wide">NihongoPro</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-dark-bg flex flex-col px-6 pb-8 -mt-10 z-10 rounded-t-[2.5rem]">
        <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mt-4 mb-8 opacity-50"></div>
        <h1 className="text-4xl font-extrabold leading-tight mb-4 text-center">
          Master Japanese <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-purple-400">Today</span>
        </h1>
        <p className="text-slate-400 text-center mb-8 leading-relaxed">
          Join millions of learners on their journey to fluency with AI-powered video lessons and gamified challenges.
        </p>
        
        {/* Animated Feature Carousel Placeholder */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-8 pb-4">
          {[
            { icon: 'school', title: '2,000+ Kanji', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { icon: 'mic', title: 'AI Speech', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { icon: 'videocam', title: 'Video Lessons', color: 'text-orange-400', bg: 'bg-orange-500/10' },
          ].map((item, idx) => (
            <div key={idx} className="min-w-[140px] p-4 bg-dark-surface rounded-2xl border border-slate-700/50 flex flex-col gap-3 items-center text-center">
              <div className={`p-3 rounded-full ${item.bg}`}>
                <Icon name={item.icon} className={`text-3xl ${item.color}`} />
              </div>
              <span className="font-bold text-sm text-slate-200">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-3">
          <Button onClick={() => navigate('/login')}>Get Started</Button>
          <Button variant="secondary" onClick={() => navigate('/login')}>I already have an account</Button>
        </div>
      </div>
    </div>
  );
};

const DashboardScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-dark-bg/80 backdrop-blur-md px-5 py-4 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={ASSETS.avatar1} className="w-10 h-10 rounded-full border-2 border-slate-700 object-cover" alt="Profile" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-dark-bg rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Welcome back,</p>
            <p className="text-sm font-bold">Alex-san</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-dark-surface rounded-full flex items-center gap-1.5 border border-slate-700">
            <Icon name="local_fire_department" className="text-orange-500 text-lg" filled />
            <span className="text-sm font-bold text-orange-500">12</span>
          </div>
          <div className="px-3 py-1.5 bg-dark-surface rounded-full flex items-center gap-1.5 border border-slate-700">
            <Icon name="diamond" className="text-blue-400 text-lg" filled />
            <span className="text-sm font-bold text-blue-400">450</span>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Daily Goal */}
        <div className="bg-dark-surface p-5 rounded-3xl border border-slate-700 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-end mb-3 relative z-10">
            <div>
              <h3 className="text-lg font-bold text-white">Daily Goal</h3>
              <p className="text-slate-400 text-sm">Keep up the momentum!</p>
            </div>
            <span className="text-2xl font-black text-primary">3<span className="text-sm text-slate-500 font-normal">/5</span></span>
          </div>
          <div className="h-3 w-full bg-dark-bg rounded-full overflow-hidden relative z-10">
            <div className="h-full bg-gradient-to-r from-primary to-purple-500 w-[60%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          </div>
        </div>

        {/* Up Next: Video Lesson */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold">Up Next</h3>
            <button className="text-primary text-sm font-bold">See All</button>
          </div>
          <div onClick={() => navigate('/lesson/video')} className="group relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/50 border border-slate-700">
            <img src={ASSETS.lessonThumb} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" alt="Lesson" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-transform group-hover:scale-110 group-active:scale-95">
                <Icon name="play_arrow" className="text-white text-3xl" filled />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded uppercase">Speaking</span>
                <span className="text-xs text-slate-300 flex items-center gap-1"><Icon name="schedule" className="text-xs"/> 5 min</span>
              </div>
              <h4 className="text-lg font-bold text-white leading-tight">Ordering at a Restaurant</h4>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <div onClick={() => navigate('/lesson/vocab')} className="bg-dark-surface hover:bg-slate-700 p-4 rounded-2xl border border-slate-700 transition-colors cursor-pointer flex flex-col gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="style" className="text-xl" />
            </div>
            <div>
              <h4 className="font-bold">Vocabulary</h4>
              <p className="text-xs text-slate-400">15 words due</p>
            </div>
          </div>
          <div onClick={() => navigate('/lesson/kanji')} className="bg-dark-surface hover:bg-slate-700 p-4 rounded-2xl border border-slate-700 transition-colors cursor-pointer flex flex-col gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="brush" className="text-xl" />
            </div>
            <div>
              <h4 className="font-bold">Kanji</h4>
              <p className="text-xs text-slate-400">Review 5 chars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapScreen = () => {
  const navigate = useNavigate();
  // Create a winding path using absolute positioning for simplicity in this demo
  return (
    <div className="h-full overflow-y-auto no-scrollbar relative pb-24 bg-[#0B1120]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Header */}
      <div className="sticky top-0 z-30 bg-dark-bg/90 backdrop-blur-xl px-5 py-4 border-b border-slate-800 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">World 1</span>
          <h2 className="text-xl font-black text-white">The Basics</h2>
        </div>
        <div className="px-3 py-1 bg-dark-card rounded-lg border border-slate-700 text-xs font-bold text-slate-300">
          2/5 Complete
        </div>
      </div>

      <div className="p-8 relative flex flex-col items-center gap-16 mt-8">
        {/* Path Line (Simulated with absolute div) */}
        <div className="absolute top-20 bottom-20 w-2 bg-slate-800 rounded-full -z-10"></div>

        {/* Level 1: Completed */}
        <div className="relative group cursor-pointer" onClick={() => navigate('/lesson/video')}>
          <div className="w-20 h-20 rounded-full bg-accent-gold border-4 border-yellow-600 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-transform hover:scale-110 z-10">
            <Icon name="check" className="text-yellow-900 text-4xl font-bold" />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-accent-gold font-bold text-sm">Hiragana 1</span>
          </div>
          <div className="absolute -left-12 top-2">
            <div className="flex">
              <Icon name="star" className="text-yellow-400 text-lg" filled />
              <Icon name="star" className="text-yellow-400 text-lg" filled />
              <Icon name="star" className="text-yellow-400 text-lg" filled />
            </div>
          </div>
        </div>

        {/* Level 2: Current (Video Lesson) */}
        <div className="relative group cursor-pointer" onClick={() => navigate('/lesson/video')}>
          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-indigo-300 flex items-center justify-center shadow-2xl relative z-10 animate-float">
            <Icon name="play_arrow" className="text-white text-5xl" filled />
          </div>
          
          {/* Card Popout */}
          <div className="absolute left-16 top-0 ml-10 bg-dark-card p-4 rounded-xl border border-indigo-500/50 shadow-xl w-48 transition-all hover:scale-105">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-white text-sm">Basic Greetings</h4>
              <span className="bg-primary text-[10px] px-1.5 py-0.5 rounded font-bold">NEW</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">Master "Konnichiwa" and intros.</p>
            <div className="flex gap-2">
              <div className="px-2 py-1 bg-dark-bg rounded text-[10px] text-yellow-400 font-bold border border-slate-700">25 XP</div>
              <div className="px-2 py-1 bg-dark-bg rounded text-[10px] text-blue-400 font-bold border border-slate-700">5 Gems</div>
            </div>
          </div>
        </div>

        {/* Level 3: Locked */}
        <div className="relative opacity-60 grayscale">
          <div className="w-20 h-20 rounded-full bg-slate-700 border-4 border-slate-600 flex items-center justify-center shadow-lg">
            <Icon name="lock" className="text-slate-400 text-3xl" />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-slate-500 font-bold text-sm">Self Intro</span>
          </div>
        </div>

        {/* Level 4: Locked Boss */}
        <div className="relative opacity-50 grayscale mt-4">
          <div className="w-28 h-28 rounded-3xl rotate-45 bg-slate-800 border-4 border-slate-600 flex items-center justify-center shadow-lg">
            <div className="-rotate-45">
               <Icon name="swords" className="text-slate-400 text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoLessonScreen = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="h-full bg-black flex flex-col relative">
      {/* Video Player */}
      <div className="relative w-full aspect-[9/16] max-h-[70vh] bg-slate-900 overflow-hidden shadow-2xl">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          src={ASSETS.videoSample}
          poster={ASSETS.lessonThumb}
          playsInline
          loop
        />
        
        {/* Custom Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <button onClick={() => navigate(-1)} className="p-2 bg-black/40 backdrop-blur rounded-full text-white hover:bg-white/20 transition-colors">
              <Icon name="close" />
            </button>
            <div className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs font-bold text-white border border-white/10">
              Grammar Point
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white text-outline">Expressing Desire</h2>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-jp font-bold text-primary-glow">〜たい</span>
                <span className="text-lg text-slate-300">(tai)</span>
              </div>
              <p className="text-slate-200 text-sm font-medium bg-black/40 inline-block px-3 py-2 rounded-lg backdrop-blur-sm">
                Add <span className="text-primary-glow font-bold">tai</span> to verb stems to say "I want to..."
              </p>
            </div>

            <div className="flex items-center justify-center gap-8">
               <button className="text-white/70 hover:text-white"><Icon name="replay_10" className="text-4xl" /></button>
               <button onClick={togglePlay} className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-105 transition-transform">
                 <Icon name={isPlaying ? "pause" : "play_arrow"} className="text-5xl text-white" filled />
               </button>
               <button className="text-white/70 hover:text-white"><Icon name="forward_10" className="text-4xl" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content / Actions */}
      <div className="flex-1 bg-dark-surface rounded-t-3xl -mt-6 relative z-10 p-6 flex flex-col gap-4">
        <div className="w-12 h-1.5 bg-slate-600 rounded-full mx-auto opacity-30 mb-2"></div>
        
        <div className="flex gap-4 mb-4">
          <div className="flex-1 bg-dark-bg p-4 rounded-2xl border border-slate-700">
            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Example</p>
            <p className="text-lg font-jp text-white mb-1">食べ<span className="text-primary-glow">たい</span></p>
            <p className="text-sm text-slate-400">Tabe<span className="text-indigo-400">tai</span> (Want to eat)</p>
          </div>
          <div className="flex-1 bg-dark-bg p-4 rounded-2xl border border-slate-700">
            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Verb</p>
            <p className="text-lg font-jp text-white mb-1">食べる</p>
            <p className="text-sm text-slate-400">Taberu (To eat)</p>
          </div>
        </div>

        <Button variant="accent" onClick={() => navigate('/lesson/vocab')}>
          Start Practice <Icon name="arrow_forward" />
        </Button>
      </div>
    </div>
  );
};

const VocabPracticeScreen = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-full bg-dark-bg flex flex-col p-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full"><Icon name="close" /></button>
        <div className="w-full max-w-[200px] h-2 bg-slate-800 rounded-full overflow-hidden mx-4">
          <div className="w-1/4 h-full bg-primary rounded-full"></div>
        </div>
        <div className="text-sm font-bold text-primary">5/20</div>
      </div>

      {/* Flashcard */}
      <div className="flex-1 flex flex-col items-center justify-center perspective-1000 relative">
        <div 
          onClick={() => setFlipped(!flipped)}
          className={`w-full max-w-sm aspect-[3/4] cursor-pointer transition-all duration-500 preserve-3d relative ${flipped ? 'rotate-y-180' : ''}`}
          style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Front */}
          <div className="absolute inset-0 bg-dark-surface rounded-3xl border border-slate-700 shadow-2xl flex flex-col items-center justify-between p-8 backface-hidden">
            <div className="w-full flex justify-between">
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs font-bold uppercase">New Word</span>
              <Icon name="volume_up" className="text-slate-400" />
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <div className="w-40 h-40 rounded-full bg-slate-800 border-4 border-slate-700 p-1">
                <img src={ASSETS.kanjiCat} className="w-full h-full rounded-full object-cover" alt="Cat" />
              </div>
              <div className="text-center">
                <h2 className="text-6xl font-black font-jp mb-2 text-white">猫</h2>
                <p className="text-2xl text-primary font-jp">ねこ</p>
              </div>
            </div>

            <p className="text-slate-500 text-sm font-medium animate-pulse">Tap to flip</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-dark-surface rounded-3xl border border-primary/30 shadow-glow flex flex-col items-center justify-center p-8 backface-hidden rotate-y-180" style={{ transform: 'rotateY(180deg)' }}>
             <h2 className="text-4xl font-bold text-white mb-2">Cat</h2>
             <p className="text-slate-400 italic mb-8">Noun</p>
             
             <div className="w-full bg-dark-bg p-4 rounded-xl border border-slate-700 mb-2">
                <p className="font-jp text-lg mb-1"><span className="text-primary font-bold">猫</span>が好きです。</p>
                <p className="text-sm text-slate-400">I like <span className="text-white font-bold">cats</span>.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Button variant="secondary" onClick={() => setFlipped(false)}>Study Again</Button>
        <Button variant="primary" onClick={() => navigate('/app/home')}>I Got It</Button>
      </div>
    </div>
  );
};

const LeaderboardScreen = () => {
  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 bg-dark-bg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Leaderboard</h2>
        
        {/* Podium */}
        <div className="flex justify-center items-end gap-4 mb-10 h-48">
          <div className="flex flex-col items-center w-24">
            <div className="w-16 h-16 rounded-full border-2 border-slate-500 overflow-hidden mb-2 relative">
               <img src={ASSETS.friend1} className="w-full h-full object-cover" />
               <div className="absolute bottom-0 w-full bg-slate-500 text-[10px] text-center font-bold">2</div>
            </div>
            <p className="text-xs font-bold mb-1">Haruto</p>
            <div className="w-full bg-dark-surface h-24 rounded-t-lg border-t border-x border-slate-700 flex items-end justify-center pb-2">
              <span className="text-slate-500 font-bold">14k</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center w-28 -mt-4 relative z-10">
            <Icon name="crown" className="text-accent-gold text-3xl mb-1 absolute -top-10 animate-bounce" filled />
            <div className="w-20 h-20 rounded-full border-4 border-accent-gold overflow-hidden mb-2 relative shadow-glow-gold">
               <img src={ASSETS.friend2} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-bold text-accent-gold mb-1">Sakura</p>
            <div className="w-full bg-gradient-to-t from-yellow-900/50 to-dark-surface h-32 rounded-t-lg border-t border-x border-accent-gold flex items-end justify-center pb-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-gold/10 animate-pulse"></div>
              <span className="text-accent-gold font-bold text-lg relative z-10">15.8k</span>
            </div>
          </div>

          <div className="flex flex-col items-center w-24">
            <div className="w-16 h-16 rounded-full border-2 border-orange-700 overflow-hidden mb-2 relative">
               <div className="w-full h-full bg-slate-600 flex items-center justify-center text-xl">R</div>
               <div className="absolute bottom-0 w-full bg-orange-700 text-[10px] text-center font-bold">3</div>
            </div>
            <p className="text-xs font-bold mb-1">Ryu</p>
            <div className="w-full bg-dark-surface h-16 rounded-t-lg border-t border-x border-slate-700 flex items-end justify-center pb-2">
              <span className="text-slate-600 font-bold">13k</span>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="space-y-3">
          {[4, 5, 6, 7].map((rank) => (
            <div key={rank} className="flex items-center gap-4 p-3 bg-dark-surface rounded-xl border border-slate-800">
              <span className="w-6 text-center font-bold text-slate-500">{rank}</span>
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div className="flex-1">
                <p className="font-bold text-sm">User {rank}</p>
                <p className="text-xs text-slate-400">12,450 XP</p>
              </div>
            </div>
          ))}
          {/* User Rank */}
          <div className="sticky bottom-24 flex items-center gap-4 p-3 bg-indigo-900/80 backdrop-blur rounded-xl border border-indigo-500/50 shadow-lg transform scale-105">
             <span className="w-6 text-center font-bold text-white">42</span>
             <img src={ASSETS.avatar1} className="w-10 h-10 rounded-full border-2 border-white" />
             <div className="flex-1">
                <p className="font-bold text-sm text-white">You</p>
                <p className="text-xs text-indigo-200">5,300 XP</p>
              </div>
              <Icon name="arrow_upward" className="text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- App Layout Wrapper ---

const AppLayout = () => {
  return (
    <div className="relative h-full w-full max-w-md mx-auto bg-dark-bg shadow-2xl flex flex-col overflow-hidden">
      <Routes>
        <Route path="/home" element={<DashboardScreen />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/rank" element={<LeaderboardScreen />} />
        <Route path="/profile" element={<div className="p-8 text-center pt-20"><h1 className="text-2xl font-bold">Profile Coming Soon</h1></div>} />
        <Route path="*" element={<DashboardScreen />} />
      </Routes>
      <BottomNav />
    </div>
  );
};

// --- Main Router Setup ---

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<div className="h-full flex items-center justify-center p-6"><div className="w-full max-w-sm"><h2 className="text-2xl font-bold mb-6 text-center">Login</h2><Link to="/app/home"><Button>Demo Login</Button></Link></div></div>} />
        <Route path="/app/*" element={<AppLayout />} />
        <Route path="/lesson/video" element={<VideoLessonScreen />} />
        <Route path="/lesson/vocab" element={<VocabPracticeScreen />} />
        <Route path="/lesson/kanji" element={<VocabPracticeScreen />} /> {/* Reuse for demo */}
      </Routes>
    </HashRouter>
  );
};

export default App;