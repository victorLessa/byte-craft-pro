import { ArrowDown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 hero-animate">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 hero-animate hero-animate-delay-1">
          Transformando Complexidade Técnica em{' '}
          <span className="gradient-text">Vantagem Competitiva.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 hero-animate hero-animate-delay-2">
          Engenheiro de Software & Especialista em IA. Soluções de elite para automação, sistemas escaláveis e agentes inteligentes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-animate hero-animate-delay-3">
          <Button
            onClick={() => scrollTo('#servicos')}
            variant="outline"
            size="lg"
            className="border-border hover:border-primary/50 hover:bg-primary/5 gap-2 px-8"
          >
            <ArrowDown size={18} />
            Ver Serviços
          </Button>
          <Button
            onClick={() => scrollTo('#contato')}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 gap-2 px-8"
          >
            <Rocket size={18} />
            Iniciar Projeto
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
