import { Shield, TrendingUp, Award, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const metrics = [
  { icon: TrendingUp, value: '8+', label: 'Anos de Experiência' },
  { icon: Award, value: '50+', label: 'Projetos Entregues' },
  { icon: Shield, value: '100%', label: 'Dados Seguros' },
  { icon: Users, value: '30+', label: 'Clientes Satisfeitos' },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary to-secondary p-[3px]">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold gradient-text">VL</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                  <Shield size={24} className="text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Victor Camara <span className="gradient-text">Lessa</span>
              </h2>
              <p className="text-sm uppercase tracking-widest text-primary mb-6 font-medium">
                Engenheiro de Software & Especialista em IA
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-xl mb-4">
                Com ampla experiência no <strong className="text-foreground">setor bancário</strong>, trago a disciplina
                de ambientes que exigem <strong className="text-foreground">segurança máxima, alta disponibilidade
                e escalabilidade</strong> para cada projeto.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Minha missão é traduzir complexidade técnica em resultados reais para o seu negócio —
                desde automações inteligentes até agentes de IA que trabalham por você 24/7.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i + 1}>
              <div className="glass rounded-xl p-6 text-center neon-glow-hover transition-all duration-300">
                <m.icon size={24} className="mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold gradient-text mb-1">{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
