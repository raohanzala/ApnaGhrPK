"use client";

import { useState, useEffect } from 'react';
import { PROJECTS } from '../data';
import PageHeader from '@/components/PageHeader';
import ProjectFilters from '@/components/projects/core/ProjectFilters';
import ProjectGrid from '@/components/projects/core/ProjectGrid';
import ProjectDetailPage from '@/components/projects/core/ProjectDetailPage';

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
        <ProjectDetailPage project={activeProject} onBack={() => setActiveProjectId(null)}/>
    );
  }

  return (
    <div className="bg-[#F8F7F4] min-h-screen text-[#1F2937] font-sans pb-24">
      
      <PageHeader
        subTitle='Crafting High-End Structural Legacies'
        title='Our Architectural Portfolio'
        description='Explore completed luxury villas, structural grey-frames, and smart commercial spaces built strictly to PEC code standards.'
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <ProjectFilters activeTab={activeTab} setActiveTab={setActiveTab}/>
        <ProjectGrid projects={filteredProjects} setActiveProjectId={setActiveProjectId}/>
      </section>
    </div>
  );
}
