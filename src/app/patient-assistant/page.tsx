"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ShieldAlert,
  FileSpreadsheet,
  Sparkles,
  Info,
  HeartPulse,
} from "lucide-react";

interface QuestionStep {
  id: string;
  category: string;
  question: string;
  placeholder: string;
  hint: string;
  defaultValue: string;
}

const QUESTION_STEPS: QuestionStep[] = [
  {
    id: "main_concern",
    category: "Main Concern",
    question: "What is your main health concern or reason for consulting today?",
    placeholder: "e.g., Recurring joint stiffness in knees in the morning, digestives issues after meals...",
    hint: "Describe the primary symptom or health issue you would like your Ayurvedic doctor to evaluate.",
    defaultValue: "Chronic morning knee joint stiffness and mild lower back discomfort for the past 6 months.",
  },
  {
    id: "symptoms",
    category: "Symptoms",
    question: "What specific symptoms are you experiencing?",
    placeholder: "e.g., Swelling, warmth in joints, digestive bloating, fatigue...",
    hint: "Mention any associated physical signs, digestive changes, or sleep disruptions.",
    defaultValue: "Morning joint stiffness lasting 30 minutes, mild swelling after walking, and occasional evening fatigue.",
  },
  {
    id: "duration",
    category: "Duration",
    question: "How long have you had these symptoms?",
    placeholder: "e.g., 3 weeks, 6 months, intermittent for 1 year...",
    hint: "Specify when you first noticed the issue and if it has gradually worsened or changed.",
    defaultValue: "Initial onset 6 months ago, gradually increased over the past 2 months during winter season.",
  },
  {
    id: "current_medicines",
    category: "Current Medicines",
    question: "What medicines or supplements are you currently taking?",
    placeholder: "e.g., Allopathic pain relievers, Ashwagandha churna, multivitamin...",
    hint: "Include both modern (allopathic) prescriptions and Ayurvedic or herbal supplements.",
    defaultValue: "Chyawanprash 1 tsp daily, Calcium supplement, and occasional Paracetamol for severe joint pain.",
  },
  {
    id: "dosage",
    category: "Dosage",
    question: "What is the dosage and frequency of your current medicines?",
    placeholder: "e.g., 500mg once daily, 1 teaspoon twice after meals...",
    hint: "State how much and how often you take each item listed above.",
    defaultValue: "Chyawanprash: 1 tsp in morning with milk; Paracetamol: 500mg as needed (approx twice a week).",
  },
  {
    id: "allergies",
    category: "Allergies",
    question: "Do you have any known food, herb, or drug allergies?",
    placeholder: "e.g., Peanut allergy, reaction to dairy, allergy to sulfa drugs...",
    hint: "List any adverse reactions to specific plants, foods, metals, or pharmaceuticals.",
    defaultValue: "Mild digestive sensitivity to heavy dairy products; no known pharmaceutical allergies.",
  },
  {
    id: "history",
    category: "Relevant History",
    question: "Are there any relevant medical conditions or past surgeries in your medical history?",
    placeholder: "e.g., High blood pressure, diabetes, thyroid disorder, past knee arthroscopy...",
    hint: "Provide context on existing conditions that your doctor should consider.",
    defaultValue: "Borderline elevated blood pressure (controlled with diet); no prior surgeries.",
  },
];

export default function PatientAssistantPage() {
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    QUESTION_STEPS.forEach((q) => {
      initial[q.id] = q.defaultValue;
    });
    return initial;
  });

  const currentStep = QUESTION_STEPS[currentStepIndex];
  const progressPercentage = Math.round(
    ((currentStepIndex + 1) / QUESTION_STEPS.length) * 100
  );

  const handleNext = () => {
    if (currentStepIndex < QUESTION_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      router.push("/doctor-report");
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleAnswerChange = (val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStep.id]: val,
    }));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Bar */}
      <div className="text-center space-y-2 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold border border-blue-200">
          <HeartPulse className="w-3.5 h-3.5 text-blue-700" />
          <span>Patient Consultation Assistant</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Guided Clinical Intake
        </h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          Answer a few questions and the system will organize your responses into a structured consultation summary for your healthcare professional.
        </p>
      </div>

      {/* Progress Bar & Steps Tracker */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Step {currentStepIndex + 1} of {QUESTION_STEPS.length}: {currentStep.category}</span>
          </span>
          <span className="text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
            {progressPercentage}% Complete
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-blue-800 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Category Chips Tracker */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {QUESTION_STEPS.map((step, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStepIndex(idx)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 border ${
                  isCurrent
                    ? "bg-blue-800 text-white border-blue-800 shadow-2xs"
                    : isDone
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                <span>{step.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Question Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            Question Category: {currentStep.category}
          </span>
          <h2 className="text-xl font-bold text-slate-900 pt-1">
            {currentStep.question}
          </h2>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>{currentStep.hint}</span>
          </p>
        </div>

        {/* Text Input Area */}
        <div className="space-y-2">
          <textarea
            rows={5}
            value={answers[currentStep.id] || ""}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder={currentStep.placeholder}
            className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-sm text-slate-800 placeholder:text-slate-400 bg-slate-50/50 leading-relaxed font-medium"
          />
        </div>

        {/* Stepper Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
              currentStepIndex === 0
                ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-3">
            <Link
              href="/doctor-report"
              className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline hidden sm:inline"
            >
              Skip to Doctor Report
            </Link>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white text-sm font-semibold shadow-xs transition-all"
            >
              <span>
                {currentStepIndex === QUESTION_STEPS.length - 1
                  ? "Generate Summary"
                  : "Next Question"}
              </span>
              {currentStepIndex === QUESTION_STEPS.length - 1 ? (
                <FileSpreadsheet className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Non-Diagnostic Disclaimer Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xs text-amber-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>Non-Diagnostic Clinical Assistance Notice</span>
        </div>
        <p className="text-[11px] text-amber-900/90 leading-relaxed">
          This patient intake tool does NOT perform medical decision-making, diagnosis, or treatment prescription. Responses are organized solely into a structured preview to assist your consultation with a registered Ayurvedic or medical practitioner.
        </p>
      </div>
    </div>
  );
}
