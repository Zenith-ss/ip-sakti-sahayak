"use client";

import React, { useState } from "react";
import {
  Pill,
  Search,
  Upload,
  ShieldAlert,
  BookOpen,
  CheckCircle,
  AlertOctagon,
  Sparkles,
  ChevronRight,
  Filter,
  Camera,
  Leaf,
  FlaskConical,
  Gem,
} from "lucide-react";

type FormulationCategory = "All" | "Herbal" | "Herbo-mineral" | "Bhasma / mineral-containing" | "Other";

interface MedicineData {
  id: string;
  name: string;
  sanskritName: string;
  category: FormulationCategory;
  ingredients: string[];
  traditionalUse: string;
  availableEvidence: string;
  dosageInfo: string;
  warningsCautions: string[];
  source: string;
  ayurvedicPharmacopoeiaRef: string;
  heavyMetalTestStatus: string;
}

const SAMPLE_MEDICINES: MedicineData[] = [
  {
    id: "med-1",
    name: "Chyawanprash",
    sanskritName: "च्यवनप्राश अवलेह",
    category: "Herbal",
    ingredients: [
      "Amla (Emblica officinalis) - Primary Base",
      "Guduchi (Tinospora cordifolia)",
      "Ashwagandha (Withania somnifera)",
      "Pippali (Piper longum)",
      "Honey & Ghee base",
      "Dashamoola herbs",
    ],
    traditionalUse:
      "Rasayana (rejuvenator), Balya (promotes strength & immunity), Kasa-Svasa (supports respiratory health). Described in Charaka Samhita Chikitsa Sthana.",
    availableEvidence:
      "Clinical trials demonstrate immunomodulatory, antioxidant, and adaptogenic properties. Supported by published studies in PubMed & AYUSH Research Portal.",
    dosageInfo: "10-15g (1 tablespoon) twice daily with warm milk or water, preferably before meals.",
    warningsCautions: [
      "Diabetic patients should use sugar-free (Nirsharkara) variants.",
      "Contains honey; avoid giving to infants under 1 year.",
    ],
    source: "Ayurvedic Pharmacopoeia of India (API) Part I, Vol II",
    ayurvedicPharmacopoeiaRef: "API Formulations Vol. I: 3:11",
    heavyMetalTestStatus: "Certified Standard Herbal Grade (AYUSH Premium Mark Standard)",
  },
  {
    id: "med-2",
    name: "Vasant Kusumakar Ras",
    sanskritName: "वसन्तकुसुमाकर रस",
    category: "Bhasma / mineral-containing",
    ingredients: [
      "Swarna Bhasma (Gold Calx)",
      "Raupya Bhasma (Silver Calx)",
      "Abhraka Bhasma (Mica Calx)",
      "Pravala Bhasma (Coral Calx)",
      "Mukta Bhasma (Pearl Calx)",
      "Kasturi & Herbal decoction bhavana",
    ],
    traditionalUse:
      "Prameha (metabolic disorders/diabetes management), Rasayana (vitality restorer), Hridya (cardioprotective support). Described in Rasendra Sara Sangraha.",
    availableEvidence:
      "Pre-clinical studies indicate potent cellular protection, glycemic control support, and anti-fatigue action when prepared according to classical Shodhana & Marana protocols.",
    dosageInfo: "62.5 mg to 125 mg (1/2 to 1 tablet) once or twice daily with honey, milk, or ghee strictly under physician supervision.",
    warningsCautions: [
      "HERBO-MINERAL / BHASMA FORMULATION: Must be taken ONLY under strict qualified Ayurvedic Doctor (Vaidya) prescription.",
      "Requires verified Heavy Metal Analysis Certificate (NABL Laboratory Tested for Lead, Mercury, Arsenic, Cadmium within permissible limits).",
      "Contraindicated during pregnancy and lactation.",
    ],
    source: "Ayurvedic Formulary of India (AFI) Part I, 20:40",
    ayurvedicPharmacopoeiaRef: "API Herbo-Mineral Protocols Sec 20",
    heavyMetalTestStatus: "Requires NABL Batch Test Compliance (ASU Drugs Act Rules)",
  },
  {
    id: "med-3",
    name: "Ashwagandha Churna",
    sanskritName: "अश्वगंधा चूर्ण",
    category: "Herbal",
    ingredients: ["Pure Ashwagandha Root Powder (Withania somnifera) 100%"],
    traditionalUse:
      "Balya (strength promoter), Vata Shamaka (pacifies Vata dosha), Nidrajanana (promotes restful sleep), Vajikarana (vitality).",
    availableEvidence:
      "Extensive clinical trial data verifying reduction in serum cortisol levels, improved stress tolerance, and enhanced muscle recovery.",
    dosageInfo: "3 to 6 grams powder twice daily with warm milk or honey after meals.",
    warningsCautions: [
      "May potentiate sedatives or thyroid medications; consult your doctor if on active prescription therapy.",
      "Use with caution in active hyperthyroidism.",
    ],
    source: "Ayurvedic Pharmacopoeia of India (API) Part I, Vol I",
    ayurvedicPharmacopoeiaRef: "API Monograph Vol. I: 18",
    heavyMetalTestStatus: "Standard Herbal Quality Certified",
  },
];

const RECENT_SEARCHES = [
  "Chyawanprash",
  "Vasant Kusumakar Ras",
  "Ashwagandha Churna",
  "Maha Sudarshan Vati",
  "Yograj Guggulu",
];

export default function MedicineCheckerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FormulationCategory>("All");
  const [selectedMedicine, setSelectedMedicine] = useState<MedicineData>(SAMPLE_MEDICINES[0]);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const categories: FormulationCategory[] = [
    "All",
    "Herbal",
    "Herbo-mineral",
    "Bhasma / mineral-containing",
    "Other",
  ];

  const filteredMedicines = SAMPLE_MEDICINES.filter((med) => {
    const matchesCategory =
      selectedCategory === "All" || med.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.sanskritName.includes(searchQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Ayurveda Medicine Safety & Information Checker
            </h1>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
              Pharmacopoeia Grounded
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Authoritative formulation database search, dosage references, traditional uses & heavy-metal safety alerts
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs shadow-xs transition-all"
        >
          <Camera className="w-4 h-4" />
          <span>Upload Package Image (OCR Demo)</span>
        </button>
      </div>

      {/* Search Bar & Upload Row */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Ayurvedic medicine name (e.g. Chyawanprash, Ashwagandha, Bhasma)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-sm placeholder:text-slate-400"
            />
          </div>
          <button
            onClick={() => setSearchQuery(searchQuery)}
            className="px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>

        {/* Recent Searches */}
        <div className="flex items-center gap-2 text-xs pt-1 flex-wrap">
          <span className="text-slate-400 font-medium">Recent Searches:</span>
          {RECENT_SEARCHES.map((item) => (
            <button
              key={item}
              onClick={() => setSearchQuery(item)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-600 border border-slate-200 transition-all font-medium text-[11px]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Formulation Category Tabs / Filters */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Filter className="w-3.5 h-3.5 text-teal-700" />
          <span>Formulation Category Filter:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  isActive
                    ? "bg-teal-800 text-white border-teal-800 shadow-xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat === "Herbal" && <Leaf className="w-3 h-3 inline mr-1 text-emerald-400" />}
                {cat.includes("Bhasma") && <Gem className="w-3 h-3 inline mr-1 text-amber-400" />}
                {cat === "Herbo-mineral" && <FlaskConical className="w-3 h-3 inline mr-1 text-teal-400" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout: Medicine List (Left 4 cols) & Selected Result Card (Right 8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Filtered Medicine Cards List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            <span>Matching Formulations ({filteredMedicines.length})</span>
            <span className="text-slate-400 font-normal">Select to view</span>
          </div>

          <div className="space-y-2.5">
            {filteredMedicines.length === 0 ? (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center text-xs text-slate-500">
                No matching Ayurvedic formulations found in demo dataset.
              </div>
            ) : (
              filteredMedicines.map((med) => {
                const isSelected = selectedMedicine.id === med.id;
                return (
                  <div
                    key={med.id}
                    onClick={() => setSelectedMedicine(med)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                      isSelected
                        ? "bg-teal-50/70 border-teal-600 shadow-xs ring-1 ring-teal-600"
                        : "bg-white border-slate-200 hover:border-teal-300 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {med.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {med.sanskritName}
                        </p>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          med.category === "Bhasma / mineral-containing"
                            ? "bg-amber-100 text-amber-900 border-amber-300"
                            : med.category === "Herbo-mineral"
                            ? "bg-purple-100 text-purple-900 border-purple-300"
                            : "bg-emerald-100 text-emerald-900 border-emerald-300"
                        }`}
                      >
                        {med.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      {med.traditionalUse}
                    </p>

                    <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-teal-800">
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Detailed Medicine Result Card */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
            {/* Result Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-black text-slate-900">
                    {selectedMedicine.name}
                  </h2>
                  <span className="text-sm font-medium text-slate-500">
                    ({selectedMedicine.sanskritName})
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Source: {selectedMedicine.source}
                </p>
              </div>

              {/* Formulation Type Badge Indicator */}
              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Formulation Type
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-xl border flex items-center gap-1.5 ${
                    selectedMedicine.category === "Bhasma / mineral-containing"
                      ? "bg-amber-50 text-amber-900 border-amber-300"
                      : selectedMedicine.category === "Herbo-mineral"
                      ? "bg-purple-50 text-purple-900 border-purple-300"
                      : "bg-emerald-50 text-emerald-900 border-emerald-300"
                  }`}
                >
                  <Pill className="w-3.5 h-3.5" />
                  <span>{selectedMedicine.category}</span>
                </span>
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-700" />
                <span>Composition & Classical Ingredients</span>
              </h3>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedMedicine.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Traditional Use Section */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-teal-700" />
                <span>Traditional Indication & Ayurvedic Pharmacopoeia Use</span>
              </h3>
              <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-200/70 text-xs text-slate-700 leading-relaxed font-medium">
                {selectedMedicine.traditionalUse}
              </div>
            </div>

            {/* Evidence & Research References */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>Available Evidence & Pharmacological References</span>
              </h3>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                {selectedMedicine.availableEvidence}
              </div>
            </div>

            {/* Dosage Information */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                <span>Standard Classical Dosage & Administration</span>
              </h3>
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/80 text-xs font-semibold text-emerald-950">
                {selectedMedicine.dosageInfo}
              </div>
            </div>

            {/* Safety Warnings & Heavy Metal Cautions */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-amber-700" />
                <span>Safety Cautions & Quality Verification</span>
              </h3>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-2 text-xs text-amber-950">
                <div className="p-2 rounded bg-amber-100/80 font-semibold text-[11px] text-amber-900">
                  <span>Quality Standard: </span>
                  <span className="font-bold">{selectedMedicine.heavyMetalTestStatus}</span>
                </div>
                <ul className="space-y-1">
                  {selectedMedicine.warningsCautions.map((warn, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span>{warn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Source Reference Tag Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Pharmacopoeia Reference: {selectedMedicine.ayurvedicPharmacopoeiaRef}</span>
              <span className="text-slate-400">Demo Prototype Dataset</span>
            </div>
          </div>
        </div>
      </div>

      {/* Package Image Upload Modal Placeholder */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Camera className="w-5 h-5 text-teal-700" />
                <span>Upload Package Image (OCR Demo)</span>
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-xs text-slate-400 hover:text-slate-700"
              >
                Close
              </button>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center space-y-3 bg-slate-50 hover:bg-teal-50/40 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-slate-400 mx-auto" />
              <div>
                <p className="text-xs font-bold text-slate-700">
                  Click to select or drag medicine package photo
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Supports JPG, PNG, WEBP (Ayurveda label OCR Extraction)
                </p>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
              <p className="font-semibold">Prototype UI Note:</p>
              <p className="text-[11px] text-amber-800 mt-0.5">
                Image upload and OCR label reading will connect to Vision AI in Phase 2.
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
