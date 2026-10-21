---
name: Portfólio Davi Sousa
description: Caderno de campo digital para apresentar software, dados e formas de contato.
colors:
  canvas: "#f7f5f0"
  surface: "#ffffff"
  ink: "#172026"
  muted: "#52606a"
  accent: "#d95f4f"
  accent-strong: "#a53b31"
  border: "#d7d2c9"
  success: "#247a55"
  danger: "#b42318"
  dark-canvas: "#172026"
  dark-surface: "#223039"
  dark-muted: "#c4cbd0"
  dark-accent: "#f28a72"
  dark-accent-strong: "#ffb19d"
  dark-border: "#46545d"
  dark-success: "#7ed6a8"
  dark-danger: "#ff958c"
typography:
  display:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.025em"
rounded:
  sm: "6px"
  md: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "40px"
  section: "64px"
  section-wide: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"

# Design System: Portfólio Davi Sousa

## Overview

**Creative North Star: "Caderno de Campo Digital"**

O sistema trata o portfólio como um registro de trabalho em andamento: acolhedor o bastante para convidar uma conversa, direto o bastante para deixar projetos e competências falarem primeiro. A composição é leve e editorial, com fundo de papel, superfícies brancas, tinta azul-petróleo e um coral quente que marca ações e pontos de orientação.

A personalidade aparece em detalhes táteis e honestos: bordas tracejadas nos cartões, links sublinhados, avatar emoldurado e pequenos deslocamentos no hover. A interface evita excesso corporativo, neon, gradientes fortes e maximalismo. O conteúdo permanece arejado, legível e responsivo, com movimento reduzido quando solicitado.

**Key Characteristics:**
- Papel claro e camada escura correspondente para leitura confortável nos dois temas.
- Coral usado como sinal de ação, foco e orientação, não como preenchimento decorativo dominante.
- Tipografia Trebuchet MS com títulos fortes e corpo espaçado.
- Componentes artesanais e táteis, apoiados por bordas, sublinhados e transições curtas.

## Colors

A paleta combina papel marfim, superfícies neutras, tinta azul-petróleo e coral queimado; no tema escuro, preserva o contraste com uma inversão tonal controlada.

### Primary
- **Coral queimado** (`{colors.accent}`): ações primárias, avatar, marcações de foco e pequenos sinais de orientação.
- **Coral profundo** (`{colors.accent-strong}`): hover, links e texto de ação que precisa de contraste maior.

### Neutral
- **Papel marfim** (`{colors.canvas}`): canvas principal no tema claro.
- **Branco de superfície** (`{colors.surface}`): cartões, campos e controles elevados no tema claro.
- **Tinta azul-petróleo** (`{colors.ink}`): títulos, texto principal e contraste estrutural.
- **Cinza de anotação** (`{colors.muted}`): texto secundário, descrições e metadados.
- **Linha de papel** (`{colors.border}`): divisores, bordas e contornos de campos.
- **Verde de confirmação** (`{colors.success}`): sucesso de formulário e estados positivos.
- **Vermelho de atenção** (`{colors.danger}`): erros de validação e falhas.
- **Carvão de canvas** (`{colors.dark-canvas}`): canvas principal no tema escuro.
- **Azul de superfície noturna** (`{colors.dark-surface}`): cartões e campos no tema escuro.

### Named Rules
**The Coral Signal Rule.** O coral deve indicar ação, foco ou orientação; não deve virar textura ou preenchimento indiscriminado.

## Typography

**Display Font:** Trebuchet MS (with sans-serif fallback)
**Body Font:** Trebuchet MS (with sans-serif fallback)
**Label/Mono Font:** Trebuchet MS (with sans-serif fallback)

**Character:** A mesma família mantém a voz próxima e coerente, enquanto peso e escala separam identidade, conteúdo e ação. O corpo usa entre 1rem e 1.125rem com entrelinha generosa para leitura confortável.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5vw, 3.75rem)`, 1.1): nome profissional e primeira impressão.
- **Headline** (700, `clamp(1.875rem, 4vw, 2.25rem)`, 1.2): títulos de seção e blocos principais.
- **Title** (700, 1.25rem, 1.25): títulos de projetos e elementos de conteúdo.
- **Body** (400, 1rem, 1.75): descrições, biografia e instruções; manter linhas em torno de 65–75ch quando possível.
- **Label** (600, 0.875rem, 1.25, `0.025em`): navegação, labels e ações compactas.

### Named Rules
**The One Family Rule.** A hierarquia vem de peso, escala e espaço; não introduzir uma segunda família tipográfica sem uma decisão explícita de identidade.

## Layout

O canvas usa uma coluna central com largura máxima de 1152px e padding horizontal de 20px em telas pequenas, ampliando para 32px a partir do breakpoint `md` de 768px. Seções têm 64px de respiro vertical no mobile e 96px em telas médias. A primeira seção usa uma composição em coluna que se torna duas colunas no desktop, com o avatar separado à direita.

Projetos usam uma grade de uma coluna no mobile, duas colunas a partir de `md` e três a partir de `lg` (1024px), com gap de 24px. O contato muda de uma coluna para uma proporção 0.8fr/1.2fr em telas médias. A navegação permanece flexível e quebra em linhas quando necessário, sem exigir rolagem horizontal.

## Elevation & Depth

O sistema é plano e editorial por padrão. Profundidade vem principalmente de contraste tonal, bordas e ordem espacial; a sombra `shadow-sm` dos cartões é discreta e funcional. Hover pode elevar a percepção com uma escala mínima, sem transformar a página em uma pilha de painéis flutuantes.

### Shadow Vocabulary
- **Sombra curta de cartão** (`shadow-sm`): separa projetos do canvas no repouso, com presença visual baixa.

### Named Rules
**The Flat-by-Default Rule.** Superfícies descansam no plano; sombra e movimento só aparecem para esclarecer agrupamento ou resposta a interação.

## Shapes

Controles e cartões usam cantos moderadamente arredondados (`6px` e `8px`), enquanto chips de tecnologia são totalmente arredondados (`9999px`). Bordas são finas na maioria dos controles e tracejadas nos cartões de projeto, criando a assinatura artesanal sem comprometer a leitura. O avatar é circular, com borda coral de 4px.

## Components

### Buttons
- **Shape:** cantos suaves de 6px (`rounded-md`), altura mínima de 44px e padding horizontal de 20px.
- **Primary:** coral queimado, texto branco de superfície e peso semibold; hover muda para coral profundo.
- **Hover / Focus:** transição curta de cor; foco usa outline coral de 3px com offset de 3px.
- **Secondary:** superfície branca, borda de papel e texto de tinta; hover troca a borda para coral.

### Chips
- **Style:** canvas de papel, texto cinza de anotação, padding compacto e formato pílula.
- **State:** informativo, sem comportamento de seleção; usado para tecnologias de cada projeto.

### Cards / Containers
- **Corner Style:** 8px com borda tracejada de 2px.
- **Background:** superfície branca no claro e azul de superfície noturna no escuro.
- **Shadow Strategy:** sombra curta e discreta, com escala de 1.02 no hover.
- **Border:** tracejada para projetos; sólida para campos e divisores.
- **Internal Padding:** 24px.

### Inputs / Fields
- **Style:** superfície temática, borda sólida de 1px, cantos de 6px, altura mínima de 44px e padding horizontal de 12px.
- **Focus:** outline global coral de 3px com offset de 3px.
- **Error / Disabled:** erro em vermelho de atenção associado ao campo; botão em envio reduz opacidade e usa cursor de espera.

### Navigation
- **Style:** cabeçalho sticky com canvas semitransparente e blur discreto, divisor inferior e nome em tinta.
- **Typography:** links semibold de 14px, cinza de anotação; hover usa coral profundo.
- **Mobile treatment:** flexível e quebrável, com tema acessível como controle nomeado.

### Avatar
- **Style:** círculo responsivo de 160px no mobile e 224px no desktop, superfície temática, borda coral de 4px e iniciais coral profundo quando não há imagem.

## Do's and Don'ts

### Do:
- **Do** usar o coral para indicar o próximo passo e tornar foco, links e ações fáceis de localizar.
- **Do** preservar a alternância claro/escuro usando os papéis tonais correspondentes, não cores novas por componente.
- **Do** manter campos, botões e links com altura e foco suficientes para toque e teclado.
- **Do** usar bordas, sublinhados e pequenos movimentos para expressar personalidade artesanal.

### Don't:
- **Don't** introduzir excesso corporativo, neon, gradientes fortes ou maximalismo.
- **Don't** usar sombra pesada, cartões aninhados ou decoração que concorra com os projetos.
- **Don't** trocar a tipografia por uma família display ornamental sem uma decisão de identidade.
- **Don't** usar coral como fundo dominante de seções inteiras.