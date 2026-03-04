import { Code, Brain, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento de Software',
    description: 'Sites e sistemas sob medida com foco em performance, segurança e experiência do usuário. Arquitetura limpa e código escalável.',
    tags: ['Web Apps', 'APIs', 'Sistemas'],
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Agentes autônomos, RAG, integração de LLMs em fluxos existentes. IA que resolve problemas reais do seu negócio.',
    tags: ['Agentes IA', 'RAG', 'LLMs'],
  },
  {
    icon: Zap,
    title: 'Automações Inteligentes',
    description: 'Otimização de processos para redução de custos operacionais. Workflows inteligentes que economizam horas de trabalho manual.',
    tags: ['Workflows', 'Integrações', 'RPA'],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serviços de <span className="gradient-text">Elite</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Soluções técnicas de alto nível para empresas que buscam vantagem competitiva real.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i + 1}>
              <div className="group glass rounded-2xl p-8 h-full gradient-border neon-glow-hover transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
