import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Clock, Award, ArrowRight, RotateCcw } from 'lucide-react';
import { mockQuestions } from '../data/mockData';
import { MockQuestion, ExamCategory } from '../types';
import { useTheme } from '../context/ThemeContext';

interface MockTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: ExamCategory | null;
}

export const MockTestModal: React.FC<MockTestModalProps> = ({
  isOpen,
  onClose,
  category
}) => {
  const { isDarkMode } = useTheme();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  // Filter questions for the selected category or fallback to all questions
  const categoryQuestions = category
    ? mockQuestions.filter((q) => q.category === category.id)
    : [];
  const questions: MockQuestion[] = categoryQuestions.length > 0 ? categoryQuestions : mockQuestions;
  const currentQ = questions[currentIdx] || questions[0];

  useEffect(() => {
    if (!isOpen) {
      setCurrentIdx(0);
      setSelectedOption(null);
      setIsSubmitted(false);
      setScore(0);
      setTimeLeft(60);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      // Completed
      setIsSubmitted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setTimeLeft(60);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`rounded-2xl w-full max-w-xl p-6 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto border transition-colors ${
        isDarkMode
          ? 'bg-[#04162e] border-[#174871] text-slate-100'
          : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* Header */}
        <div className={`flex items-center justify-between pb-4 border-b mb-5 ${
          isDarkMode ? 'border-[#123156]' : 'border-slate-100'
        }`}>
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-600 dark:text-cyan-300 flex items-center justify-center font-bold text-sm">
              Q
            </span>
            <div>
              <h3 className={`text-lg font-bold font-bengali ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                লাইভ মক টেস্ট {category ? `(${category.title})` : ''}
              </h3>
              <p className={`text-xs font-bengali ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                প্রশ্ন {currentIdx + 1} / {questions.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
              isDarkMode 
                ? 'bg-[#08223d] text-amber-300 border-[#143761]' 
                : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
            </div>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg border transition-colors ${
                isDarkMode 
                  ? 'bg-[#081f3d] text-slate-400 hover:text-white border-[#143761]' 
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Content */}
        <div className="space-y-4 flex-1">
          <div className={`p-4 rounded-xl border ${
            isDarkMode ? 'bg-[#061e3d] border-[#153966]' : 'bg-sky-50/70 border-sky-100'
          }`}>
            <span className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${
              isDarkMode ? 'text-cyan-400' : 'text-sky-700'
            }`}>
              Category: {currentQ.category.toUpperCase()}
            </span>
            <p className={`text-base sm:text-lg font-semibold font-bengali leading-relaxed ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {currentQ.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = isSubmitted && idx === currentQ.correctIndex;
              const isWrong = isSubmitted && isSelected && idx !== currentQ.correctIndex;

              let optionClasses = isDarkMode 
                ? "bg-[#071d38] border-[#163c68] text-slate-200 hover:bg-[#0a274d]" 
                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100";

              if (isSelected && !isSubmitted) {
                optionClasses = isDarkMode 
                  ? "bg-[#0b3360] border-cyan-400 text-white ring-1 ring-cyan-400" 
                  : "bg-sky-50 border-sky-500 text-sky-900 ring-1 ring-sky-400 font-medium";
              } else if (isCorrect) {
                optionClasses = "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-200 ring-1 ring-emerald-500 font-medium";
              } else if (isWrong) {
                optionClasses = "bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-200 ring-1 ring-rose-500";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border font-bengali text-sm flex items-center justify-between transition-all cursor-pointer ${optionClasses}`}
                >
                  <span>{opt}</span>
                  {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />}
                  {isWrong && <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isSubmitted && (
            <div className={`p-4 rounded-xl border animate-in fade-in duration-200 ${
              isDarkMode ? 'bg-[#082244] border-[#1b4b7c]' : 'bg-emerald-50/80 border-emerald-200'
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 ${
                isDarkMode ? 'text-[#00d2ff]' : 'text-emerald-700'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                সঠিক ব্যাখ্যা
              </h4>
              <p className={`text-xs sm:text-sm font-bengali leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
          isDarkMode ? 'border-[#123156]' : 'border-slate-100'
        }`}>
          <div className={`text-xs font-bengali ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            স্কোর: <span className="text-sky-600 dark:text-cyan-300 font-bold font-mono text-sm">{score}</span> / {questions.length}
          </div>

          <div className="flex items-center gap-2">
            {!isSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#0284c7] hover:bg-[#0369a1] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bengali cursor-pointer"
              >
                উত্তর জমা দিন
              </button>
            ) : currentIdx < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white font-bengali flex items-center gap-1.5 cursor-pointer"
              >
                <span>পরবর্তী প্রশ্ন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleRestart}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bengali flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>পুনরায় পরীক্ষা দিন</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
