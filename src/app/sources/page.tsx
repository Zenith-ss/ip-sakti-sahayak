"use client";

import React, { useState } from "react";
import {
  Globe,
  Search,
  FileCheck,
  Info,
} from "lucide-react";

interface KnowledgeSource {
  id: string;
  name: string;
  abbreviation: string;
  region: "India" | "International";
  authority: string;
  description: string;
  keyActs: string[];
  docCount: string;
  status: "Ready for Indexing" | "Configured Placeholder";
}

const SOURCES_DATA: KnowledgeSource[] = [
  // India Sources
  {
    id: "src-1",
    name: "India Code - Digital Repository of Acts",
    abbreviation: "India Code",
    region: "India",
    authority: "Legislative Department, Ministry of Law and Justice",
    description:
      "Official statutory repository containing central and state acts including the Patents Act (1970), Biological Diversity Act (2002), and Drugs & Cosmetics Act (1940).",
    keyActs: ["Patents Act Section 3(p)", "Biological Diversity Act 2002", "Drugs & Cosmetics Act 1940"],
    docCount: "12,400 Statutory Documents",
    status: "Configured Placeholder",
  },
  {
    id: "src-2",
    name: "Controller General of Patents Designs & Trademarks",
    abbreviation: "IP India",
    region: "India",
    authority: "DPIIT, Ministry of Commerce and Industry",
    description:
      "Indian Patent Office manuals, examination guidelines for traditional medicine, trademark classifications, and Geographical Indications (GI) registry data.",
    keyActs: ["Patent Manual 2024", "GI Registry Protocols", "Trademark Class 5 & 44"],
    docCount: "85,000 Examination Reports",
    status: "Configured Placeholder",
  },
  {
    id: "src-3",
    name: "Traditional Knowledge Digital Library",
    abbreviation: "TKDL",
    region: "India",
    authority: "CSIR & Ministry of AYUSH",
    description:
      "Prior art digital library containing over 440,000 formulation entries translated from Sanskrit, Hindi, Tamil, Arabic, and Persian classical texts to prevent defensive biopiracy.",
    keyActs: ["Charaka Samhita", "Sushruta Samhita", "Siddha & Unani Pharmacopoeias"],
    docCount: "440,000+ Classical Formulations",
    status: "Configured Placeholder",
  },
  {
    id: "src-4",
    name: "National Biodiversity Authority",
    abbreviation: "NBA",
    region: "India",
    authority: "Ministry of Environment, Forest & Climate Change",
    description:
      "Statutory body regulating Access and Benefit Sharing (ABS) compliance, Form I-IV applications, and fair compensation for bio-resource utilisation.",
    keyActs: ["ABS Regulations 2014", "Form III IP Approval", "State Biodiversity Board Guidelines"],
    docCount: "3,200 Approval Records",
    status: "Configured Placeholder",
  },
  {
    id: "src-5",
    name: "Ministry of AYUSH",
    abbreviation: "AYUSH",
    region: "India",
    authority: "Government of India",
    description:
      "Ayurvedic Pharmacopoeia of India (API), Ayurvedic Formulary of India (AFI), research portal, and clinical standard operating protocols for traditional systems of medicine.",
    keyActs: ["API Part I & II", "AFI Volumes 1-3", "AYUSH Standard Mark Standards"],
    docCount: "1,800 Monographs",
    status: "Configured Placeholder",
  },
  {
    id: "src-6",
    name: "Food Safety and Standards Authority of India",
    abbreviation: "FSSAI (Ayush Aahar)",
    region: "India",
    authority: "Ministry of Health and Family Welfare",
    description:
      "Regulations for Ayush Aahar health supplements, nutraceutical labelling standards, and botanical safety compliance.",
    keyActs: ["Ayush Aahar Regulations 2022", "Nutraceutical Standards", "Safety Limits"],
    docCount: "450 Standard Guidelines",
    status: "Configured Placeholder",
  },

  // International Sources
  {
    id: "src-7",
    name: "World Intellectual Property Organization",
    abbreviation: "WIPO",
    region: "International",
    authority: "United Nations Agency",
    description:
      "Intergovernmental Committee on Intellectual Property and Genetic Resources, Traditional Knowledge and Folklore (IGC), Patent Cooperation Treaty (PCT) framework.",
    keyActs: ["WIPO IGC Treaty 2024", "Patent Cooperation Treaty (PCT)", "WIPO Lex Database"],
    docCount: "150 Global IP Treaties",
    status: "Configured Placeholder",
  },
  {
    id: "src-8",
    name: "World Trade Organization (TRIPS Agreement)",
    abbreviation: "WTO TRIPS",
    region: "International",
    authority: "World Trade Organization",
    description:
      "Agreement on Trade-Related Aspects of Intellectual Property Rights, geographical indications protection, and public health flexibilities.",
    keyActs: ["TRIPS Article 27.3(b)", "Doha Declaration flexibilities", "GI Protection"],
    docCount: "80 TRIPS Standards",
    status: "Configured Placeholder",
  },
  {
    id: "src-9",
    name: "Convention on Biological Diversity",
    abbreviation: "CBD",
    region: "International",
    authority: "United Nations Environment Programme (UNEP)",
    description:
      "International treaty for conservation of biological diversity, sustainable use of components, and fair sharing of benefits arising out of genetic resources.",
    keyActs: ["Article 8(j) Traditional Knowledge", "CBD Strategic Plan", "Access & Benefit Framework"],
    docCount: "620 CBD Reports",
    status: "Configured Placeholder",
  },
  {
    id: "src-10",
    name: "Nagoya Protocol on Access & Benefit-Sharing",
    abbreviation: "Nagoya Protocol",
    region: "International",
    authority: "CBD Secretariat",
    description:
      "Supplementary agreement to CBD providing a transparent legal framework for the effective implementation of benefit-sharing from genetic resources and associated traditional knowledge.",
    keyActs: ["Prior Informed Consent (PIC)", "Mutually Agreed Terms (MAT)", "ABS Clearing-House"],
    docCount: "340 ABS Protocol Decisions",
    status: "Configured Placeholder",
  },
];

export default function SourcesPage() {
  const [regionFilter, setRegionFilter] = useState<"All" | "India" | "International">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSources = SOURCES_DATA.filter((src) => {
    const matchesRegion = regionFilter === "All" || src.region === regionFilter;
    const matchesQuery =
      searchQuery.trim() === "" ||
      src.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Authoritative Knowledge Sources
            </h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Legal Repository Index
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Directory of national and international legal frameworks, IP registries, pharmacopoeias, and traditional knowledge databases
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs text-xs font-semibold">
          <button
            onClick={() => setRegionFilter("All")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              regionFilter === "All"
                ? "bg-emerald-800 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All Sources ({SOURCES_DATA.length})
          </button>
          <button
            onClick={() => setRegionFilter("India")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
              regionFilter === "India"
                ? "bg-emerald-800 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>🇮🇳</span>
            <span>India (6)</span>
          </button>
          <button
            onClick={() => setRegionFilter("International")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
              regionFilter === "International"
                ? "bg-blue-800 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Global (4)</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center gap-3">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter sources by name, act, authority or keyword (e.g. TKDL, WIPO, NBA, Patents Act)..."
          className="flex-1 text-sm bg-transparent focus:outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Source Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSources.map((src) => (
          <div
            key={src.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {src.abbreviation}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        src.region === "India"
                          ? "bg-orange-50 text-orange-800 border-orange-200"
                          : "bg-blue-50 text-blue-800 border-blue-200"
                      }`}
                    >
                      {src.region === "India" ? "🇮🇳 National Authority" : "🌐 International Framework"}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900 mt-2">
                    {src.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Authority: {src.authority}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {src.description}
              </p>

              {/* Key Acts Chips */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Key Indexed Regulations / Texts:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {src.keyActs.map((act, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Row */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>{src.docCount}</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                {src.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info Banner */}
      <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 text-xs text-slate-600 space-y-1">
        <p className="font-bold text-slate-800 flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-700" />
          <span>Knowledge Source Integration Note</span>
        </p>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          These listed legal and pharmacopoeial repositories represent the target vector database sources that will be connected in Phase 2 for Retrieval-Augmented Generation (RAG) grounding.
        </p>
      </div>
    </div>
  );
}
