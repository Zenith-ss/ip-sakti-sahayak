"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  ShieldCheck,
  LayoutDashboard,
  Scale,
  Pill,
  UserCheck,
  FileSpreadsheet,
  BookOpen,
  Info,
  Menu,
  X,
  Globe,
  Languages,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "IP Assistant", href: "/ip-assistant", icon: Scale },
  { name: "Medicine Checker", href: "/medicine-checker", icon: Pill },
  { name: "Patient Assistant", href: "/patient-assistant", icon: UserCheck },
  { name: "Doctor Report", href: "/doctor-report", icon: FileSpreadsheet },
  { name: "Sources", href: "/sources", icon: BookOpen },
  { name: "About", href: "/about", icon: Info },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const {
    jurisdiction,
    setJurisdiction,
    language,
    setLanguage,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-emerald-900 transition-colors">
                <ShieldCheck className="w-5 h-5 text-emerald-200" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-base text-slate-900 tracking-tight leading-none">
                    IP-SAKTI
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 leading-none">
                    SAHAYAK
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium leading-tight hidden sm:block">
                  Ayurveda IP & Regulatory Assistant • SIH Prototype
                </span>
              </div>
            </Link>
          </div>

          {/* Header Selectors: Jurisdiction & Language */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Jurisdiction Selector */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 text-xs font-medium">
              <button
                onClick={() => setJurisdiction("India")}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 font-semibold ${
                  jurisdiction === "India"
                    ? "bg-white text-emerald-900 shadow-2xs border border-slate-200/60"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>🇮🇳</span>
                <span className="hidden sm:inline">India</span>
              </button>
              <button
                onClick={() => setJurisdiction("Global")}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 font-semibold ${
                  jurisdiction === "Global"
                    ? "bg-white text-blue-900 shadow-2xs border border-slate-200/60"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline">Global</span>
              </button>
            </div>

            {/* Language Selector */}
            <div className="relative flex items-center">
              <Languages className="w-4 h-4 text-slate-400 absolute left-2.5 pointer-events-none" />
              <select
                value={language}
                onChange={(e) =>
                  setLanguage(e.target.value as "en" | "hi" | "ta")
                }
                className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-700 hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 cursor-pointer appearance-none"
              >
                <option value="en">English (EN)</option>
                <option value="hi">हिंदी (HI)</option>
                <option value="ta">தமிழ் (TA)</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body with Sidebar + Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-64 p-4 border-r border-slate-200/80 bg-white/50 space-y-6 flex-shrink-0">
          <div className="space-y-1">
            <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Navigation Menu
            </p>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-800 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Prototype Grounding Notice Banner */}
          <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Source Grounded</span>
            </div>
            <p className="text-[11px] text-emerald-800/90 leading-relaxed font-normal">
              Anchored to TKDL, Indian Patents Act 1970, and AYUSH Pharmacopoeia standards.
            </p>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Content Container */}
            <div className="relative w-64 bg-white h-full p-4 border-r border-slate-200 flex flex-col justify-between shadow-2xl z-10">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-700" />
                    <span className="font-bold text-slate-900 text-sm">
                      IP-SAKTI Sahayak
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-emerald-800 text-white shadow-xs"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="text-[10px] text-slate-400 font-medium text-center border-t border-slate-100 pt-3">
                Smart India Hackathon Prototype
              </div>
            </div>
          </div>
        )}

        {/* Main Viewport Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">{children}</main>
      </div>
    </div>
  );
}
