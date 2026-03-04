import { CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const techCategories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Cloud',
    items: ['Python', 'Node.js', 'AWS', 'Docker'],
  },
  {
    title: 'Automação',
    items: ['N8N', 'Make', 'APIs REST', 'Webhooks'],
  },
  {
    title: 'Metodologias',
    items: ['Clean Code', 'SOLID', 'CI/CD', 'Agile'],
  },
];

const highlights = [
  'Sites rápidos e otimizados para Google',
  'Automações que eliminam trabalho manual',
  'Segurança e proteção de dados',
  'Entrega contínua e suporte dedicado',
];

const TechSection = () => {
  return (
    <section id="tech" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stacks & <span className="gradient-text">Metodologias</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Ferramentas de ponta combinadas com as melhores práticas de engenharia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i + 1}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">{cat.title}</h3>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-8 md:p-12 gradient-border">
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechSection;
