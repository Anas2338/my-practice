"use client";


// import { useState, useEffect } from "react";
// import { nanoid } from "nanoid";

// export default function ComboboxDemo() {

//   const ITEMCODE_URL = process.env.NEXT_PUBLIC_ITEMCODE_URL;
//   const [item, setItem] = useState<any[]>([]);
//   const [filtered, setFiltered] = useState<any[]>([]);
//   const [selectedhs, setSelectedhs] = useState("");
//   const [selecteddiscription, setSelecteddiscription] = useState("")

//   async function getItemCode() {
//     try {
//       const res = await fetch(ITEMCODE_URL as string, {
//         headers: {
//           Authorization: `Bearer f3fdafd7-5182-34f2-a815-51a3aff1fa62`,
//         },
//       });
//       const itemcode = await res.json();

//       const options = itemcode.map((elem: any) => ({
//         id: nanoid(),
//         value: elem.hS_CODE,
//         label: elem.description,
//       }));

//       setItem(options);
//     } catch (err) {
//       console.log("Error fetching hsCode:", err);
//     }
//   }

//   useEffect(() => {
//     getItemCode();
//   }, []);

//   const gethsvalue = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setSelecteddiscription(value);

//     if (value.length >= 3) {
//       const result = item.filter((obj) =>
//         obj.label.toLowerCase().includes(value.toLowerCase())
//       );
//       setFiltered(result);
//     } else {
//       setFiltered([]);
//     }
//   };

//   const handleselect = (e: any)=>{
//     setSelectedhs(e.value)
//     setSelecteddiscription(e.label)
//     setFiltered([])
//   }

//   return (
//     <div className="flex flex-col gap-4">

//         <div className="w-[400px]">
//           <input className="border-2 border-black w-full" onChange={gethsvalue} autoFocus value={selecteddiscription}/>

//           {filtered.length > 0 && (
//             <ul className="mt-3 border p-2 h-[200px] overflow-scroll cursor-pointer">
//               {filtered.map((elem) => (
//                 <li
//                   key={elem.id}
//                   onClick={() => handleselect(elem)}
//                   className="hover:bg-gray-200 p-1"
//                 >
//                   {elem.value} - {elem.label}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//       <div>
//         <input
//           className="border-2 border-black w-[300px] p-2"
//           value={selectedhs}
//           readOnly
//         />
//       </div>
//     </div>
//   );
// }







import React, { useState, useRef, useEffect } from 'react';
import {
  Upload, Play, Pause, RotateCcw, Volume2, VolumeX, Shield, CheckCircle,
  AlertTriangle, Flame, Cpu, Eye, EyeOff, Film, Download, Share2, Award,
  Sparkles, Layers, Sliders, ArrowRight, RefreshCw, ChevronRight, Activity,
  Zap, HelpCircle, Check, FileText, FastForward, Video, Maximize2
} from 'lucide-react';

const DEMO_SAMPLES = [
  {
    id: 'sample-1',
    title: 'Batter #30 - Stance, Backlift & Footwork',
    category: 'Batting Review',
    duration: '15s',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    analysis: {
      overallScore: 68,
      batterName: 'Talha (Batter #30)',
      summary: 'Strong stance and base, but open backlift pointing toward gully causes off-side vulnerability and unbalanced finish.',
      weaknesses: [
        {
          id: 'w1',
          title: 'Steps Away to Leg Side',
          severity: 'Critical',
          timestamp: '00:03',
          timeInSec: 3,
          description: 'Moves leg-side early, leaving all three stumps exposed to straight or yorker deliveries.',
          fix: 'Stay close to the line of the ball. Avoid clearing front leg before assessing length.'
        },
        {
          id: 'w2',
          title: 'Backlift Points to Gully',
          severity: 'Moderate',
          timestamp: '00:06',
          timeInSec: 6,
          description: 'Bat lifts high toward off-side/gully instead of straight back over stumps, leading to an angled bat path.',
          fix: 'Lift bat straight back pointing toward fine-leg/stumps or first slip for cleaner down-the-ground shots.'
        },
        {
          id: 'w3',
          title: 'Unbalanced Finish',
          severity: 'Moderate',
          timestamp: '00:10',
          timeInSec: 10,
          description: 'Weight rests on one leg with head at edge of support base, forcing high-risk lofted mis-hits.',
          fix: 'Keep head directly over front knee with feet shoulder-width apart to maintain ground stability.'
        }
      ],
      drills: [
        { title: 'Straight Backlift Shadow Batting', count: '3 sets of 10 daily', description: 'Practice mirror shadow batting checking bat path stays over middle stump.' },
        { title: 'Gate Drill with Cones', count: '20 balls per session', description: 'Set two cones slightly wider than bat width. Drive and defend through the gate without touching cones.' },
        { title: 'Hold-the-Finish Balance Check', count: '2 seconds hold after shot', description: 'Hold shot completion for 2 seconds. If body wobbles, weight distribution was unbalanced.' },
        { title: 'Length Recognition Callout', count: '15 throwdowns', description: 'Partner throws mixed lengths. Batter must call out length out loud before shot execution.' }
      ],
      scriptEn: "First, watch the whole delivery. Stance shows a balanced base with eyes level on the bowler. However, at backlift, the bat lifts toward off-side gully. During execution, foot moves away exposing all three stumps. To fix, practice straight backlift and hold your finish balanced.",
      scriptUr: "Pehlay poori ball dekhein. Stance mein balance acha hai. Lekin backlift gully ki taraf ja rahi hai aur footwork mein teeno stumps expose ho rahey hain. Isay sahi karne ke liye straight backlift aur balance finish ki practice karein."
    }
  },
  {
    id: 'sample-2',
    title: 'Pacer Fast Bowling - Arm Path & Release',
    category: 'Bowling Analysis',
    duration: '12s',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    analysis: {
      overallScore: 82,
      batterName: 'Fast Bowler #12',
      summary: 'Explosive jump and strong gather. Minor hip-shoulder rotation delay causing seam wobble.',
      weaknesses: [
        {
          id: 'bw1',
          title: 'Late Arm Pull Down',
          severity: 'Moderate',
          timestamp: '00:04',
          timeInSec: 4,
          description: 'Non-bowling arm drops quickly causing slight loss of velocity at release.',
          fix: 'Drive non-bowling arm forcefully down towards hip to maximize torque.'
        }
      ],
      drills: [
        { title: 'Target Spot Bowling', count: '30 deliveries', description: 'Place coin on good length spot, focus on wrist snap.' }
      ],
      scriptEn: "Good pace and gather. Ensure the non-bowling arm pulls directly into your ribcage for maximum velocity.",
      scriptUr: "Achi speed aur jump. Non-bowling arm ko tightly pull karein taake swing aur pace barh sakay."
    }
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('upload'); // upload, live_analysis, dashboard, comparison, drills, export
  const [currentVideo, setCurrentVideo] = useState(DEMO_SAMPLES[0]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Video Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Processing Animation Simulation State
  const [processingStep, setProcessingStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Audio Speech Voiceover State
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechLang, setSpeechLang] = useState('en'); // 'en' or 'ur'

  // Branding Export Settings
  const [brandTitle, setBrandTitle] = useState('DREAM ANALYTICS');
  const [watermarkPos, setWatermarkPos] = useState('top-left');
  const [exportTheme, setExportTheme] = useState('emerald');

  const videoRef = useRef<HTMLVideoElement>(null);
  const rawVideoRef = useRef<HTMLVideoElement>(null);
  const compVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(10);

    const timer = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsUploading(false);
          // Set custom uploaded video object
          const newVideo = {
            id: 'custom-' + Date.now(),
            title: file.name,
            category: 'Custom Upload Analysis',
            duration: '00:15',
            videoUrl: URL.createObjectURL(file),
            thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
            analysis: DEMO_SAMPLES[0].analysis // dynamic simulation analysis
          };
          setCurrentVideo(newVideo);
          startPipelineProcessing();
          return 100;
        }
        return prev + 18;
      });
    }, 250);
  };

  const startPipelineProcessing = () => {
    setActiveTab('live_analysis');
    setIsProcessing(true);
    setProcessingStep(0);

    const stepsTimer = setInterval(() => {
      setProcessingStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepsTimer);
          setIsProcessing(false);
          return 4;
        }
        return prev + 1;
      });
    }, 1200);
  };

  useEffect(() => {
    if (!showOverlay || activeTab === 'upload') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrame: number;

    const renderLandmarks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (showOverlay) {
        // Draw Skeleton Lines (Simulated OpenPose / MediaPipe Joints)
        const t = currentTime;

        // Head/Helmet
        ctx.strokeStyle = '#FACC15';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(canvas.width * 0.48, canvas.height * 0.35, 18, 0, Math.PI * 2);
        ctx.stroke();

        // Spine & Limbs
        ctx.strokeStyle = '#10B981';
        ctx.lineWidth = 4;
        ctx.beginPath();
        // Spine
        ctx.moveTo(canvas.width * 0.48, canvas.height * 0.40);
        ctx.lineTo(canvas.width * 0.50, canvas.height * 0.60);
        // Left Arm (holding bat high)
        ctx.lineTo(canvas.width * 0.42, canvas.height * 0.48);
        ctx.lineTo(canvas.width * 0.38, canvas.height * 0.42);
        // Right Arm
        ctx.moveTo(canvas.width * 0.48, canvas.height * 0.40);
        ctx.lineTo(canvas.width * 0.52, canvas.height * 0.50);
        // Legs
        ctx.moveTo(canvas.width * 0.50, canvas.height * 0.60);
        ctx.lineTo(canvas.width * 0.44, canvas.height * 0.80); // Front leg
        ctx.moveTo(canvas.width * 0.50, canvas.height * 0.60);
        ctx.lineTo(canvas.width * 0.56, canvas.height * 0.82); // Back leg
        ctx.stroke();

        // Stumps exposed highlight box during movement
        if (t > 2 && t < 8) {
          ctx.strokeStyle = '#EF4444';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.strokeRect(canvas.width * 0.52, canvas.height * 0.55, 45, 80);
          ctx.setLineDash([]);

          ctx.fillStyle = '#EF4444';
          ctx.font = 'bold 12px Inter, sans-serif';
          ctx.fillText('STUMPS EXPOSED', canvas.width * 0.52, canvas.height * 0.53);
        }

        // Bat Vector Arrow
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(canvas.width * 0.38, canvas.height * 0.42);
        ctx.lineTo(canvas.width * 0.28, canvas.height * 0.32);
        ctx.stroke();

        // Angle indicator
        ctx.fillStyle = '#3B82F6';
        ctx.font = '11px Inter, sans-serif';
        ctx.fillText('Backlift Vector: 42° (Gully)', canvas.width * 0.18, canvas.height * 0.30);
      }

      animationFrame = requestAnimationFrame(renderLandmarks);
    };

    renderLandmarks();
    return () => cancelAnimationFrame(animationFrame);
  }, [currentTime, showOverlay, activeTab]);

  // playbackRate is not a React DOM prop, so sync it to the element directly.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed, currentVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const jumpToTimestamp = (sec: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = sec;
      setCurrentTime(sec);
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const playVoiceover = (lang: string) => {
    if (!('speechSynthesis' in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel(); // Stop ongoing speech

    const scriptText = lang === 'ur'
      ? currentVideo.analysis.scriptUr
      : currentVideo.analysis.scriptEn;

    const utterance = new SpeechSynthesisUtterance(scriptText);
    utterance.lang = lang === 'ur' ? 'hi-IN' : 'en-US'; // Use Urdu/Hindi voice for Urdu script
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setSpeechLang(lang);
  };

  const stopVoiceover = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      
      {}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('upload')}>
            <div className="bg-gradient-to-tr from-emerald-500 to-yellow-400 p-2 rounded-xl shadow-lg shadow-emerald-500/20">
              <Zap className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">
                CRICKET AI
              </span>
              <span className="text-xs text-emerald-400 block font-medium tracking-widest uppercase">Pro Technique Suite</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex space-x-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: 'upload', label: 'Upload & Video', icon: Upload },
              { id: 'live_analysis', label: 'AI Processing', icon: Cpu },
              { id: 'dashboard', label: 'Annotated Review', icon: Eye },
              { id: 'comparison', label: 'Side-by-Side', icon: Film },
              { id: 'drills', label: 'Drills & Voiceover', icon: Activity },
              { id: 'export', label: 'Export Studio', icon: Download },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 mr-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              AI Vision Engine Ready
            </span>
          </div>
        </div>
      </header>

      {}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* TAB 1: UPLOAD & DEMO SELECTOR */}
        {activeTab === 'upload' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-emerald-950/40 p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="max-w-2xl space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                  AI Computer Vision Power
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Transform Raw Cricket Videos Into Professional AI Coaching Analytics
                </h1>
                <p className="text-slate-400 text-sm sm:text-base">
                  Upload raw batting or bowling footage to detect stance vulnerabilities, backlift angle errors, footwork flaws, and automatically generate annotated slow-mo reviews with Urdu/English voiceover.
                </p>
              </div>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-slate-800 hover:border-emerald-500/60 transition-all rounded-3xl p-8 bg-slate-900/40 text-center space-y-4 relative group">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 group-hover:bg-emerald-500/20 transition-all flex items-center justify-center text-emerald-400">
                <Upload className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">Drag and Drop Raw Cricket Footage</h3>
                <p className="text-slate-400 text-xs">Supports MP4, MOV, or AVI (Max size 200MB)</p>
              </div>

              {isUploading ? (
                <div className="max-w-md mx-auto space-y-2 pt-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Uploading raw video...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <button className="px-5 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition text-sm inline-flex items-center space-x-2">
                  <Video className="w-4 h-4" />
                  <span>Select Video File</span>
                </button>
              )}
            </div>

            {/* Pre-loaded Sample Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-yellow-400" />
                  <span>Or Try Pre-Loaded Demo Footage</span>
                </h2>
                <span className="text-xs text-slate-400">Click sample to analyze instantly</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DEMO_SAMPLES.map((sample) => (
                  <div
                    key={sample.id}
                    onClick={() => {
                      setCurrentVideo(sample);
                      startPipelineProcessing();
                    }}
                    className={`group bg-slate-900 border rounded-2xl p-4 cursor-pointer transition-all hover:border-emerald-500/50 flex space-x-4 items-center ${
                      currentVideo.id === sample.id ? 'border-emerald-500 bg-slate-900/90' : 'border-slate-800'
                    }`}
                  >
                    <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                      <img src={sample.thumbnail} alt={sample.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                      <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white group-hover:scale-110 transition" />
                      </div>
                      <span className="absolute bottom-1 right-1 bg-slate-950/80 px-1.5 py-0.5 rounded text-[10px] text-slate-300">
                        {sample.duration}
                      </span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                        {sample.category}
                      </span>
                      <h4 className="font-bold text-white text-sm group-hover:text-emerald-400 transition">
                        {sample.title}
                      </h4>
                      <p className="text-slate-400 text-xs line-clamp-2">
                        {sample.analysis.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: LIVE AI PROCESSING PIPELINE */}
        {activeTab === 'live_analysis' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Automated Technique Breakdown
              </span>
              <h2 className="text-2xl font-extrabold text-white">AI Analysis Engine Pipeline</h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Processing uploaded video frames with pose landmarks, bat angle vectors, and weakness detection algorithms.
              </p>
            </div>

            {/* Pipeline Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: 1, title: 'Pose Estimation & Skeletal Tracking', desc: 'Detecting 33 body joints & key frame coordinates.' },
                { step: 2, title: 'Stance & Backlift Vector Calculation', desc: 'Measuring angle degrees (Gully vs Off-side backlift).' },
                { step: 3, title: 'Stumps Exposure & Footwork Check', desc: 'Identifying early foot drift to the leg side.' },
                { step: 4, title: 'Voiceover Synthesis & Slow-Mo Render', desc: 'Building Urdu/English coaching transcript.' }
              ].map((s, idx) => {
                const isDone = processingStep > idx;
                const isCurrent = processingStep === idx && isProcessing;
                return (
                  <div
                    key={s.step}
                    className={`p-4 rounded-2xl border transition-all ${
                      isDone
                        ? 'bg-slate-900 border-emerald-500/50 text-white'
                        : isCurrent
                        ? 'bg-slate-900 border-yellow-400 shadow-lg shadow-yellow-500/10 animate-pulse'
                        : 'bg-slate-900/40 border-slate-800/60 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-800 text-emerald-400">
                        Step 0{s.step}
                      </span>
                      {isDone && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                      {isCurrent && <RefreshCw className="w-5 h-5 text-yellow-400 animate-spin" />}
                    </div>
                    <h4 className="font-bold text-sm text-slate-100">{s.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Simulated Live Frame Viewer */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Real-time Extraction Frame</span>
                </span>
                <span className="text-xs text-emerald-400 font-mono">FRAME #0142 | 1080p 60FPS</span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800">
                <video
                  src={currentVideo.videoUrl}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs font-bold">
                      Pose Detected: 100%
                    </span>
                    <span className="bg-slate-900/90 text-yellow-400 px-3 py-1 rounded-lg text-xs font-bold border border-slate-700">
                      Backlift Angle: 42.8°
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>Analyzing stance posture...</span>
                      <span>{isProcessing ? 'Processing...' : 'Completed'}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 transition-all duration-300"
                        style={{ width: `${(processingStep / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  disabled={isProcessing}
                  className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 transition ${
                    isProcessing
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
                  }`}
                >
                  <span>Open Annotated Player</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ANNOTATED PLAYER & WEAKNESS DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column: Interactive Video Player */}
            <div className="lg:col-span-2 space-y-4">
              
              {/* Main Video Box */}
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-4 space-y-3 relative">
                <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/80">
                  
                  {/* Raw Video Element */}
                  <video
                    ref={videoRef}
                    src={currentVideo.videoUrl}
                    onTimeUpdate={handleTimeUpdate}
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />

                  {/* Pose Landmark Canvas Overlay */}
                  <canvas
                    ref={canvasRef}
                    width={640}
                    height={360}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  />

                  {/* Branding Watermark */}
                  <div className="absolute top-3 left-3 bg-slate-950/70 border border-slate-800 px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-300 backdrop-blur-sm">
                    {brandTitle}
                  </div>

                  {/* Speed Indicator Badge */}
                  {playbackSpeed !== 1 && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-slate-950 font-extrabold px-2 py-0.5 rounded text-xs">
                      {playbackSpeed}x SLOW-MO
                    </div>
                  )}
                </div>

                {/* Video Controls Bar */}
                <div className="space-y-2 pt-1">
                  {/* Progress Bar */}
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (videoRef.current) videoRef.current.currentTime = val;
                      setCurrentTime(val);
                    }}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition font-bold"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>

                      <button
                        onClick={() => {
                          if (videoRef.current) videoRef.current.currentTime = 0;
                        }}
                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <span className="font-mono text-slate-300">
                        {Math.floor(currentTime)}s / {Math.floor(duration)}s
                      </span>
                    </div>

                    {/* Controls Right */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setShowOverlay(!showOverlay)}
                        className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg border text-xs font-semibold ${
                          showOverlay
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        {showOverlay ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        <span>AI Overlay</span>
                      </button>

                      {/* Speed selector */}
                      <select
                        value={playbackSpeed}
                        onChange={(e) => {
                          const speed = Number(e.target.value);
                          setPlaybackSpeed(speed);
                          if (videoRef.current) videoRef.current.playbackRate = speed;
                        }}
                        className="bg-slate-800 text-slate-200 border border-slate-700 text-xs rounded-lg px-2 py-1 outline-none"
                      >
                        <option value={1}>1.0x Normal</option>
                        <option value={0.5}>0.5x Slow-Mo</option>
                        <option value={0.25}>0.25x Super Slow</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timestamped Weakness Jump Markers */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-yellow-400" />
                  <span>Key Analysis Timeline Snapshots</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentVideo.analysis.weaknesses.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => jumpToTimestamp(item.timeInSec)}
                      className="p-3 bg-slate-950/60 hover:bg-slate-800 border border-slate-800 rounded-xl text-left space-y-1 group transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded">
                          {item.timestamp}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            item.severity === 'Critical'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {item.severity}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition truncate">
                        {item.title}
                      </h5>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Player Technique Score Card */}
            <div className="space-y-4">
              
              {/* Score Header */}
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Technique Score</span>
                    <h3 className="text-lg font-bold text-white">{currentVideo.analysis.batterName}</h3>
                  </div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-yellow-500/20 border border-emerald-500/40 text-emerald-400 font-extrabold text-2xl">
                    {currentVideo.analysis.overallScore}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                  {currentVideo.analysis.summary}
                </p>
              </div>

              {/* Weaknesses List */}
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span>Detected Technique Flaws ({currentVideo.analysis.weaknesses.length})</span>
                </h4>

                <div className="space-y-3">
                  {currentVideo.analysis.weaknesses.map((w, index) => (
                    <div key={w.id} className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                          <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center text-[10px]">
                            {index + 1}
                          </span>
                          <span>{w.title}</span>
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                          {w.severity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{w.description}</p>
                      <div className="text-[11px] bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-lg text-emerald-300">
                        <strong className="text-emerald-400">Fix:</strong> {w.fix}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 4: SIDE-BY-SIDE VIDEO COMPARISON */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Film className="w-5 h-5 text-emerald-400" />
                  <span>Synchronized Side-by-Side Comparison</span>
                </h2>
                <p className="text-xs text-slate-400">Compare original raw footage directly with AI computer vision landmarks.</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (rawVideoRef.current && compVideoRef.current) {
                      rawVideoRef.current.currentTime = 0;
                      compVideoRef.current.currentTime = 0;
                      rawVideoRef.current.play();
                      compVideoRef.current.play();
                    }
                  }}
                  className="px-4 py-2 bg-emerald-500 text-slate-950 rounded-xl text-xs font-bold flex items-center space-x-1 hover:bg-emerald-400 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Sync Play both</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: Raw Original */}
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center space-x-1">
                    <Video className="w-4 h-4 text-slate-400" />
                    <span>Raw Input Footage</span>
                  </span>
                  <span className="text-slate-500">Unprocessed</span>
                </div>
                <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
                  <video
                    ref={rawVideoRef}
                    src={currentVideo.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Box 2: AI Pose Overlay */}
              <div className="bg-slate-900 rounded-3xl border border-emerald-500/40 p-4 space-y-2 relative">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                  <span className="flex items-center space-x-1">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>AI Annotated Overlay</span>
                  </span>
                  <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-[10px]">Landmarks Active</span>
                </div>
                <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative">
                  <video
                    ref={compVideoRef}
                    src={currentVideo.videoUrl}
                    controls
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Overlay graphics */}
                  <div className="absolute top-2 right-2 bg-slate-900/90 border border-slate-700 px-2 py-1 rounded text-[10px] text-yellow-400 font-mono">
                    Vector Angle: 42° Gully
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: DRILLS & AI VOICEOVER TRANSCRIPT */}
        {activeTab === 'drills' && (
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Audio Voiceover Section */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 rounded-3xl border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    AI Coaching Voiceover Generator
                  </span>
                  <h3 className="text-xl font-bold text-white">Synthesized Audio Coaching Notes</h3>
                </div>
                {isSpeaking && (
                  <span className="flex items-center space-x-2 text-xs text-yellow-400 animate-pulse">
                    <Volume2 className="w-4 h-4" />
                    <span>Speaking Voiceover...</span>
                  </span>
                )}
              </div>

              {/* Language Selector & Play buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => playVoiceover('en')}
                  className="px-4 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center space-x-2 hover:bg-emerald-400 transition"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Play English Voiceover</span>
                </button>

                <button
                  onClick={() => playVoiceover('ur')}
                  className="px-4 py-2.5 bg-yellow-400 text-slate-950 font-bold rounded-xl text-xs flex items-center space-x-2 hover:bg-yellow-300 transition"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Play Urdu Voiceover (اردو/हिंदी)</span>
                </button>

                {isSpeaking && (
                  <button
                    onClick={stopVoiceover}
                    className="px-4 py-2.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-xs font-bold hover:bg-red-500/30 transition"
                  >
                    Stop Audio
                  </button>
                )}
              </div>

              {/* Transcript Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">English Transcript</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{currentVideo.analysis.scriptEn}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-yellow-400 uppercase">Urdu / Hindi Transcript</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{currentVideo.analysis.scriptUr}</p>
                </div>
              </div>
            </div>

            {/* Drills Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Custom Remedial Drills Recommended by AI</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentVideo.analysis.drills.map((drill, idx) => (
                  <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-2 hover:border-emerald-500/40 transition">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-emerald-400">Drill #{idx + 1}</span>
                      <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md">
                        {drill.count}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-100 text-sm">{drill.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{drill.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 6: EXPORT STUDIO & REPORT GENERATOR */}
        {activeTab === 'export' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Final Render Studio
              </span>
              <h2 className="text-2xl font-extrabold text-white">Export Polished Coaching Video</h2>
              <p className="text-slate-400 text-xs sm:text-sm">Customize watermarks, themes, and download full PDF coaching reports.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Settings Panel */}
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-5 space-y-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Branding & Overlays</h4>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-semibold">Academy / Watermark Title</label>
                  <input
                    type="text"
                    value={brandTitle}
                    onChange={(e) => setBrandTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-semibold">Watermark Position</label>
                  <select
                    value={watermarkPos}
                    onChange={(e) => setWatermarkPos(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="top-left">Top Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => alert("Render process initiated! Exporting MP4 video file with embedded overlays.")}
                    className="w-full py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-2 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20"
                  >
                    <Download className="w-4 h-4" />
                    <span>Render & Download MP4</span>
                  </button>
                </div>
              </div>

              {/* Live Render Preview */}
              <div className="md:col-span-2 bg-slate-900 rounded-3xl border border-slate-800 p-5 space-y-4">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span className="font-bold text-slate-200">Export Preview Video</span>
                  <span className="font-mono">1080p Full HD</span>
                </div>

                <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 relative flex items-center justify-center">
                  <img
                    src={currentVideo.thumbnail}
                    alt="Export preview"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-800 px-3 py-1 rounded-lg text-xs font-bold text-white">
                    {brandTitle}
                  </div>

                  <div className="absolute bottom-4 left-4 space-y-1">
                    <span className="text-[10px] bg-emerald-500 text-slate-950 font-extrabold px-2 py-0.5 rounded">
                      CRICKET AI REVIEW
                    </span>
                    <h4 className="text-sm font-bold text-white">{currentVideo.title}</h4>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    onClick={() => alert("Summary report generated in text format!")}
                    className="px-4 py-2 bg-slate-800 text-slate-200 rounded-xl text-xs font-bold hover:bg-slate-700 transition flex items-center space-x-1"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Summary PDF</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>

      {}
      <footer className="border-t border-slate-800 bg-slate-900/60 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          Cricket AI Technique & Analysis Suite • Powered by Computer Vision & Speech Synthesis
        </div>
      </footer>

    </div>
  );
}