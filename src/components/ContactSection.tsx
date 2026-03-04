import { useState } from 'react';
import { Send, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ScrollReveal from './ScrollReveal';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Mensagem enviada!',
      description: 'Entrarei em contato em breve.',
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos <span className="gradient-text">Conversar?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Conte-me sobre seu projeto. Responderei em até 24 horas.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 gradient-border space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Nome</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mensagem</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Descreva seu projeto ou necessidade..."
                  required
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 gap-2"
              >
                <Send size={18} />
                Enviar Mensagem
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass neon-glow-hover transition-all text-sm text-muted-foreground hover:text-foreground"
              >
                <MessageCircle size={18} className="text-green-400" />
                WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/victor-lessa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass neon-glow-hover transition-all text-sm text-muted-foreground hover:text-foreground"
              >
                <Linkedin size={18} className="text-primary" />
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
