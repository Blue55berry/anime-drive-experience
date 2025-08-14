import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CarShowcase from '@/components/CarShowcase';
import CarInterior3D from '@/components/CarInterior3D';
import PerformanceSection from '@/components/PerformanceSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CarShowcase />
      <CarInterior3D />
      <PerformanceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-glow mb-2">ElectricDrive</h3>
            <p className="text-muted-foreground">The future of automotive excellence</p>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>© 2024 ElectricDrive. All rights reserved.</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
