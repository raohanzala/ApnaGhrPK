import { useState, useEffect } from 'react';
import { PROJECTS } from '../data';
import { Calendar, MapPin, Building, Activity, HardHat, ShieldAlert, Sparkles, Star, ChevronLeft, Play, LayoutGrid } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

interface ProjectsProps {
  selectedProjectId?: string;
  onNavigate: (page: string, subId?: string) => void;
}

export default function Projects({ selectedProjectId, onNavigate }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Completed' | 'In Progress' | 'Planning'>('All');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Deep-link to a project if specified via route parameter
  useEffect(() => {
    if (selectedProjectId) {
      setActiveProjectId(selectedProjectId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProjectId]);

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.status === activeTab);

  // Find selected project details
  const activeProject = PROJECTS.find(p => p.id === activeProjectId);

  if (activeProject) {
    return (
      <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
        {/* Dynamic Project Details View */}
        <section className="bg-[#111111] text-[#F8F7F4] py-16 relative overflow-hidden border-b border-[#B8892D]/20">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src={activeProject.droneImage || activeProject.image} 
              alt={activeProject.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <button
              onClick={() => setActiveProjectId(null)}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#B8892D] hover:underline bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Back to All Projects
            </button>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D] bg-[#B8892D]/10 border border-[#B8892D]/30 px-3 py-1 rounded">
                {activeProject.type}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                {activeProject.title}
              </h1>
              <p className="text-sm font-mono text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B8892D]" /> {activeProject.location}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left/Main Column: Video, Slider, Materials */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Before-and-After Slider Comparison */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937] flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#B8892D]" /> Before & After Structural Comparison
              </h3>
              <p className="text-xs text-[#6B7280]">
                Observe our exact execution progress, from raw grey structure foundation phase to completed high-end turnkey luxury villa.
              </p>
              <BeforeAfterSlider
                beforeImage={activeProject.beforeImage}
                afterImage={activeProject.afterImage}
              />
            </div>

            {/* Project Gallery */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2937]">
                Interior & Structural Gallery
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activeProject.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                    <img 
                      src={imgUrl} 
                      alt={`Project thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* materials & specification list */}
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1F2937] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#B8892D]" /> Core Materials Used & Quality Checklist
              </h3>
              <p className="text-xs text-[#6B7280]">
                We maintain zero material degradation. Below are the certified raw material brands specified for this build:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {activeProject.materials.map((mat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#1F2937] bg-[#F8F7F4] p-3 rounded-lg border border-slate-100">
                    <span className="text-[#3E7C59] font-bold">✓</span>
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube construction updates if exists */}
            {activeProject.youtubeUrl && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#1F2937] flex items-center gap-2">
                  <Play className="w-5 h-5 text-[#B8892D]" /> Site Progress & Video Tour Walkthrough
                </h3>
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm flex flex-col justify-end p-6 group">
                  <div className="absolute inset-0 opacity-85">
                    <img 
                      src={activeProject.image} 
                      alt="video thumbnail"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <a 
                      href={activeProject.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    </a>
                  </div>
                  <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl text-white max-w-md border border-white/10">
                    <h5 className="font-serif text-xs font-bold uppercase text-[#B8892D] tracking-wider">YouTube Walkthrough</h5>
                    <p className="text-[11px] text-slate-300 mt-1">
                      See our site engineers and interior specialists review building foundations and premium wood fittings.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Timeline & Client Review */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Project Parameters Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-4">
              <h4 className="font-serif font-bold text-sm text-[#1F2937] border-b border-slate-200 pb-2">
                Project Parameters
              </h4>
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Structure Type:</span>
                  <span className="font-bold text-[#1F2937]">{activeProject.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Covered Area:</span>
                  <span className="font-bold text-[#1F2937]">{activeProject.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Current Phase:</span>
                  <span className="font-bold text-[#3E7C59]">{activeProject.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Completion Date:</span>
                  <span className="font-bold text-[#1F2937]">{activeProject.completionDate}</span>
                </div>
              </div>
            </div>

            {/* Dynamic Interactive Progress Timeline */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-4">
              <h4 className="font-serif font-bold text-sm text-[#1F2937] border-b border-slate-200 pb-2 flex items-center gap-1.5">
                <Activity className="w-4.5 h-4.5 text-[#B8892D]" /> Execution Timeline & Milestones
              </h4>
              <div className="relative pl-6 space-y-5">
                {/* Visual side line */}
                <div className="absolute top-1 bottom-1 left-2.5 w-[2px] bg-slate-200"></div>

                {activeProject.timeline.map((item, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <div className={`absolute -left-[1.35rem] w-3 h-3 rounded-full border-2 border-white flex items-center justify-center ${
                      item.status === 'completed' 
                        ? 'bg-[#3E7C59]' 
                        : item.status === 'in-progress' 
                          ? 'bg-[#B8892D] animate-ping' 
                          : 'bg-slate-300'
                    }`}></div>
                    {/* fallback dot if animate-ping overlays */}
                    <div className={`absolute -left-[1.35rem] w-3 h-3 rounded-full border-2 border-white ${
                      item.status === 'completed' 
                        ? 'bg-[#3E7C59]' 
                        : item.status === 'in-progress' 
                          ? 'bg-[#B8892D]' 
                          : 'bg-slate-300'
                    }`}></div>
                    
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="font-bold text-[#1F2937] uppercase tracking-wide">{item.phase}</span>
                      <span className="text-[#6B7280]">{item.duration}</span>
                    </div>
                    <p className="text-[10px] text-[#6B7280] leading-normal">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Review Card if exists */}
            {activeProject.clientReview && (
              <div className="bg-[#F8F7F4] p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex text-amber-500">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                </div>
                <p className="text-xs text-[#6B7280] italic leading-relaxed">
                  "{activeProject.clientReview}"
                </p>
                <div className="flex items-center gap-3 border-t border-slate-200/60 pt-3">
                  <div className="w-9 h-9 rounded-full bg-[#111111] text-[#F8F7F4] font-bold text-xs flex items-center justify-center font-mono border border-slate-700">
                    KM
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold text-[#1F2937]">{activeProject.clientName}</h5>
                    <p className="text-[9px] text-slate-400 font-mono">Verified Homeowner</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
      {/* Portfolio Directory List */}
      <section className="bg-[#111111] text-[#F8F7F4] py-20 relative overflow-hidden border-b border-[#B8892D]/20">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
            alt="Portfolio banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B8892D]">Crafting High-End Structural Legacies</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
            Our Architectural Portfolio
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore completed luxury villas, structural grey-frames, and smart commercial spaces built strictly to PEC code standards.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Tab Filters */}
        <div className="flex justify-center border-b border-slate-200 pb-4">
          <div className="flex gap-2 p-1 bg-white border border-slate-200 rounded-xl font-mono text-xs">
            {['All', 'Completed', 'In Progress', 'Planning'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-[#B8892D] text-white shadow-xs' 
                    : 'text-[#1F2937] hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              onClick={() => setActiveProjectId(proj.id)}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden aspect-[16/11]">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs text-[10px] font-mono uppercase tracking-wider text-[#1F2937]">
                    {proj.status}
                  </div>
                </div>
                
                <div className="p-5 space-y-3">
                  <span className="text-[10px] font-mono uppercase text-[#B8892D] block">
                    {proj.type}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1F2937] group-hover:text-[#B8892D] transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{proj.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Area: {proj.area}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button 
                  className="w-full bg-[#111111] hover:bg-[#B8892D] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
