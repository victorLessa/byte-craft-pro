
# Portfolio Profissional — Victor Camara Lessa

## Visão Geral
Site profissional high-tech e minimalista para vender serviços de desenvolvimento de software, automações e agentes de IA. Dark mode com estética glassmorphism e gradientes neon (azul cobalto → violeta).

## Design System
- **Background**: #0a0a0a com grid cibernético sutil animado
- **Cores de destaque**: Gradiente azul cobalto (#3b82f6) → violeta (#8b5cf6)
- **Glassmorphism**: Cards com backdrop-blur, bordas semi-transparentes com gradiente neon
- **Fonte**: Inter (clean, sans-serif)
- **Animações**: Fade-in/slide-up nas seções ao scroll, hover suaves nos cards e botões

## Seções da Landing Page

### 1. Hero Section
- Headline: "Transformando Complexidade Técnica em Vantagem Competitiva."
- Subheadline sobre IA e automação
- Dois CTAs: "Ver Serviços" (scroll) e "Iniciar Projeto" (contato)
- Background com grid animado estilo cybernético

### 2. Sobre (The Professional)
- Foto/avatar estilizado com borda gradiente
- Texto sobre experiência no setor bancário (selo de confiança)
- Métricas de destaque (anos de experiência, projetos entregues, etc.)

### 3. Serviços
- 3 cards glassmorphism com ícones Lucide:
  - **Desenvolvimento de Software** — Sites e sistemas sob medida
  - **Inteligência Artificial** — Agentes autônomos, RAG, LLMs
  - **Automações Inteligentes** — Otimização de processos
- Hover com brilho neon na borda

### 4. Diferencial Técnico (Stacks & Metodologias)
- Grid de ícones/logos das tecnologias (React, Python, LangChain, Cloud, etc.)
- Destaques: código limpo, arquitetura sólida, segurança de dados

### 5. Contato / Lead Capture
- Formulário simplificado (nome, email, mensagem)
- Links diretos para WhatsApp e LinkedIn
- CTA final persuasivo

### 6. Navbar fixa
- Logo/nome, links de navegação por âncora, botão CTA "Contato"
- Efeito blur no scroll

## Aspectos Técnicos
- Totalmente responsivo (mobile-first)
- Animações CSS customizadas (fade-in, slide-up) via Tailwind keyframes
- Componentes modulares para expansão futura
- Nota: Framer Motion não está disponível, mas replicaremos os efeitos com CSS animations e Intersection Observer para trigger no scroll
