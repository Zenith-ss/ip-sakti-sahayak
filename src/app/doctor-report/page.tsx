"use client";

import React from "react";
import {
  Download,
  Share2,
  User,
  AlertTriangle,
  Stethoscope,
} from "lucide-react";

export default function DoctorReportPage() {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    alert("[PROTOTYPE DEMO] Share feature will connect to Doctor Portal in Phase 2.");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Doctor / Patient Consultation Summary
            </h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Clinical Export Preview
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Structured patient intake summary generated for healthcare professional evaluation
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 shadow-xs transition-all"
          >
            <Download className="w-4 h-4 text-emerald-700" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-xs transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>Share with Doctor</span>
          </button>
        </div>
      </div>

      {/* Main Document Preview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden space-y-6 p-6 sm:p-10 print:shadow-none print:border-none">
        {/* Document Header Banner */}
        <div className="border-b-2 border-emerald-700/40 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-bold text-xl shadow-xs">
              <Stethoscope className="w-6 h-6 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-900 tracking-tight">
                  IP-SAKTI SAHAYAK
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 uppercase">
                  Clinical Intake Summary
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Ayurveda Health Consultation Pre-assessment Report
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right text-xs space-y-0.5 font-medium text-slate-500">
            <p className="font-bold text-slate-800">Ref ID: #IPS-2026-8942</p>
            <p>Generated: September 2, 2026</p>
            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
              Demo Prototype Record
            </span>
          </div>
        </div>

        {/* Section 1: Patient Information */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200/80 pb-2">
            <User className="w-4 h-4 text-emerald-700" />
            <span>Patient Information</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-1">
            <div>
              <span className="text-slate-400 font-medium block text-[10px]">Patient Name:</span>
              <span className="font-bold text-slate-800">Rajesh K. Verma</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block text-[10px]">Age / Gender:</span>
              <span className="font-bold text-slate-800">48 Yrs / Male</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block text-[10px]">Contact Reference:</span>
              <span className="font-bold text-slate-800">+91 98765 *****</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block text-[10px]">Prakriti Type (Self):</span>
              <span className="font-bold text-emerald-800">Vata-Kapha Predominant</span>
            </div>
          </div>
        </div>

        {/* Clinical Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chief Concern */}
          <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Chief Concern
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Chronic morning knee joint stiffness and mild lower back discomfort for the past 6 months.
            </p>
          </div>

          {/* Symptoms */}
          <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Symptoms
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Morning joint stiffness lasting 30 minutes, mild swelling after walking, and occasional evening fatigue.
            </p>
          </div>

          {/* Duration */}
          <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Duration
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Initial onset 6 months ago, gradually increased over the past 2 months during cold/humid weather.
            </p>
          </div>

          {/* Current Medicines */}
          <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Current Medicines
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Chyawanprash (1 tsp daily), Calcium supplement, and occasional Paracetamol for severe joint pain.
            </p>
          </div>

          {/* Dosage */}
          <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Dosage & Frequency
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Chyawanprash: 1 tsp in morning with milk; Paracetamol: 500mg as needed (approx twice a week).
            </p>
          </div>

          {/* Allergies */}
          <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Known Allergies
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Mild digestive sensitivity to heavy dairy products; no known pharmaceutical drug allergies.
            </p>
          </div>
        </div>

        {/* Relevant History */}
        <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Relevant Medical & Surgical History
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            Borderline elevated blood pressure (managed with dietary control); no prior surgeries or hospital admissions.
          </p>
        </div>

        {/* Patient Concerns & Notes */}
        <div className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Patient Concerns & Expectations
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            Wishes to explore safe Ayurvedic Guggulu/Rasayana formulations for joint mobility to reduce dependency on synthetic analgesics.
          </p>
        </div>

        {/* Items Requiring Professional Review (Highlighted Callout Box) */}
        <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-5 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span>Items Requiring Professional Physician Review</span>
          </div>
          <ul className="space-y-2 text-xs text-amber-950 font-medium">
            <li className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0 mt-1.5" />
              <span>
                <strong>Herbo-mineral Interaction Check:</strong> If prescribing Guggulu or Bhasma formulations (e.g., Yograj Guggulu or Vasant Kusumakar Ras), verify kidney/liver function markers and heavy metal testing certification.
              </span>
            </li>
            <li className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0 mt-1.5" />
              <span>
                <strong>Analgesic Co-administration:</strong> Monitor Paracetamol usage alongside Ayurvedic anti-inflammatory herbs to avoid gastrointestinal or hepatic overload.
              </span>
            </li>
          </ul>
        </div>

        {/* Physician Sign-off Box */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <div>
            <p className="font-bold text-slate-800">Reviewing Physician Signature / Stamp:</p>
            <div className="w-48 h-12 border-b border-dashed border-slate-300 mt-2 flex items-end pb-1 text-[11px] text-slate-400">
              Dr. ___________________________
            </div>
          </div>

          <div className="text-right text-[11px] text-slate-400">
            <p>IP-SAKTI Sahayak Prototype Report</p>
            <p>For Clinical Consultation Use Only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
