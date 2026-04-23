import { motion } from "motion/react";
import { ArrowLeft, ChevronRight, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import { TASK2_THEMES, WritingTheme } from "../data/themes";

interface ThemeListProps {
  type: 'task1' | 'task2';
  themes: WritingTheme[];
  title: string;
}

export default function ThemeSelection({ type, themes, title }: ThemeListProps) {
  return (
    <div className="min-h-screen bg-[#F4F1EA] p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1A1A1A]/10 pb-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors group mb-4">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return Home</span>
            </Link>
            <h1 className="text-6xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
              {title}
            </h1>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/40">Section ID: {type?.toUpperCase()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
          {themes.map((theme, index) => (
            <Link key={theme.id} to={`/practice/${type}/${theme.id}`} className="bg-[#F4F1EA] hover:bg-white transition-all group p-12">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="space-y-6"
              >
                <div className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#FF5F1F]">
                  Theme {index + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-bold font-serif italic text-[#1A1A1A] group-hover:underline decoration-[#FF5F1F] decoration-4 underline-offset-8 transition-all">
                    {theme.title}
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 mt-1">{theme.titleZh}</p>
                </div>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed font-serif">
                  {theme.description}
                </p>
                <div className="flex items-center gap-2 pt-4 text-[#1A1A1A] text-xs font-bold uppercase tracking-widest">
                  Explore
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
