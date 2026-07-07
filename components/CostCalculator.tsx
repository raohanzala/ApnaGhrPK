"use client";

import { useState, useEffect, FormEvent } from 'react';
import { Calculator, ArrowRight, Building, DollarSign, Hammer, Check, Info, FileText } from 'lucide-react';

interface CostBreakdownItem {
  category: string;
  percentage: number;
  cost: number;
  description: string;
}

export default function CostCalculator() {
  const [city, setCity] = useState('lahore');
  const [plotSize, setPlotSize] = useState('10-marla');
  const [customArea, setCustomArea] = useState(2500);
  const [constructionType, setConstructionType] = useState('turnkey'); // grey or turnkey
  const [qualityTier, setQualityTier] = useState('premium-a'); // standard, premium-a, executive

  const [coveredArea, setCoveredArea] = useState(2500);
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [costPerSqFt, setCostPerSqFt] = useState(0);
  const [breakdown, setBreakdown] = useState<CostBreakdownItem[]>([]);
  const [isQuoted, setIsQuoted] = useState(false);

  // Default covered area defaults based on typical Pakistani housing regulations
  useEffect(() => {
    if (plotSize === '5-marla') {
      setCoveredArea(1350);
    } else if (plotSize === '10-marla') {
      setCoveredArea(2700);
    } else if (plotSize === '1-kanal') {
      setCoveredArea(5000);
    } else if (plotSize === '2-kanal') {
      setCoveredArea(9500);
    } else {
      setCoveredArea(customArea);
    }
  }, [plotSize, customArea]);

  // Execute Cost Calculations based on Pakistani standard market prices in 2026
  useEffect(() => {
    // Base square foot rate for standard grey structure
    let baseRate = 2450; 

    // Adjustment based on city (Islamabad/Karachi are slightly higher due to shipping / logistics / CDA approvals)
    let cityMultiplier = 1.0;
    if (city === 'islamabad') cityMultiplier = 1.05;
    if (city === 'karachi') cityMultiplier = 1.08;
    if (city === 'peshawar') cityMultiplier = 0.98;

    // Type of construction multiplier
    let typeMultiplier = 1.0; // Grey structure is baseline
    if (constructionType === 'turnkey') {
      typeMultiplier = 2.1; // Turnkey finishes double the cost
    }

    // Quality tier multipliers
    let qualityMultiplier = 1.0; // Premium A-Grade is standard base
    if (qualityTier === 'standard') {
      qualityMultiplier = 0.85; // 15% budget saving
    } else if (qualityTier === 'executive') {
      qualityMultiplier = 1.45; // 45% premium for ultimate luxury
    }

    const calculatedPerSqFt = Math.round(baseRate * cityMultiplier * typeMultiplier * qualityMultiplier);
    const totalCost = calculatedPerSqFt * coveredArea;

    setCostPerSqFt(calculatedPerSqFt);
    setCalculatedCost(totalCost);

    // Create realistic component breakdown percentages
    let categories: { name: string; pct: number; desc: string }[] = [];
    if (constructionType === 'grey') {
      categories = [
        { name: 'Steel & Rebars', pct: 24, desc: 'Amreli Steel G-60 grade structural reinforcements' },
        { name: 'Cement & Concrete', pct: 20, desc: 'Maple Leaf / Bestway high-hydration setting cement' },
        { name: 'Bricks & Masonry', pct: 18, desc: 'First-class red clay baked bricks' },
        { name: 'Grey Structure Labor', pct: 22, desc: 'Experienced structural masonry & carpentry crews' },
        { name: 'Electrical/Plumbing Conduits', pct: 8, desc: 'Concealed Pakistan Cables and PPRC pipes' },
        { name: 'Excavation & Backfill', pct: 8, desc: 'Soil testing, structural digging, termite sprays' },
      ];
    } else {
      categories = [
        { name: 'Spanish Tiling & Italian Marble', pct: 22, desc: 'Premium floorings, porcelain bath tiles' },
        { name: 'Steel, Cement & Raw Masonry', pct: 28, desc: 'Core foundational grey structure shell materials' },
        { name: 'Kitchen & Cabinetry Woodworks', pct: 15, desc: 'Solid wood doors, semi-solid ash cabinets' },
        { name: 'Finishing Labor & Masonry', pct: 16, desc: 'Skilled tile setters, paint sprayers, trim crews' },
        { name: 'Sanitary Ware & Electrical Fittings', pct: 11, desc: 'Porta/Grohe fixtures, LED indirect lights' },
        { name: 'Interior Plaster, Ceilings & Paint', pct: 8, desc: 'False ceiling designs, Jotun silk interior coat' },
      ];
    }

    const calculatedBreakdown = categories.map((cat) => ({
      category: cat.name,
      percentage: cat.pct,
      cost: Math.round((totalCost * cat.pct) / 100),
      description: cat.desc,
    }));

    setBreakdown(calculatedBreakdown);
  }, [city, plotSize, coveredArea, constructionType, qualityTier]);

  const handleRequestQuote = (e: FormEvent) => {
    e.preventDefault();
    setIsQuoted(true);
    setTimeout(() => setIsQuoted(false), 4000);
  };

  const formatPKR = (num: number) => {
    if (num >= 10000000) {
      return `PKR ${(num / 10000000).toFixed(2)} Crore`;
    } else if (num >= 100000) {
      return `PKR ${(num / 100000).toFixed(2)} Lakh`;
    }
    return `PKR ${num.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-lg overflow-hidden">
      <div className="bg-[#111111] p-6 text-white flex items-center gap-3">
        <div className="bg-[#B8892D] p-2 rounded-lg">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold">Construction Cost Estimator</h3>
          <p className="text-xs text-slate-300">Live 2026 Pakistani material index calculation</p>
        </div>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-5 space-y-6">
          {/* City Selection */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-2">
              Select Project City
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'lahore', label: 'Lahore' },
                { id: 'islamabad', label: 'Islamabad' },
                { id: 'karachi', label: 'Karachi' },
                { id: 'peshawar', label: 'Peshawar' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCity(c.id)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    city === c.id
                      ? 'bg-[#111111] border-[#111111] text-white'
                      : 'bg-[#F8F7F4] border-[#E5E7EB] text-[#1F2937] hover:bg-slate-100'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Plot Size */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-2">
              Plot Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: '5-marla', label: '5 Marla' },
                { id: '10-marla', label: '10 Marla' },
                { id: '1-kanal', label: '1 Kanal' },
                { id: '2-kanal', label: '2 Kanal' },
                { id: 'custom', label: 'Custom' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPlotSize(p.id)}
                  className={`py-2 px-2 text-[11px] font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    plotSize === p.id
                      ? 'bg-[#B8892D] border-[#B8892D] text-white'
                      : 'bg-[#F8F7F4] border-[#E5E7EB] text-[#1F2937] hover:bg-slate-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom covered area option */}
          {plotSize === 'custom' && (
            <div className="bg-[#F8F7F4] p-3 rounded-lg border border-[#E5E7EB] space-y-2">
              <label className="block text-xs font-semibold text-[#1F2937]">
                Custom Covered Area (Sq. Ft.)
              </label>
              <input
                type="number"
                value={customArea}
                onChange={(e) => setCustomArea(Math.max(100, parseInt(e.target.value) || 0))}
                className="w-full bg-white border border-[#E5E7EB] rounded-lg p-2 text-xs text-[#1F2937] focus:outline-none focus:border-[#B8892D]"
              />
              <p className="text-[10px] text-[#6B7280]">
                Typical 10 Marla covered area is around 2500 - 3000 Sq. Ft.
              </p>
            </div>
          )}

          {/* Construction Type */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-2">
              Construction Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'grey', label: 'Grey Structure Shell', desc: 'Slabs, brickwork, pipes, basic plaster' },
                { id: 'turnkey', label: 'Turnkey Handover', desc: 'Completed architecture, tile floors, woodwork' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setConstructionType(t.id)}
                  className={`p-3 text-left rounded-lg border transition-all cursor-pointer flex flex-col justify-between h-20 ${
                    constructionType === t.id
                      ? 'bg-white border-2 border-[#B8892D] shadow-sm'
                      : 'bg-[#F8F7F4] border-[#E5E7EB] text-[#1F2937] hover:bg-slate-100'
                  }`}
                >
                  <span className={`text-xs font-bold ${constructionType === t.id ? 'text-[#B8892D]' : 'text-[#1F2937]'}`}>
                    {t.label}
                  </span>
                  <span className="text-[9px] text-[#6B7280] leading-snug">{t.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quality Grade */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-2">
              Material Specification Grade
            </label>
            <div className="space-y-2">
              {[
                { id: 'standard', title: 'Standard Quality Grade', desc: 'Reliable local brands, durable standard finishing fittings' },
                { id: 'premium-a', title: 'A-Grade Premium (Signature)', desc: 'Amreli Steel, Maple Leaf, Porta fittings, Spanish tiling' },
                { id: 'executive', title: 'Executive High-End Luxury', desc: 'Bespoke imports, smart automation, heavy Italian marbles, custom glass' },
              ].map((q) => (
                <div
                  key={q.id}
                  onClick={() => setQualityTier(q.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${
                    qualityTier === q.id
                      ? 'bg-[#F8F7F4] border-2 border-[#111111]'
                      : 'bg-white border-[#E5E7EB] hover:bg-slate-50'
                  }`}
                >
                  <div className={`mt-0.5 rounded-full w-4 h-4 border flex items-center justify-center ${
                    qualityTier === q.id ? 'bg-[#111111] border-[#111111]' : 'border-slate-300'
                  }`}>
                    {qualityTier === q.id && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1F2937]">{q.title}</h5>
                    <p className="text-[10px] text-[#6B7280] mt-0.5 leading-relaxed">{q.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Results Display */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-[#F8F7F4] p-6 rounded-xl border border-[#E5E7EB]">
          <div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280]">Covered Area:</span>
              <span className="text-sm font-bold text-[#1F2937] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                {coveredArea.toLocaleString()} Sq. Ft.
              </span>
            </div>

            {/* Main Big Pricing Callout */}
            <div className="space-y-1 mb-6 text-center lg:text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B8892D]">Estimated Total Construction Cost</span>
              <div className="text-3xl lg:text-4xl font-serif font-black text-[#111111]">
                {formatPKR(calculatedCost)}
              </div>
              <p className="text-xs text-[#6B7280]">
                Calculated at <span className="font-semibold text-[#1F2937]">PKR {costPerSqFt.toLocaleString()}</span> per square foot
              </p>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#B8892D]" /> Component Cost Allocations
              </h4>
              <div className="space-y-3">
                {breakdown.map((item, idx) => (
                  <div key={idx} className="space-y-1 bg-white p-2.5 rounded-lg border border-slate-200/60 shadow-xs">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[#1F2937]">{item.category}</span>
                      <div className="space-x-1.5">
                        <span className="text-slate-500 font-mono text-[10px] bg-[#F8F7F4] px-1.5 py-0.5 rounded">
                          {item.percentage}%
                        </span>
                        <span className="font-bold text-[#111111]">{formatPKR(item.cost)}</span>
                      </div>
                    </div>
                    {/* Visual bar */}
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#B8892D] rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-[9px] text-[#6B7280]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-2 text-[10px] text-amber-800 leading-normal">
              <Info className="w-3.5 h-3.5 text-[#B8892D] shrink-0 mt-0.5" />
              <span>
                <strong>Please Note:</strong> Market steel and cement rates shift weekly in Pakistan. This estimate represents our highly accurate current projection. Contact us below to freeze material contracts!
              </span>
            </div>
          </div>

          {/* Consultation Lead Form */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-xs font-bold text-[#1F2937] mb-2 uppercase tracking-wide">
              Receive Formal Bill of Quantities (BOQ) PDF
            </h4>
            <form onSubmit={handleRequestQuote} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="tel"
                placeholder="Enter WhatsApp Number"
                required
                className="bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B8892D]"
              />
              <button
                type="submit"
                className={`text-xs font-semibold uppercase py-2 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isQuoted
                    ? 'bg-[#3E7C59] text-white'
                    : 'bg-[#B8892D] hover:bg-[#C99A3C] text-white shadow-sm'
                }`}
              >
                {isQuoted ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    BOQ Sent on WhatsApp!
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    Send Me Complete BOQ
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
