import React from "react";
import {
  ShieldCheck,
  Scale,
  Pill,
  UserCheck,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-bold text-xl shadow-xs">
            <ShieldCheck className="w-7 h-7 text-emerald-100" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                IP-SAKTI Sahayak
              </h1>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                SIH Prototype
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              AI-Powered Ayurveda IP, Regulatory & Knowledge Assistant
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-medium pt-2">
          IP-SAKTI Sahayak is an innovation prototype designed for Smart India Hackathon (SIH). It serves as a source-grounded technological platform empowering Indian Ayurvedic researchers, innovators, manufacturers, and healthcare professionals to navigate complex intellectual property laws, traditional knowledge protection, regulatory compliance, and clinical patient consultation summaries.
        </p>

        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Primary Objective
            </span>
            <span className="text-xs font-bold text-slate-800 mt-0.5 block">
              Defensive & Offensive IP Safeguards
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Knowledge Source Grounding
            </span>
            <span className="text-xs font-bold text-emerald-800 mt-0.5 block">
              TKDL, Patents Act & AYUSH API
            </span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Clinical Support
            </span>
            <span className="text-xs font-bold text-slate-800 mt-0.5 block">
              Doctor-Patient Intake Summaries
            </span>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-700" />
          <span>Core System Architecture Pillars</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              1. IP & Regulatory Intelligence
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides source-cited guidance on Section 3(p) patentability bars, synergistic formulations, Access & Benefit Sharing (ABS) via NBA, and TKDL prior art retrieval.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <Pill className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              2. Medicine & Safety Checker
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enables verification of classical Ayurvedic formulations against the Ayurvedic Pharmacopoeia of India (API), highlighting dosage guidelines and herbo-mineral heavy metal cautions.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              3. Clinical Consultation Intake
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guides patients through structured health intake questions to prepare clear, organized consultation reports for physicians with flagged review alerts.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimers & Governance */}
      <section className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 space-y-3 text-amber-950">
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Prototype Governance & Disclaimer Notice</span>
        </div>
        <div className="space-y-2 text-xs text-amber-900/90 leading-relaxed">
          <p>
            <strong>Informational Purpose:</strong> Information provided by this system is for informational and consultation-support purposes only and is not a substitute for diagnosis, treatment, prescription, or professional medical advice.
          </p>
          <p>
            <strong>Legal Non-Binding Notice:</strong> This platform provides source-grounded guidance and does not constitute legal advice or formal patent application opinion. Consultation with registered patent agents or legal professionals is required.
          </p>
        </div>
      </section>

      {/* SIH Footer Note */}
      <div className="text-center text-xs text-slate-400 font-medium pt-2">
        IP-SAKTI Sahayak • Smart India Hackathon Prototype • Version 1.0 Foundation
      </div>
    </div>
  );
}
