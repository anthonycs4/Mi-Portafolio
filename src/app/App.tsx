import { useState } from 'react';
import { Button } from './components/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/Card';
import { Badge } from './components/Badge';
import { Input, Textarea } from './components/Input';
import { HeroSection } from './components/HeroSection';
import { IDCard } from './components/IDCard';
import { TechStackSection } from './components/TechStackSection';
import { SpaceTimeline } from './components/SpaceTimeline';
import { ProjectGallery } from './components/ProjectGallery';
import { CertificateVault } from './components/CertificateVault';
import { ContactSection, Footer } from './components/ContactSection';
import { FloatingNavbar } from './components/FloatingNavbar';
import { LoadingScreen, useLoading } from './components/LoadingScreen';
import { ScrollIndicators } from './components/ScrollIndicators';
import { CustomCursor } from './components/Interactions';

export default function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isLoading = useLoading(3000);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => {}} />;
  }

  return (
    <div className="min-h-screen bg-deep-space text-text-primary">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Navbar */}
      <FloatingNavbar />
      
      {/* Scroll Indicators */}
      {/* <ScrollIndicators /> */}
      
      {/* Hero Section */}
      <div id="about">
        <HeroSection />
      </div>
      
      {/* ID Card Showcase */}
      <div className="relative max-w-7xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">ID Card</h2>
          
        </div>
        <div className="flex justify-center">
          <IDCard />
        </div>
      </div>
      
      {/* Tech Stack Section */}
      <div id="stack" className="relative max-w-7xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Stack</h2>
        </div>
        <TechStackSection />
      </div>
      
      {/* Space Timeline */}
      <div id="timeline" className="relative max-w-7xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Linea de Tiempo</h2>
        </div>
        <SpaceTimeline />
      </div>
      
      {/* Project Gallery */}
      <div id="projects" className="relative max-w-7xl mx-auto py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Proyectos</h2>
        </div>
        <ProjectGallery />
      </div>
      
      {/* Certificate Vault */}
      <div id="certificates" className="relative max-w-7xl mx-auto py-16 px-8">
        <CertificateVault />
      </div>
      
      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}