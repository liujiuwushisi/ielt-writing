import { motion } from "motion/react";
import { BookOpen, Map, MessageSquare, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] flex flex-col items-center justify-center p-6 space-y-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-4 max-w-2xl px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-[#F4F1EA] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          <Target className="w-3 h-3" />
          IELTS Band 7.0+
        </div>
        <h1 className="text-7xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-none uppercase text-center">
          WRITE<br/><span className="text-[#FF5F1F]">FLOW</span>
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-[#1A1A1A]/60">
          Master the art of academic expression.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10 w-full max-w-5xl border border-[#1A1A1A]/10">
        <Link to="/task1" className="bg-[#F4F1EA] p-12 transition-colors hover:bg-white group">
          <div className="flex flex-col h-full space-y-8">
            <div className="flex items-center justify-between">
              <Map className="w-10 h-10 text-[#1A1A1A]" />
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40">Task 01</div>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black uppercase tracking-tight text-[#1A1A1A]">Data Trends</h2>
              <p className="font-serif italic text-gray-500">Visual information analysis and descriptive trends.</p>
            </div>
            <div className="pt-8 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
              <span>Begin</span>
              <div className="h-[2px] flex-1 bg-[#1A1A1A] group-hover:bg-[#FF5F1F] transition-colors" />
            </div>
          </div>
        </Link>

        <Link to="/task2" className="bg-[#F4F1EA] p-12 transition-colors hover:bg-white group">
          <div className="flex flex-col h-full space-y-8">
            <div className="flex items-center justify-between">
              <MessageSquare className="w-10 h-10 text-[#1A1A1A]" />
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/40">Task 02</div>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black uppercase tracking-tight text-[#1A1A1A]">Arguments</h2>
              <p className="font-serif italic text-gray-500">Theme-based persuasion and academic discourse.</p>
            </div>
            <div className="pt-8 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">
              <span>Begin</span>
              <div className="h-[2px] flex-1 bg-[#1A1A1A] group-hover:bg-[#FF5F1F] transition-colors" />
            </div>
          </div>
        </Link>
      </div>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[#1A1A1A]/40 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-8"
      >
        <span className="flex items-center gap-2">LEXICON ACTIVE</span>
        <span className="w-1 h-1 rounded-full bg-[#FF5F1F]" />
        <span className="flex items-center gap-2">AI ENGINE READY</span>
      </motion.footer>
    </div>
  );
}
