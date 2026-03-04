import { Globe, Zap, Code } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Sites Institucionais',
    description: 'Sites profissionais que transmitem credibilidade e autoridade para sua empresa. Design moderno, responsivo e otimizado para conversão e SEO.',
    tags: ['Landing Pages', 'Sites Corporativos', 'SEO'],
  },
  {
    icon: Zap,
    title: 'Automação de Processos',
    description: 'Eliminação de tarefas manuais e repetitivas que consomem tempo da sua equipe. Workflows inteligentes que economizam horas e reduzem erros.',
    tags: ['Workflows', 'Integrações', 'RPA'],
  },
  {
    icon: Code,
    title: 'Sistemas Web sob Medida',
    description: 'Aplicações e painéis administrativos desenvolvidos para as necessidades específicas do seu negócio, com foco em usabilidade e performance.',
    tags: ['Web Apps', 'Dashboards', 'APIs'],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Posso <span className="gradient-text">Ajudar</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Soluções práticas para empresas que precisam de presença digital forte e processos mais eficientes.
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
