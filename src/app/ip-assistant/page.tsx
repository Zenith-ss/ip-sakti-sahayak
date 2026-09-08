"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  Scale,
  Send,
  BookOpen,
  Info,
  Bot,
  User,
  FileCheck2,
  BookmarkCheck,
  Building,
} from "lucide-react";

const SUGGESTED_QUESTIONS = [
  "Can my Ayurvedic formulation be patented?",
  "What IP protection is suitable for my Ayurvedic product?",
  "Does traditional knowledge affect patentability?",
  "What ABS requirements may apply?",
];

interface MockMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  sources?: Array<{
    title: string;
    ref: string;
    snippet: string;
  }>;
}

export default function IPAssistantPage() {
  const { jurisdiction } = useApp();
  const [inputQuery, setInputQuery] = useState("");
  const [messages, setMessages] = useState<MockMessage[]>([
    {
      id: "m1",
      sender: "user",
      text: "Can an Ayurvedic formulation containing Triphala and custom extracts be patented under Indian Law?",
      timestamp: "10:14 AM",
    },
    {
      id: "m2",
      sender: "ai",
      text: "Under Indian Patent Law (Patents Act 1970), traditional knowledge and mere combinations of known Ayurvedic ingredients face specific patentability criteria:\n\n1. **Section 3(p) Bar**: An invention which in effect is traditional knowledge or an aggregation/duplication of known properties of traditionally known component(s) is NOT patentable.\n2. **Synergistic Effect Requirement**: To overcome Section 3(p), you must prove a non-obvious **synergistic effect** exceeding the simple sum of individual herbal components through quantitative clinical/pharmacological data.\n3. **Biological Diversity Act (2002)**: Prior approval from the **National Biodiversity Authority (NBA)** is required before applying for IP protection involving Indian biological resources under Access & Benefit Sharing (ABS) regulations.",
      timestamp: "10:14 AM",
      sources: [
        {
          title: "Patents Act, 1970 - Section 3(p)",
          ref: "Act No. 39 of 1970",
          snippet: "Inventions relating to traditional knowledge or aggregation of known properties of traditional components.",
        },
        {
          title: "TKDL (Traditional Knowledge Digital Library)",
          ref: "CSIR / Ministry of AYUSH",
          snippet: "Prior art database containing >440,000 formulation entries from classical texts.",
        },
        {
          title: "Biological Diversity Act, 2002",
          ref: "Section 6 (NBA Approval)",
          snippet: "Mandatory approval & ABS agreement before applying for intellectual property rights.",
        },
      ],
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userMsg: MockMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: inputQuery,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const aiMsg: MockMessage = {
      id: (Date.now() + 1).toString(),
      sender: "ai",
      text: `[PROTOTYPE DEMO RESPONSE]\n\nThank you for asking about: "${inputQuery}".\n\nIn a fully integrated version with Gemini RAG, this module queries authoritative legal databases (${jurisdiction} Jurisdiction), including the Indian Patent Office Guidelines, TKDL entries, and WIPO treaties.`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sources: [
        {
          title: "Controller General of Patents (IP India)",
          ref: "Patent Manual Chapter 4",
          snippet: "Guidelines for examination of patent applications relating to Ayurveda & Traditional Medicine.",
        },
      ],
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInputQuery("");
  };

  const handleChipClick = (question: string) => {
    setInputQuery(question);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              IP & Regulatory Assistant
            </h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              Source-Cited AI
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Grounded guidance on patents, trademarks, GI, ABS compliance, and TKDL prior art
          </p>
        </div>

        {/* Active Jurisdiction Badge Indicator */}
        <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-400 font-medium">Jurisdiction:</span>
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-lg flex items-center gap-1 ${
              jurisdiction === "India"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-blue-50 text-blue-800 border border-blue-200"
            }`}
          >
            {jurisdiction === "India" ? "🇮🇳 India (IPO / AYUSH)" : "🌐 Global (WIPO / PCT)"}
          </span>
        </div>
      </div>

      {/* Main Grid: Chat UI (Left 8 cols) & Sources Panel (Right 4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Chat Section */}
        <div className="lg:col-span-8 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden h-[680px]">
          {/* Chat Header Notice */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Bot className="w-4 h-4 text-emerald-700" />
              <span>Ayurveda IP Assistant (Demo / UI Mock)</span>
            </span>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-200">
              Mock AI Responses Only
            </span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-xs mt-1">
                    <Scale className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] space-y-2 ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-emerald-800 text-white font-medium rounded-tr-none shadow-xs"
                        : "bg-white text-slate-800 border border-slate-200/90 rounded-tl-none shadow-xs"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Cited Sources Card inside AI message */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Grounding Sources Cited ({msg.sources.length})</span>
                        </p>
                        <div className="space-y-1.5">
                          {msg.sources.map((src, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-xs space-y-0.5"
                            >
                              <div className="flex items-center justify-between font-bold text-emerald-900">
                                <span>{src.title}</span>
                                <span className="text-[10px] text-emerald-700 font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-200">
                                  {src.ref}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-600 line-clamp-2">
                                {src.snippet}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium px-1">
                    <span>{msg.timestamp}</span>
                    {msg.sender === "ai" && <span>• Source Verified</span>}
                  </div>
                </div>

                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-xs mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Suggested Questions Chips */}
          <div className="p-3 bg-white border-t border-slate-200 space-y-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
              Suggested Legal & IP Questions:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipClick(q)}
                  className="text-xs bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200 transition-all text-left font-medium"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Form */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about patents, TKDL prior art, ABS, trademarks or AYUSH regulations..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-sm placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm flex items-center gap-2 shadow-xs transition-all"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Right Panel: Authoritative Sources */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Reference Knowledge Sources</span>
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                Demo Panel
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              These authoritative reference repositories ground the AI queries to prevent hallucination in legal and IP contexts.
            </p>

            <div className="space-y-3">
              {/* Source Card 1 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-emerald-700" />
                    Patents Act, 1970
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    India Code
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Sections 3(p), 3(j), and 3(e) governing patentability of traditional herbal preparations and synergistic combinations.
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>Status: Active Law</span>
                  <span className="text-emerald-700 font-semibold">Verified</span>
                </div>
              </div>

              {/* Source Card 2 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <BookmarkCheck className="w-3.5 h-3.5 text-emerald-700" />
                    TKDL (Traditional Knowledge)
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    CSIR / AYUSH
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Prior art database containing &gt;440,000 formulation entries translated from Sanskrit, Tamil, Persian, and Arabic classical texts.
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>Entries: 440,000+</span>
                  <span className="text-emerald-700 font-semibold">Verified</span>
                </div>
              </div>

              {/* Source Card 3 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-700" />
                    Biological Diversity Act (NBA)
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    2002 Act
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Access and Benefit Sharing (ABS) compliance regulations for Indian biological resources and traditional knowledge usage.
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>NBA Form III / ABS</span>
                  <span className="text-emerald-700 font-semibold">Verified</span>
                </div>
              </div>

              {/* Source Card 4 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-emerald-700" />
                    IP India (CGPDTM)
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    IPO Guidelines
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Official patent examination guidelines for traditional medicine and pharmaceutical inventions.
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>Patent Manual 2024</span>
                  <span className="text-emerald-700 font-semibold">Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-800 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              <span>Prototype Disclaimer</span>
            </p>
            <p className="text-[11px] text-slate-500 leading-snug">
              This system provides informational and source-grounded guidance and does not constitute official legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
