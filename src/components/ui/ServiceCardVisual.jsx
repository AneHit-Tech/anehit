import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Server, 
  Database, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Radio, 
  Sparkles, 
  Bot, 
  Award, 
  Activity, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  CreditCard
} from 'lucide-react';

export default function ServiceCardVisual({ serviceNumber }) {
  // Animated typing effect for AI card
  const [typedText, setTypedText] = useState('');
  const aiPrompt = "Generating structured response via streaming chunk [Latency: 42ms]...";

  useEffect(() => {
    if (serviceNumber === '06') {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(aiPrompt.slice(0, index));
        index = (index + 1) % (aiPrompt.length + 8);
      }, 55);
      return () => clearInterval(interval);
    }
  }, [serviceNumber]);

  switch (serviceNumber) {
    // 01. Custom Software Development -> Live Node Architecture Pipeline
    case '01':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              PIPELINE ARCHITECTURE
            </span>
            <span className="text-slate-500">Zero Bottlenecks</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center py-2 relative">
            <div className="p-2 rounded-lg bg-slate-900 border border-sky-500/30 flex flex-col items-center justify-center">
              <Cpu className="w-4 h-4 text-sky-400 mb-1" />
              <span className="text-[10px] text-slate-300">Client UI</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-emerald-500/30 flex flex-col items-center justify-center">
              <Server className="w-4 h-4 text-emerald-400 mb-1" />
              <span className="text-[10px] text-slate-300">API Gateway</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-purple-500/30 flex flex-col items-center justify-center">
              <Zap className="w-4 h-4 text-purple-400 mb-1" />
              <span className="text-[10px] text-slate-300">Workers</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-amber-500/30 flex flex-col items-center justify-center">
              <Database className="w-4 h-4 text-amber-400 mb-1" />
              <span className="text-[10px] text-slate-300">Postgres</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Payload: JSON Schema Validated</span>
            <span className="text-emerald-400 font-semibold">100% Verified</span>
          </div>
        </div>
      );

    // 02. Web & Mobile App Development -> Dual Viewport Responsive Simulator
    case '02':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CROSS-PLATFORM ENGINE
            </span>
            <span className="text-slate-500">60 FPS Native Touch</span>
          </div>
          <div className="flex items-center justify-around py-1.5">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <Monitor className="w-5 h-5 text-sky-400" />
              <div className="text-left">
                <div className="text-[11px] font-bold text-white">Desktop 4K</div>
                <div className="text-[9px] text-slate-400">Sub-0.8s FCP</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <Smartphone className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <div className="text-[11px] font-bold text-white">Mobile PWA</div>
                <div className="text-[9px] text-slate-400">Offline Caching</div>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Viewport: Fluid Breakpoints</span>
            <span className="text-sky-400 font-semibold">Single Codebase</span>
          </div>
        </div>
      );

    // 03. E-commerce Website -> Live Checkout & Conversion Telemetry
    case '03':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              CHECKOUT FUNNEL SPEED
            </span>
            <span className="text-slate-500">Sub-40ms Cart Sync</span>
          </div>
          <div className="py-2 flex items-center justify-between gap-3">
            <div className="flex-1 bg-slate-900 p-2 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Cart Latency</div>
              <div className="text-sm font-bold text-emerald-400 font-mono">18ms</div>
            </div>
            <div className="flex-1 bg-slate-900 p-2 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Checkout Dropoff</div>
              <div className="text-sm font-bold text-sky-400 font-mono">&lt; 4.2%</div>
            </div>
            <div className="flex-1 bg-slate-900 p-2 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Core Web Vitals</div>
              <div className="text-sm font-bold text-amber-400 font-mono">99 / 100</div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>SKU Sync: Real-time DB Trigger</span>
            <span className="text-emerald-400 font-semibold">Optimized Funnel</span>
          </div>
        </div>
      );

    // 04. Payment Gateway Integration -> Cryptographic Tokenization Stream
    case '04':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-purple-400">
              <Lock className="w-3.5 h-3.5 text-purple-400" />
              PCI-COMPLIANT TOKENIZATION
            </span>
            <span className="text-emerald-400 font-bold">SHA-256</span>
          </div>
          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[11px] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Gateway Hook:</span>
              <span className="text-emerald-400 font-bold">Stripe 200 OK</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Tokenized Vault:</span>
              <span className="text-sky-300">tok_1Nq9x...94FA</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Scope: Zero Customer Card Storage</span>
            <span className="text-purple-400 font-semibold">Instant Webhooks</span>
          </div>
        </div>
      );

    // 05. Portfolio & Brand Sites -> Lighthouse 100 Speed Gauge
    case '05':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-sky-400">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              LIGHTHOUSE PERFORMANCE
            </span>
            <span className="text-emerald-400 font-bold">A+ Grade</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1 text-center">
            <div className="p-2 rounded-lg bg-slate-900 border border-emerald-500/40">
              <div className="text-base font-extrabold text-emerald-400">100</div>
              <div className="text-[9px] text-slate-400">Performance</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-emerald-500/40">
              <div className="text-base font-extrabold text-emerald-400">100</div>
              <div className="text-[9px] text-slate-400">Accessibility</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-emerald-500/40">
              <div className="text-base font-extrabold text-emerald-400">100</div>
              <div className="text-[9px] text-slate-400">Best Practices</div>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Largest Contentful Paint: 0.6s</span>
            <span className="text-sky-400 font-semibold">Zero CLS Shift</span>
          </div>
        </div>
      );

    // 06. AI-Powered Application Development -> Neural Token Streaming Simulator
    case '06':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-rose-400">
              <Bot className="w-3.5 h-3.5 text-rose-400" />
              REAL-TIME TOKEN STREAM
            </span>
            <span className="text-sky-400 font-bold">SSE Protocol</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] min-h-[50px] text-slate-300 leading-relaxed font-mono">
            {typedText}
            <span className="inline-block w-1.5 h-3.5 bg-rose-400 ml-1 animate-pulse" />
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Prompt Guardrails: Strict Schema</span>
            <span className="text-rose-400 font-semibold">Sub-45ms First Token</span>
          </div>
        </div>
      );

    // 07. Authentication & Security Systems -> JWT Token Rotation Guard
    case '07':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              SESSION ROTATION GUARD
            </span>
            <span className="text-emerald-400 font-bold">OAuth 2.0</span>
          </div>
          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[11px] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Role-Based Access:</span>
              <span className="text-cyan-300 font-bold">RBAC Enforced</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Attack Defense:</span>
              <span className="text-emerald-400">Zero CSRF / XSS Leak</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Refresh Token: Secure HTTP-Only Cookie</span>
            <span className="text-cyan-400 font-semibold">A+ Security Grade</span>
          </div>
        </div>
      );

    // 08. Real-Time & Multilingual Communication -> WebSocket Sync Pulse
    case '08':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-teal-400">
              <Radio className="w-3.5 h-3.5 text-teal-400" />
              WEBSOCKET SYNC MESH
            </span>
            <span className="text-emerald-400 font-bold">Live 12ms</span>
          </div>
          <div className="grid grid-cols-2 gap-2 py-1 text-center">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Bi-directional</div>
              <div className="text-xs font-bold text-teal-300">Live Broadcast</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Language Auto-Detect</div>
              <div className="text-xs font-bold text-sky-300">12+ Locales</div>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Heartbeat: Automatic Reconnect</span>
            <span className="text-teal-400 font-semibold">Zero Packet Drop</span>
          </div>
        </div>
      );

    // 09. LMS & Certification Platforms -> Progress Tracker & Certificate Hash
    case '09':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-400">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              STUDENT MASTERY ENGINE
            </span>
            <span className="text-emerald-400 font-bold">100% Passed</span>
          </div>
          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-300">Curriculum Completion</span>
              <span className="text-indigo-400 font-bold">12/12 Modules</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-full h-full bg-indigo-500 rounded-full" />
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Cert Hash: sha256_verify_ok</span>
            <span className="text-indigo-300 font-semibold">PDF Export Ready</span>
          </div>
        </div>
      );

    // 10. Admin Dashboards & Internal Tools -> Telemetry Sparkline & Metrics
    case '10':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-sky-400">
              <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
              LIVE TELEMETRY HUD
            </span>
            <span className="text-emerald-400 font-bold">+18.4% WoW</span>
          </div>
          <div className="grid grid-cols-2 gap-2 py-1">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Monthly Run Rate</div>
              <div className="text-sm font-bold text-white">$42,800</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Active Sessions</div>
              <div className="text-sm font-bold text-emerald-400">3,420 Live</div>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Role RBAC: Admin / Viewer / Editor</span>
            <span className="text-sky-400 font-semibold">Real-time DB Sync</span>
          </div>
        </div>
      );

    // 11. Post-Launch Maintenance & Retainers -> 24/7 SLA Beacon
    case '11':
      return (
        <div className="p-4 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 shadow-inner overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-800/80 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              24/7 INFRASTRUCTURE GUARANTEE
            </span>
            <span className="text-emerald-400 font-bold">99.99% Uptime</span>
          </div>
          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-slate-300 text-[11px]">Active Health Ping: 60s Interval</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold">Zero Incidents</span>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
            <span>Response Time SLA: Under 2 Hours</span>
            <span className="text-emerald-400 font-semibold">Priority Retainer</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
