import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Pill,
  UserCheck,
  ArrowRight,
  Search,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white p-8 sm:p-12 shadow-lg border border-emerald-700/30">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/40 text-emerald-200 text-xs font-semibold border border-emerald-500/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI-Powered Innovation Prototype • Smart India Hackathon</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
            IP-SAKTI Sahayak
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Source-Grounded AI Assistant for Ayurveda Intellectual Property, Regulatory Compliance, Pharmacopoeia Verification, and Doctor-Patient Consultation Summaries.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/ip-assistant"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-950 font-bold text-xs sm:text-sm hover:bg-emerald-50 shadow-md transition-all"
            >
              <span>Explore IP Assistant</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/medicine-checker"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700/50 hover:bg-emerald-700/80 text-white font-semibold text-xs sm:text-sm border border-emerald-500/40 backdrop-blur-md transition-all"
            >
              <span>Check Medicine Safety</span>
              <Pill className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Feature Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <span>Core Functional Assistants</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            3 Specialized Workflows
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1: IP Assistant */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Legal & Regulatory AI
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  IP & Regulatory Assistant
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Source-cited AI guidance on Indian patent laws, Section 3(p) bars, TKDL prior art retrieval, and NBA Access & Benefit Sharing (ABS) compliance.
              </p>
            </div>

            <Link
              href="/ip-assistant"
              className="inline-flex items-center justify-between text-xs font-bold text-emerald-800 hover:text-emerald-950 pt-2 border-t border-slate-100"
            >
              <span>Launch IP Assistant</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Feature Card 2: Medicine Checker */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <Pill className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  Pharmacopoeia Verification
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Medicine Safety & Info
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check classical Ayurvedic formulations against the Ayurvedic Pharmacopoeia of India (API), heavy-metal safety alerts, and package label OCR.
              </p>
            </div>

            <Link
              href="/medicine-checker"
              className="inline-flex items-center justify-between text-xs font-bold text-teal-800 hover:text-teal-950 pt-2 border-t border-slate-100"
            >
              <span>Launch Medicine Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Feature Card 3: Patient Consultation */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Clinical Intake Support
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Patient Intake & Summary
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guided patient consultation interview that organizes symptoms, current medicines, and duration into a structured report for doctors.
              </p>
            </div>

            <Link
              href="/patient-assistant"
              className="inline-flex items-center justify-between text-xs font-bold text-blue-800 hover:text-blue-950 pt-2 border-t border-slate-100"
            >
              <span>Start Guided Intake</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions & Directory Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Search className="w-4 h-4 text-emerald-700" />
            <span>Quick Innovation Actions</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link
              href="/ip-assistant"
              className="p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all block font-semibold text-slate-800"
            >
              Check Section 3(p) Patent Bar
            </Link>
            <Link
              href="/medicine-checker"
              className="p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all block font-semibold text-slate-800"
            >
              Verify API Heavy Metal Rules
            </Link>
            <Link
              href="/doctor-report"
              className="p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all block font-semibold text-slate-800"
            >
              Preview Doctor Report Export
            </Link>
            <Link
              href="/sources"
              className="p-3 bg-slate-50 hover:bg-emerald-50/60 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all block font-semibold text-slate-800"
            >
              Browse 10 Legal Repositories
            </Link>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200/90 space-y-3">
          <div className="flex items-center gap-2 font-bold text-xs text-amber-900 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-amber-700" />
            <span>Legal & Medical Disclaimers</span>
          </div>

          <div className="space-y-2 text-xs text-amber-950/90 leading-relaxed font-normal">
            <p>
              <strong>1. Legal Non-Binding Notice:</strong> IP-SAKTI Sahayak provides source-grounded information for educational and research reference only. It does not provide binding legal opinions or substitute for registered patent agent representation.
            </p>
            <p>
              <strong>2. Medical & Clinical Notice:</strong> Medicine safety information and patient intake tools do not constitute medical diagnosis or prescription. Always consult a registered Ayurvedic Doctor (Vaidya) or physician.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
