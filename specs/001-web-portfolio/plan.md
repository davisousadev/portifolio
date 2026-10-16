# Implementation Plan: Portfólio Web Pessoal

**Branch**: `001-web-portfolio` | **Date**: 2026-10-16 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-web-portfolio/spec.md`

## Summary

Construir uma SPA de portfólio pessoal em React, TypeScript estrito e Vite,
com uma página única mobile-first para apresentação profissional, habilidades,
projetos e contato. O conteúdo será mantido em módulos locais tipados, separado
dos componentes visuais. Tailwind CSS fornecerá tokens de design e variantes de
tema; um hook dedicado controlará o tema claro/escuro com persistência em
`localStorage`, fallback para a preferência do sistema e suporte a redução de
movimento. O formulário será client-side, com validação acessível e
encaminhamento explícito por `mailto:`, sem prometer persistência ou entrega de
mensagens fora do escopo da V1.

## Technical Context

**Language/Version**: TypeScript em modo estrito, React 19+ e Node.js LTS compatível com Vite

**Primary Dependencies**: Vite, React, Tailwind CSS (`tailwindcss`, `postcss` e `autoprefixer`), Vitest, React Testing Library, Playwright e axe-core para testes básicos de acessibilidade

**Storage**: Arquivos TypeScript locais para conteúdo; `localStorage` somente para preferência de tema; nenhum backend ou banco de dados

**Testing**: Typecheck, ESLint, Vitest/React Testing Library, axe-core e Playwright para fluxos responsivos no navegador

**Target Platform**: Navegadores modernos em desktop, tablet e mobile; desenvolvimento em Linux com servidor Vite

**Project Type**: Aplicação web frontend estática, SPA de uma página

**Performance Goals**: Carregamento inicial enxuto, sem dependências de runtime desnecessárias; transições perceptivelmente suaves sem bloquear interação

**Constraints**: Sem rolagem horizontal entre 320 px e 1440 px; contraste adequado nos dois temas; sem `any`; dados não podem ser duplicados no JSX; `mailto:` não garante entrega

**Scale/Scope**: Uma página, conteúdo inicial local, catálogo pequeno de projetos, uma experiência de contato e dois temas visuais

## Constitution Check

*GATE: aprovado antes da Fase 0 e reavaliado após a Fase 1.*

| Gate | Avaliação | Evidência planejada |
|---|---|---|
| React + TypeScript + Vite, strict e sem `any` | PASS | `tsconfig` estrito, interfaces em `src/types/`, script `typecheck` |
| Tailwind como sistema visual e mobile-first | PASS | `tailwind.config.ts`, tokens em `src/index.css`, breakpoints e classes utilitárias |
| Componentes e dados separados | PASS | componentes em `src/components/`, dados em `src/data/`, sem conteúdo de domínio hardcoded no JSX |
| Semântica e acessibilidade desde o início | PASS | landmarks, labels, foco visível, `aria-describedby`, `aria-live`, axe e fluxo de teclado |
| Simplicidade e evidência executável | PASS | SPA sem roteador/gerenciador global; typecheck, lint, testes, build e Playwright |
| Fluxo de entrega da Constituição | PASS | quickstart documenta servidor local, breakpoints e verificações; tasks futuras devem registrar resultados |

Não há violações a justificar. A ausência de backend e banco é deliberada e
compatível com FR-012 e com o escopo da V1. O `mailto:` será descrito como
encaminhamento ao cliente de e-mail, não como confirmação de entrega.

## Project Structure

### Documentation (this feature)

```text
specs/001-web-portfolio/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui.md
└── tasks.md                 # criado pelo comando speckit-tasks
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── ButtonLink.tsx
│       ├── ProjectCard.tsx
│       ├── SkillGroup.tsx
│       ├── SocialLinks.tsx
│       ├── ThemeToggle.tsx
│       └── ContactForm.tsx
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── socialLinks.ts
├── hooks/
│   ├── useTheme.ts
│   └── useContactForm.ts
├── lib/
│   ├── contact.ts
│   ├── theme.ts
│   └── validation.ts
├── types/
│   └── portfolio.ts
├── App.tsx
├── main.tsx
└── index.css
public/
└── assets/
    └── avatar.webp
tests/
├── components/
├── hooks/
└── e2e/
tailwind.config.ts
vite.config.ts
vitest.config.ts
playwright.config.ts
tsconfig.json
eslint.config.js
package.json
```

**Structure Decision**: Aplicação frontend única no diretório raiz. A divisão
`components/layout`, `components/sections` e `components/ui` mantém a
responsabilidade visual explícita; `data` contém apenas conteúdo, `types` os
contratos públicos do domínio, `hooks` estado React e `lib` regras sem JSX.
Não haverá `pages/`, backend ou camada de serviço porque a V1 tem uma rota e
nenhuma integração persistente.

## Arquitetura e Componentização

`App` compõe header, conteúdo principal e footer; as seções recebem dados por
props ou importam somente módulos de `src/data/`. O fluxo de componentes é:
`Header`/`ThemeToggle` -> `main` (`HeroSection`, `AboutSection`,
`ProjectsSection`, `ContactSection`) -> `Footer`. Componentes de UI não
conhecem `localStorage` nem montam conteúdo de domínio por conta própria.

| Componente | Responsabilidade | Props principais |
|---|---|---|
| `Header` | Navegação semântica e controle de tema | `items: NavigationItem[]`, `theme: Theme`, `onThemeChange` |
| `ThemeToggle` | Alternar tema com nome acessível e estado anunciado | `theme: Theme`, `onToggle: () => void` |
| `HeroSection` | Primeira impressão, avatar com fallback e CTA | `profile: Profile`, `socialLinks: SocialLink[]` |
| `AboutSection` | Trajetória e agrupamento de habilidades | `profile: Profile`, `skillGroups: SkillGroup[]` |
| `SkillGroup` | Renderizar uma categoria de habilidades | `group: SkillGroup` |
| `ProjectsSection` | Grade responsiva baseada em dados | `projects: Project[]` |
| `ProjectCard` | Resumo, tecnologias e links opcionais | `project: Project` |
| `SocialLinks` | Links externos com ícone/texto acessível | `links: SocialLink[]` |
| `ContactSection` | Contatos diretos, formulário e estados | `contact: ContactDetails`, `onSubmit`; recebe `contactDetails` exportado por `src/data/profile.ts` |
| `ContactForm` | Campos, validação, busy/success/error e preservação | `state: ContactFormState`, `onSubmit`, `onChange`, `onResetStatus` |
| `Footer` | Links finais e copyright | `profileName: string`, `socialLinks: SocialLink[]` |

## Estado, Tema e Formulário

`useTheme` expõe `{ theme, toggleTheme }`. A inicialização consulta uma chave
versionada (`portfolio-theme`) com valores `light`/`dark`; valor inválido ou
falha de leitura usa `matchMedia` e depois `light`. A aplicação do tema ocorre
no elemento `<html>` via classe `dark`, e `document.documentElement.style`
recebe `color-scheme` correspondente. Um pequeno script de inicialização no
HTML deve aplicar a preferência antes do bundle para evitar flash visual. Falha
de `localStorage` não deve impedir a navegação; nesse caso a preferência vive
somente na sessão.

`useContactForm` mantém os valores dos campos e um estado discriminado
`idle | invalid | submitting | success | error`. O submit valida nome, e-mail
e mensagem, associa erros aos campos e preserva dados. Em dados válidos, o
adaptador `lib/contact.ts` constrói uma URL `mailto:` segura; sucesso significa
que a ação de abrir o cliente foi solicitada. Falhas exibem mensagem em
`aria-live` sem limpar o formulário. Não haverá falsa confirmação de entrega.

## Design System e Tailwind

`tailwind.config.ts` usará `darkMode: 'class'`, content glob para `index.html`
e `src/**/*.{ts,tsx}`, além de tokens semânticos: `canvas`, `surface`, `ink`,
`muted`, `accent`, `accent-strong`, `border`, `success` e `danger`, cada qual
com valores claro/escuro definidos em variáveis CSS no `:root` e `.dark`.
Uma paleta de base neutra com acento coral/teal será usada para evitar um tema
monocromático; contraste será verificado em texto, foco e estados. A fonte
principal será uma família local ou carregada com `@font-face` em `public/assets`
quando disponível, com fallback tipado; o plano não depende de uma fonte remota.

`index.css` conterá reset mínimo, `body` com tokens, `:focus-visible`, seleção,
classes reutilizáveis como `.container-page`, `.section-shell` e
`.interactive-outline`, além de `@media (prefers-reduced-motion: reduce)`
desativando transições/animações não essenciais. O layout começa em uma coluna,
usa grid/flex sem largura fixa e os breakpoints `sm`, `md`, `lg` apenas quando
necessário.

## Interfaces e Contratos

As interfaces `Profile`, `Project`, `SkillGroup`, `SocialLink`, `ContactDetails`,
`ContactFormValues`, `ContactFormErrors`, `ContactFormState`, `Theme` e
`NavigationItem` vivem em `src/types/portfolio.ts`. Campos opcionais de projeto
(`image`, `demoUrl`, `codeUrl`, `technologies`) são tratados no componente sem
renderizar ações ou espaços vazios. O contrato visual e o formato exato dos
dados estão detalhados em `contracts/ui.md` e `data-model.md`.

`src/data/profile.ts` é a única fonte dos dados de contato: exporta `profile`
com `email` e `location`, quando disponível, e exporta `contactDetails` como
uma projeção tipada desses campos para `ContactSection`. O contato não deve ser
duplicado em `App.tsx`, no JSX ou em outro módulo de dados.

## Complexity Tracking

Nenhuma violação da Constituição foi identificada; esta seção permanece vazia.

## Reavaliação pós-design

PASS. O design mantém a stack obrigatória, separa dados e apresentação, usa
interfaces explícitas, cobre acessibilidade/tema/responsividade e define
verificações executáveis. O único limite operacional é o `mailto:` sem garantia
de entrega, documentado como comportamento de encaminhamento e coerente com a
restrição de não criar backend na V1.
