import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Zap, 
  Cpu, 
  Database, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight, 
  Server, 
  ShieldCheck, 
  RefreshCw, 
  Terminal, 
  Layers, 
  Globe2,
  GitBranch,
  Gauge
} from 'lucide-react';

export default function HeroCommandCenter() {
  const [activeTab, setActiveTab] = useState('ai'); // 'ai' | 'saas' | 'cloud'
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedTokens, setSimulatedTokens] = useState(1480);
  const [requestCount, setRequestCount] = useState(128490);

  // Simulated live counter tick
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateRun = () => {
    setIsSimulating(true);
    setSimulatedTokens(1200);
    const stepInterval = setInterval(() => {
      setSimulatedTokens(prev => {
        if (prev >= 1850) {
          clearInterval(stepInterval);
          setIsSimulating(false);
          return 1850;
        }
        return prev + 65;
      });
    }, 60);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Radiant ambient backdrop glows */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Top Badge: Production Status */}
      <div className="hidden sm:flex absolute -top-4 -right-2 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/5 text-[11px] font-mono text-slate-700 animate-bounce duration-1000">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-semibold text-slate-900">prod-v2.4.0</span>
        <span className="text-slate-400">|</span>
        <span className="text-emerald-700 font-medium">Live on Edge</span>
      </div>

      {/* Main Studio Command Center Container */}
      <div className="relative rounded-2xl bg-slate-950/95 text-slate-100 border border-slate-800 shadow-2xl shadow-slate-950/20 overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
          
          {/* macOS window dots + breadcrumb */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/90" />
              <div className="w-3 h-3 rounded-full bg-amber-500/90" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
            </div>
            <div className="h-3 w-px bg-slate-800 ml-1" />
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
              <Terminal className="w-3 h-3 text-sky-400" />
              <span className="text-slate-200 font-medium">anehit-studio</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 truncate">command-center</span>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800/80 text-xs font-mono">
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'ai'
                  ? 'bg-sky-500 text-white font-semibold shadow-sm shadow-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Engine</span>
            </button>
            <button
              onClick={() => setActiveTab('saas')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'saas'
                  ? 'bg-sky-500 text-white font-semibold shadow-sm shadow-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>SaaS Telemetry</span>
            </button>
            <button
              onClick={() => setActiveTab('cloud')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                activeTab === 'cloud'
                  ? 'bg-sky-500 text-white font-semibold shadow-sm shadow-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Cloud & Edge</span>
            </button>
          </div>
        </div>

        {/* Viewport Content */}
        <div className="p-4 sm:p-5">
          
          {/* TAB 1: AI ENGINE & ORCHESTRATION */}
          {activeTab === 'ai' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Telemetry Header Pill */}
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-100 flex items-center gap-1.5">
                      Multi-Model Orchestrator
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                        Online
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">Claude 3.7 Sonnet • DeepSeek R1 • OpenAI</div>
                  </div>
                </div>

                <button
                  onClick={handleSimulateRun}
                  disabled={isSimulating}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-mono text-[11px] transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-sky-400' : ''}`} />
                  <span>{isSimulating ? 'Processing...' : 'Run Pipeline'}</span>
                </button>
              </div>

              {/* Code / Prompt Execution Canvas */}
              <div className="bg-slate-900/90 rounded-xl border border-slate-800/90 p-3.5 font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="text-sky-400 font-medium">// Pipeline Task: Autonomous Schema & API Synthesis</span>
                  <span className="text-slate-500">Latency: 28ms</span>
                </div>

                <div className="space-y-1 text-slate-300 text-[11px] leading-relaxed">
                  <p className="text-slate-400">
                    <span className="text-indigo-400">const</span> pipeline = <span className="text-amber-400">new</span> <span className="text-sky-300">AgenticStudioEngine</span>({'{'}
                  </p>
                  <p className="pl-4 text-slate-300">
                    ragVectorIndex: <span className="text-emerald-300">"enterprise-docs-v4"</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    responseType: <span className="text-emerald-300">"verified-fullstack-deliverable"</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    streamingTokens: <span className="text-sky-300 font-bold">{simulatedTokens}</span> <span className="text-slate-500">(avg 84 t/s)</span>
                  </p>
                  <p className="text-slate-400">{'}'});</p>
                </div>

                {/* Status Indicator inside Code Box */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Type-Safe Validation Passed</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[10px]">Zero Hallucination Guardrails</span>
                </div>
              </div>

              {/* Key Metric Grid */}
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Speed</div>
                  <div className="text-sm font-bold text-sky-400 mt-0.5">84 tok/s</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Accuracy</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">99.4%</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Embed Latency</div>
                  <div className="text-sm font-bold text-indigo-400 mt-0.5">14ms</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SAAS TELEMETRY */}
          {activeTab === 'saas' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Traffic & Requests Header */}
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Total Handled Requests Today</div>
                  <div className="text-xl font-bold font-mono text-white mt-0.5 flex items-center gap-2">
                    <span>{requestCount.toLocaleString()}</span>
                    <span className="text-xs font-normal text-emerald-400 font-sans flex items-center">
                      +18.4% this week
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              {/* Live Latency & Bar Charts */}
              <div className="bg-slate-900/90 rounded-xl border border-slate-800/90 p-3.5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Endpoint Response Latency</span>
                  <span className="text-emerald-400 font-semibold">avg 34ms (P99: 68ms)</span>
                </div>

                {/* Visual Telemetry Bars */}
                <div className="h-16 flex items-end gap-1.5 pt-2 px-1">
                  {[42, 65, 38, 72, 85, 45, 90, 60, 75, 48, 88, 95, 62, 78, 55, 82].map((height, i) => (
                    <div
                      key={i}
                      style={{ height: `${height}%` }}
                      className={`flex-1 rounded-t transition-all duration-500 ${
                        i === 11 ? 'bg-sky-400 shadow-sm shadow-sky-400/50' : 'bg-slate-700/80 hover:bg-sky-500/60'
                      }`}
                      title={`Batch #${i + 1}: ${height}ms`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800/80">
                  <span>00:00 UTC</span>
                  <span>LIVE TRAFFIC EDGE INGRESS</span>
                  <span>NOW</span>
                </div>
              </div>

              {/* Stack Architecture Row */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Database className="w-4 h-4 text-sky-400 shrink-0" />
                  <div className="truncate">
                    <div className="text-slate-200 font-medium">PostgreSQL / Supabase</div>
                    <div className="text-[10px] text-emerald-400">Healthy • 1.2ms pool</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Server className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div className="truncate">
                    <div className="text-slate-200 font-medium">Redis In-Memory</div>
                    <div className="text-[10px] text-sky-400">96.8% Cache Hit Rate</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CLOUD & EDGE */}
          {activeTab === 'cloud' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              
              {/* Build Pipeline Status */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-mono">
                    <GitBranch className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-200 font-medium">main / commit 8f9b20e</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Deployed in 18s
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  CI/CD automated pipeline: Lint, TypeScript build, end-to-end tests, edge cache warm-up.
                </p>
              </div>

              {/* Lighthouse / Performance Score Matrix */}
              <div className="bg-slate-900/90 rounded-xl border border-slate-800/90 p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                    Google Lighthouse Audit Scores
                  </span>
                  <span className="text-emerald-400 font-bold">100 / 100</span>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-1">
                  {[
                    { label: 'Performance', score: '100' },
                    { label: 'Accessibility', score: '100' },
                    { label: 'Best Practices', score: '100' },
                    { label: 'SEO Score', score: '100' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-950 border border-emerald-500/30 text-center">
                      <div className="text-base font-extrabold text-emerald-400 font-mono">{item.score}</div>
                      <div className="text-[9px] text-slate-400 uppercase tracking-tighter truncate mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Distribution Status */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Globe2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Global Anycast CDN (300+ Edge Nodes)</span>
                </div>
                <span className="text-sky-400 font-medium">0.00% Downtime</span>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Status Bar */}
        <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800/90 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">AneHit Production Architecture</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="hidden sm:inline">React 19 + Vite</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-sky-400 font-medium">SSL Encrypted</span>
          </div>
        </div>

      </div>

      {/* Floating Bottom Left Badge: Lighthouse Verified */}
      <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10 text-xs text-slate-800">
        <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-mono font-bold text-xs">
          ✓
        </div>
        <div>
          <div className="font-semibold text-slate-900 leading-none">Production-Grade Quality</div>
          <div className="text-[10px] font-mono text-slate-500 mt-0.5">0.4s Core Web Vitals • Clean Code</div>
        </div>
      </div>

    </div>
  );
}
