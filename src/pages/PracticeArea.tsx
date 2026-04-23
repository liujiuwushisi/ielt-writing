import { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  BookOpen, 
  ChevronRight,
  ChevronLeft,
  Eye,
  EyeOff,
  PenTool,
  CheckCircle2,
  Trophy,
  ListRestart,
  Notebook as NotebookIcon,
  X,
  RotateCcw
} from "lucide-react";
import { TASK1_CATEGORIES, TASK2_THEMES } from "../data/themes";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PracticeItem {
  type: 'expression' | 'claim' | 'support' | 'example';
  content: string;
  translation: string;
  label: string;
  focus?: string[];
}

/**
 * Simple word-level diffing logic
 */
function diffSentences(reference: string, input: string) {
  const refWords = reference.trim().split(/\s+/);
  const inputWords = input.trim().split(/\s+/);
  
  // This is a simple visual diff, not a full LCS algorithm
  // For better results in production, a library like 'diff' would be used
  return refWords.map((word, i) => {
    const inputWord = inputWords[i] || "";
    // Clean words for comparison (remove punctuation, lower case)
    const cleanRef = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
    const cleanInput = inputWord.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
    
    return {
      original: word,
      input: inputWord,
      isCorrect: cleanRef === cleanInput,
      isMissing: !inputWord && inputWords.length <= i,
    };
  });
}

export default function PracticeArea() {
  const { type, themeId } = useParams();
  
  // Interaction States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModel, setShowModel] = useState(true);
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  const [showNotebook, setShowNotebook] = useState(false);

  const themes = type === 'task1' ? TASK1_CATEGORIES : TASK2_THEMES;
  const theme = themes.find(t => t.id === themeId);

  if (!theme) return <div className="p-12 text-center font-bold text-red-500 text-6xl italic">THEME_MISSING</div>;

  // Flatten all practice items: Expressions Examples + Argument Model Sentences
  const practiceItems: PracticeItem[] = useMemo(() => [
    // Expression target sentences
    ...theme.expressions.map(exp => ({
      type: 'expression' as const,
      content: exp.example,
      translation: exp.meaning,
      label: `Lexical Use: ${exp.phrase}`,
      focus: [exp.phrase]
    })),
    // Argument model sentences
    ...(theme.arguments || []).flatMap(arg => ([
      {
        type: 'claim' as const,
        content: arg.models.claim,
        translation: arg.claimZh,
        label: "Thesis / Claim",
        focus: arg.targetVocab
      },
      {
        type: 'support' as const,
        content: arg.models.support,
        translation: "Logical Reasoning / Support",
        label: "Logic & Development",
        focus: arg.targetVocab
      },
      {
        type: 'example' as const,
        content: arg.models.example,
        translation: "Evidence / Example",
        label: "Empirical Support",
        focus: arg.targetVocab
      }
    ]))
  ], [theme]);

  const currentItem = practiceItems[currentIndex];

  const handleNext = () => {
    if (currentIndex < practiceItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetState();
    }
  };

  const resetState = () => {
    setInput("");
    setShowModel(true);
    setIsChecked(false);
  };

  const markComplete = () => {
    if (!completedItems.includes(currentIndex)) {
      setCompletedItems([...completedItems, currentIndex]);
    }
    handleNext();
  };

  const diffResult = useMemo(() => {
    if (!isChecked) return [];
    return diffSentences(currentItem.content, input);
  }, [isChecked, currentItem.content, input]);

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A1A1A] flex flex-col font-sans">
      {/* Header */}
      <header className="h-24 border-b border-[#1A1A1A] px-12 flex items-center justify-between bg-[#F4F1EA] sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <Link to={`/${type}`} className="group">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
          </Link>
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none">{theme.title}</h1>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mt-1 opacity-40">{theme.titleZh} / INTENSIVE RECALL FLOW</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
           <button 
             onClick={() => setShowNotebook(true)}
             className="flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] text-[#F4F1EA] font-black text-[10px] uppercase tracking-widest hover:bg-transparent hover:text-[#1A1A1A] border-2 border-[#1A1A1A] transition-all"
           >
             <NotebookIcon className="w-4 h-4" /> Notebook Archive
           </button>
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">Global Progress</span>
              <div className="flex gap-1 mt-1">
                {practiceItems.map((_, idx) => (
                  <div key={idx} className={cn(
                    "w-1.5 h-1.5 border border-[#1A1A1A]/20 transition-all cursor-pointer",
                    currentIndex === idx ? "bg-[#FF5F1F] scale-125 shadow-lg" : 
                    completedItems.includes(idx) ? "bg-[#1A1A1A]" : "bg-transparent"
                  )} onClick={() => { setCurrentIndex(idx); resetState(); }} />
                ))}
              </div>
           </div>
           <div className="text-3xl font-black italic tracking-tighter w-24 text-right">
              {currentIndex + 1} <span className="opacity-20">/</span> {practiceItems.length}
           </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left: Model & Translation */}
        <div className="w-1/2 p-20 border-r border-[#1A1A1A]/10 overflow-y-auto space-y-12">
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-[#1A1A1A] text-[#F4F1EA] px-3 py-1 italic">
                  {currentItem.label}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 flex items-center gap-2">
                  <BookOpen className="w-3 h-3" /> Input Source
                </span>
             </div>
             
             <div className="space-y-8">
                <AnimatePresence mode="wait">
                  {showModel ? (
                    <motion.div
                      key="visible"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-8"
                    >
                      <p className="text-5xl font-serif italic leading-tight text-[#1A1A1A]">
                        "{currentItem.content}"
                      </p>
                      <div className="h-px bg-[#1A1A1A]/10 w-24" />
                      <p className="text-xl font-medium text-[#1A1A1A]/60 leading-relaxed border-l-4 border-[#FF5F1F] pl-6 italic">
                        {currentItem.translation}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-[300px] flex flex-col items-center justify-center border-4 border-dashed border-[#1A1A1A]/10 bg-white/30 rounded-3xl"
                    >
                      <EyeOff className="w-12 h-12 mb-4 opacity-10" />
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Observation Disabled</p>
                      <p className="text-sm font-serif italic mt-4 opacity-80 decoration-[#FF5F1F] underline underline-offset-8">
                        {currentItem.translation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>

          {currentItem.focus && (
            <div className="space-y-4 pt-12">
               <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40">Lexical Core</h4>
               <div className="flex flex-wrap gap-2">
                 {currentItem.focus.map(f => (
                   <span key={f} className="text-sm font-serif italic font-bold border-b-2 border-[#FF5F1F] pb-1">{f}</span>
                 ))}
               </div>
            </div>
          )}
        </div>

        {/* Right: Dictation Area */}
        <div className="w-1/2 p-20 bg-white flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
               <PenTool className="w-4 h-4 text-[#FF5F1F]" /> Active Recall Dictation
            </span>
            <div className="flex gap-4">
              <button 
                onClick={() => { setInput(""); setIsChecked(false); }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Clear Attempt"
              >
                <RotateCcw className="w-4 h-4 opacity-40" />
              </button>
              <button 
                onClick={() => setShowModel(!showModel)}
                className="flex items-center gap-2 px-6 py-2 border border-[#1A1A1A] text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all"
              >
                {showModel ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                {showModel ? "Go Blind" : "Review Original"}
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={showModel || isChecked}
              placeholder={showModel ? "Hide the material on the left to activate writing..." : "Type from memory..."}
              className="w-full h-full p-12 bg-transparent text-4xl font-serif italic leading-relaxed focus:outline-none resize-none disabled:opacity-30 placeholder:opacity-10"
            />
            
            <AnimatePresence>
              {isChecked && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 p-12 bg-[#F4F1EA]/98 overflow-y-auto"
                >
                    <div className="space-y-12">
                      <div>
                        <span className="text-[10px] font-black uppercase text-[#FF5F1F] mb-4 block tracking-widest">Comparative Analysis</span>
                        <div className="text-3xl font-serif italic leading-relaxed flex flex-wrap gap-x-3 gap-y-4">
                          {diffResult.map((word, idx) => (
                            <span key={idx} className="relative group">
                              {word.isCorrect ? (
                                <span className="text-[#1A1A1A]">{word.original}</span>
                              ) : (
                                <span className="flex flex-col">
                                  <span className="text-red-500 line-through decoration-2 opacity-60">{word.input || "___"}</span>
                                  <span className="text-[#1A1A1A] border-b-2 border-green-500 font-bold">{word.original}</span>
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-8 border-t border-[#1A1A1A]/10">
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase opacity-40 tracking-widest">
                           <CheckCircle2 className="w-4 h-4 text-green-500" /> Accuracy Status: {diffResult.filter(w => w.isCorrect).length}/{diffResult.length} Words matched
                        </div>
                      </div>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 flex gap-4">
             {!isChecked ? (
               <button 
                 onClick={() => setIsChecked(true)}
                 disabled={showModel || !input}
                 className="flex-1 bg-[#1A1A1A] text-[#F4F1EA] py-6 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-transparent hover:text-[#1A1A1A] border-2 border-[#1A1A1A] transition-all disabled:opacity-20"
               >
                 Run Comparison Audit
               </button>
             ) : (
               <div className="flex-1 flex gap-4">
                  <button 
                    onClick={() => setIsChecked(false)}
                    className="flex-1 border-2 border-[#1A1A1A] py-6 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all flex items-center justify-center gap-3"
                  >
                    <ListRestart className="w-4 h-4" /> Reset & Retry
                  </button>
                  <button 
                    onClick={markComplete}
                    className="flex-1 bg-[#FF5F1F] text-white py-6 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-[#FF5F1F]/90 transition-all flex items-center justify-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Next Expression
                  </button>
               </div>
             )}
          </div>

          <div className="mt-8 flex justify-between">
             <button onClick={handlePrev} disabled={currentIndex === 0} className="p-4 disabled:opacity-10 group">
                <ChevronLeft className="w-12 h-12 group-hover:-translate-x-2 transition-transform" />
             </button>
             <button onClick={handleNext} disabled={currentIndex === practiceItems.length - 1} className="p-4 disabled:opacity-10 group">
                <ChevronRight className="w-12 h-12 group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>
      </main>

      {/* Notebook Sidebar/Overlay */}
      <AnimatePresence>
        {showNotebook && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-2/3 bg-[#F4F1EA] shadow-2xl z-[100] flex flex-col border-l border-[#1A1A1A]/10"
          >
            <div className="h-24 border-b border-[#1A1A1A] px-12 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-4">
                  <NotebookIcon className="w-6 h-6" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Theme Notebook: {theme.title}</h2>
               </div>
               <button onClick={() => setShowNotebook(false)} className="p-2 hover:bg-gray-200 rounded-full transition-all">
                  <X className="w-8 h-8" />
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-12">
               <div className="max-w-3xl mx-auto space-y-1">
                  {practiceItems.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "group py-6 px-4 border-b border-[#1A1A1A]/5 transition-colors cursor-pointer hover:bg-white/50",
                        completedItems.includes(idx) && "opacity-60"
                      )}
                      onClick={() => {
                        setCurrentIndex(idx);
                        resetState();
                        setShowNotebook(false);
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <span className="text-[10px] font-mono opacity-30 mt-1.5 w-6 shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 bg-[#1A1A1A]/5 text-[#1A1A1A]/40 rounded-sm">
                              {item.label}
                            </span>
                            {completedItems.includes(idx) && <CheckCircle2 className="w-3 h-3 text-green-600" />}
                          </div>
                          <p className="text-xl font-serif text-[#1A1A1A] leading-snug">
                            {item.content}
                          </p>
                          <p className="text-sm text-[#1A1A1A]/40">
                            {item.translation}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-12 bg-white border-t border-[#1A1A1A]/10 flex justify-between items-center">
               <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 italic">Session Progress: {completedItems.length} of {practiceItems.length} Mastered</div>
               <button 
                 onClick={() => setShowNotebook(false)}
                 className="bg-[#1A1A1A] text-[#F4F1EA] px-12 py-4 font-black text-[10px] uppercase tracking-widest"
               >
                 Back to Active Flow
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
