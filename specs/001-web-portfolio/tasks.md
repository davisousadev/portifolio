---
description: "Checklist executável para implementação do portfólio web pessoal"
---

# Tasks: Portfólio Web Pessoal

**Input**: Design documents from `specs/001-web-portfolio/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/ui.md`, `quickstart.md` e `.specify/memory/constitution.md`

**Organization**: As tarefas são agrupadas por história de usuário para permitir implementação, validação e entrega incremental.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Criar o esqueleto da SPA React + TypeScript + Vite e configurar as ferramentas previstas no plano.

- [x] T001 Inicializar `package.json` com React 19+, Vite, TypeScript estrito, Tailwind CSS (`tailwindcss`, `postcss` e `autoprefixer`) e scripts `dev`, `typecheck`, `lint`, `test:run`, `build` e `test:e2e`
- [x] T002 Criar `src/main.tsx`, `src/App.tsx` e `src/index.css` com a entrada mínima da aplicação
- [x] T003 [P] Configurar `tsconfig.json` em modo estrito sem permitir `any`
- [x] T004 [P] Configurar `vite.config.ts` com o plugin React e aliases apenas se necessários
- [x] T005 [P] Configurar `tailwind.config.ts` com `darkMode: 'class'`, glob de `index.html` e `src/**/*.{ts,tsx}`
- [x] T006 [P] Configurar `eslint.config.js` para TypeScript/React; o script `lint` deve ser criado somente em T001
- [x] T007 [P] Configurar `vitest.config.ts`, `playwright.config.ts` e os diretórios `tests/components`, `tests/hooks`, `tests/lib` e `tests/e2e`
- [x] T008 Instalar dependências do projeto e registrar o lockfile após `npm install` em `package-lock.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Estabelecer contratos de domínio, tokens, estrutura de dados e utilitários compartilhados que bloqueiam as histórias.

**CRITICAL**: Nenhuma história de usuário deve ser considerada iniciada antes desta fase.

- [x] T009 Definir `Theme`, `NavigationItem`, `Profile`, `Project`, `SkillGroup` e `SocialLink` em `src/types/portfolio.ts`
- [x] T010 Definir `ContactDetails`, `ContactFormValues`, `ContactFormErrors` e a união discriminada `ContactFormState` em `src/types/portfolio.ts`, após T009 no mesmo arquivo
- [x] T011 [P] Criar os tokens claro/escuro, reset mínimo, foco visível, seleção e redução de movimento em `src/index.css`
- [x] T012 [P] Criar a configuração dos tokens semânticos `canvas`, `surface`, `ink`, `muted`, `accent`, `accent-strong`, `border`, `success` e `danger` em `tailwind.config.ts`
- [x] T013 [P] Criar `src/data/profile.ts` com `Profile` não vazio, e-mail de contato e avatar com `avatarAlt` quando `avatarUrl` existir; exportar também `contactDetails: ContactDetails` derivado de `profile.email` e `profile.location`, sem duplicar os dados
- [x] T014 [P] Criar `src/data/skills.ts` com `SkillGroup` contendo identificador único, nome e pelo menos uma habilidade por categoria
- [x] T015 [P] Criar `src/data/socialLinks.ts` com `SocialLink` contendo destinos externos válidos, `label` acessível e `rel` seguro quando `newTab` for verdadeiro
- [x] T016 [P] Criar `src/lib/theme.ts` para aceitar somente `'light' | 'dark'`, descartar valores inválidos e consultar `matchMedia` como fallback
- [x] T017 [P] Criar `src/lib/validation.ts` para validar nome obrigatório com 1-120 caracteres, e-mail obrigatório com formato válido e até 254 caracteres, e mensagem obrigatória com 10-4000 caracteres
- [x] T018 Criar `index.html` com script inicial que aplica a preferência válida de `portfolio-theme` em `<html>` antes do bundle
- [x] T019 Executar `npm run typecheck` e `npm run lint` sobre `src/`, `tests/`, `vite.config.ts`, `vitest.config.ts` e `playwright.config.ts` antes de iniciar as histórias

**Checkpoint**: A fundação está pronta quando os contratos tipados, tokens e utilitários compilam sem erros e não existe `any` no código do projeto.

---

## Phase 3: User Story 1 - Conhecer o profissional e sua proposta (Priority: P1) 🎯 MVP

**Goal**: Apresentar identidade, atuação, resumo, avatar/fallback, trajetória, habilidades e formas diretas de contato em uma página semântica navegável.

**Independent Test**: A partir de uma visita nova, identificar nome, atuação, uma habilidade e um contato; navegar por `inicio`, `sobre`, `projetos` e `contato` via teclado sem rolagem horizontal em 320 px.

### Tests for User Story 1

- [x] T020 [P] [US1] Criar teste de `HeroSection`, `AboutSection` e landmarks semânticos em `tests/components/sections.test.tsx`
- [x] T021 [P] [US1] Criar teste de `Header`, `Footer` e links sociais com nomes acessíveis em `tests/components/layout.test.tsx`
- [x] T022 [P] [US1] Criar teste axe-core da composição inicial em `tests/components/accessibility.test.tsx`

### Implementation for User Story 1

- [x] T023 [P] [US1] Implementar `ButtonLink` com nome acessível, foco visível e variantes utilitárias em `src/components/ui/ButtonLink.tsx`
- [x] T024 [P] [US1] Implementar `SocialLinks` para links externos, `target` e `rel` seguros em `src/components/ui/SocialLinks.tsx`
- [x] T025 [P] [US1] Implementar `ThemeToggle` com ação anunciada para ativar o próximo tema em `src/components/ui/ThemeToggle.tsx`
- [x] T026 [P] [US1] Implementar `Section` com heading, id estável e estilos responsivos em `src/components/layout/Section.tsx`
- [x] T027 [US1] Implementar `useTheme` para aplicar `dark` e `color-scheme` no `<html>` e tolerar falhas de `localStorage` em `src/hooks/useTheme.ts`
- [x] T028 [US1] Implementar `Header` com `<header>`, navegação por âncoras `inicio`, `sobre`, `projetos` e `contato` e `ThemeToggle` em `src/components/layout/Header.tsx`
- [x] T029 [US1] Implementar `HeroSection` com identidade, título, resumo, avatar e fallback textual sem deslocamento relevante em `src/components/sections/HeroSection.tsx`
- [x] T030 [US1] Implementar `SkillGroup` com categoria e habilidades em `src/components/ui/SkillGroup.tsx`
- [x] T031 [US1] Implementar `AboutSection` com trajetória e grupos de habilidades em `src/components/sections/AboutSection.tsx`
- [x] T032 [US1] Implementar `Footer` com contato essencial, redes sociais e copyright em `src/components/layout/Footer.tsx`
- [x] T033 [US1] Compor `Header`, `HeroSection`, `AboutSection`, uma âncora de projetos e `Footer` em `src/App.tsx`
- [x] T034 [US1] Validar visualmente `src/App.tsx`, `src/components/layout/Header.tsx` e `src/components/sections/HeroSection.tsx` no navegador em 320 px, 768 px e 1440 px
- [x] T035 [US1] Validar no navegador a ordem de `Tab`/`Shift+Tab`, foco visível, landmarks e alternância de tema por teclado em `src/components/layout/Header.tsx`
- [x] T036 [US1] Executar `npm run typecheck`, `npm run lint` e os testes `tests/components/sections.test.tsx`, `tests/components/layout.test.tsx` e `tests/components/accessibility.test.tsx`

**Checkpoint**: US1 é entregável quando a apresentação profissional, navegação semântica, trajetória, habilidades e contato direto funcionam independentemente.

---

## Phase 4: User Story 2 - Avaliar projetos publicados (Priority: P1)

**Goal**: Exibir um catálogo local tipado de projetos em cards responsivos com tecnologias e somente as ações externas disponíveis.

**Independent Test**: Na seção de projetos, percorrer vários cards em mobile, tablet e desktop, entender cada descrição e abrir uma demonstração ou repositório válido em até três interações.

### Tests for User Story 2

- [x] T037 [P] [US2] Criar `src/data/projects.ts` com `Project` contendo `id`, `title` e `description` não vazios, tecnologias opcionais e URLs opcionais válidas
- [x] T038 [P] [US2] Criar teste de `ProjectCard` para tecnologias, imagem opcional e ausência de ações vazias em `tests/components/project-card.test.tsx`
- [x] T039 [P] [US2] Criar teste de integração da grade e dos links externos em `tests/components/projects-section.test.tsx`

### Implementation for User Story 2

- [x] T040 [US2] Implementar `ProjectCard` com descrição compreensível, tags condicionais, imagem com `imageAlt` e ações `Demonstração`/`Código` apenas para URLs presentes em `src/components/ui/ProjectCard.tsx`
- [x] T041 [US2] Implementar `ProjectsSection` com heading `projetos`, grade de uma coluna em mobile, duas colunas a partir de `md` e três colunas a partir de `lg` em `src/components/sections/ProjectsSection.tsx`
- [x] T042 [US2] Integrar `projects` em `src/App.tsx` sem duplicar conteúdo de domínio no JSX
- [x] T043 [US2] Validar no navegador a grade, ausência de rolagem horizontal e ausência de ações inválidas em `src/components/sections/ProjectsSection.tsx`
- [x] T044 [US2] Verificar no navegador que um projeto abre demonstração ou código em até três interações nos viewports 320 px, 768 px e 1440 px em `tests/e2e/projects.spec.ts`
- [x] T045 [US2] Executar `npm run typecheck`, `npm run lint`, `npm run test:run` e `npm run build` para `src/components/ui/ProjectCard.tsx`, `src/components/sections/ProjectsSection.tsx` e `tests/components/projects-section.test.tsx`

**Checkpoint**: US1 e US2 devem continuar funcionando, e a seção de projetos deve ser compreensível sem depender de links opcionais.

---

## Phase 5: User Story 3 - Personalizar a leitura e concluir um contato (Priority: P2)

**Goal**: Completar alternância persistente de temas e fluxo de formulário client-side com validação, estados acessíveis e encaminhamento `mailto:` honesto.

**Independent Test**: Alternar tema, recarregar para confirmar persistência, enviar o formulário vazio para ver erros associados e enviar dados válidos para receber confirmação de que o cliente de e-mail foi solicitado.

### Tests for User Story 3

- [x] T046 [P] [US3] Criar testes de fallback, persistência e valor inválido de tema em `tests/hooks/use-theme.test.tsx`
- [x] T047 [P] [US3] Criar testes de `mailto:` seguro e codificado em `tests/lib/contact.test.ts`
- [x] T048 [P] [US3] Criar testes de validação, preservação de valores e estados discriminados em `tests/hooks/use-contact-form.test.tsx`
- [x] T049 [P] [US3] Criar teste axe-core dos campos, erros com `aria-describedby` e feedback `aria-live` em `tests/components/contact-form-accessibility.test.tsx`

### Implementation for User Story 3

- [x] T050 [P] [US3] Implementar `buildMailtoUrl` com `mailto:<email>?subject=...&body=...` codificado em `src/lib/contact.ts`
- [x] T051 [US3] Implementar `useContactForm` com estados `idle`, `invalid`, `submitting`, `success` e `error`, preservando valores após erro em `src/hooks/useContactForm.ts`
- [x] T052 [US3] Implementar `ContactForm` com labels visíveis, `aria-describedby`, foco no primeiro erro, submit desabilitado apenas em `submitting` e `aria-live="polite"` em `src/components/ui/ContactForm.tsx`
- [x] T053 [US3] Implementar `ContactSection` com contato direto, redes sociais, formulário e alternativa visível ao e-mail em `src/components/sections/ContactSection.tsx`
- [x] T054 [US3] Integrar `ContactSection` e `useContactForm` em `src/App.tsx`, comunicando solicitação ao cliente de e-mail sem afirmar entrega
- [x] T055 [US3] Validar no navegador alternância claro/escuro, recarga, storage inválido, preferência do sistema e redução de movimento em `src/hooks/useTheme.ts` e `src/index.css`
- [x] T056 [US3] Validar no navegador formulário vazio, e-mail inválido, sucesso `mailto:` e falha sem perder valores em `src/components/ui/ContactForm.tsx`
- [x] T057 [US3] Criar fluxo Playwright de tema, teclado, formulário e breakpoints 320 px, 768 px e 1440 px em `tests/e2e/portfolio.spec.ts`
- [x] T058 [US3] Executar `npm run typecheck`, `npm run lint`, `npm run test:run`, `npm run build` e `npm run test:e2e` em `src/`, `tests/` e `package.json`

**Checkpoint**: Todos os cenários de tema, formulário, acessibilidade e movimento devem estar verificáveis sem backend, banco ou falsa confirmação de entrega.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Consolidar qualidade, documentação e validação final contra a Constituição e o quickstart.

- [ ] T059 [P] Otimizar e documentar o avatar/fallback em `public/assets/avatar.webp` e `src/components/sections/HeroSection.tsx`
- [x] T060 [P] Revisar textos, contraste e tokens dos dois temas em `src/index.css` e `tailwind.config.ts`
- [x] T061 [P] Revisar separação de dados, props explícitas e ausência de `any` em `src/data/`, `src/types/` e `src/components/`
- [x] T062 Executar o quickstart completo conforme `specs/001-web-portfolio/quickstart.md`: executar primeiro `npm install`; depois iniciar `npm run dev` em terminal separado e mantê-lo ativo; em outro terminal executar `npm run typecheck`, `npm run lint`, `npm run test:run`, `npm run build` e `npm run test:e2e`
- [x] T063 Executar a inspeção manual final de teclado, foco, landmarks, alt text e contraste descrita em `specs/001-web-portfolio/contracts/ui.md`
- [x] T064 Executar a matriz visual final sem rolagem horizontal em `specs/001-web-portfolio/quickstart.md` para 320 px, 375 px, 768 px, 1024 px e 1440 px
- [x] T065 Registrar resultados, pendências e qualquer exceção à Constituição em `specs/001-web-portfolio/tasks.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Sem dependências; cria a aplicação e as ferramentas.
- **Foundational (Phase 2)**: Depende da Phase 1 e bloqueia todas as histórias.
- **User Story 1 (Phase 3)**: Depende da Phase 2; entrega o MVP de apresentação profissional.
- **User Story 2 (Phase 4)**: Depende da Phase 2 e integra com `src/App.tsx`; pode ser implementada após a base de US1 estar disponível.
- **User Story 3 (Phase 5)**: Depende da Phase 2 e integra com `src/App.tsx`; pode ser implementada após a base de US1 estar disponível.
- **Polish (Phase 6)**: Depende das histórias desejadas e de seus checks executáveis.

### User Story Dependencies

- **US1 (P1)**: Pode começar após a fundação; é o MVP recomendado e não depende de US2 ou US3.
- **US2 (P1)**: Pode começar após a fundação; requer apenas a composição da aplicação e permanece testável pela seção de projetos.
- **US3 (P2)**: Pode começar após a fundação; requer apenas a composição da aplicação e permanece testável pelo tema e formulário.

### Within Each User Story

- Testes específicos vêm antes da implementação correspondente quando possível.
- Tipos e dados vêm antes dos componentes que os consomem.
- Utilitários/hooks vêm antes das seções que os integram.
- A validação focada ocorre após cada incremento visual ou funcional.
- Uma história só é concluída após seu checkpoint independente.

### Parallel Opportunities

- T003-T007 podem ser executadas em paralelo após T001-T002.
- T010 deve seguir T009 por alterar o mesmo arquivo; T011-T017 podem ser divididas por arquivo após T002 e T005.
- T020-T022 podem ser criadas em paralelo; T023-T026 e T029-T032 também podem ser divididas por componente.
- US2 e US3 podem avançar em paralelo depois de T033, desde que a composição de `src/App.tsx` seja coordenada.
- T037-T039 e T046-T049 são grupos de testes/dados independentes dentro de suas histórias.
- T059-T061 são revisões independentes antes da validação final.

## Parallel Example: User Story 1

```text
Após T019:
- T020: testes das seções em tests/components/sections.test.tsx
- T021: testes de layout em tests/components/layout.test.tsx
- T022: teste axe-core em tests/components/accessibility.test.tsx
- T023: ButtonLink em src/components/ui/ButtonLink.tsx
- T024: SocialLinks em src/components/ui/SocialLinks.tsx
- T026: Section em src/components/layout/Section.tsx
```

## Parallel Example: User Story 3

```text
Após T019:
- T046: testes de useTheme em tests/hooks/use-theme.test.tsx
- T047: testes de contact em tests/lib/contact.test.ts
- T048: testes de useContactForm em tests/hooks/use-contact-form.test.tsx
- T050: buildMailtoUrl em src/lib/contact.ts
```

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Completar Phase 1: Setup.
2. Completar Phase 2: Foundational e confirmar `typecheck`/`lint`.
3. Completar Phase 3: User Story 1.
4. Parar no checkpoint e validar no navegador em 320 px, 768 px e 1440 px.
5. Demonstrar o MVP com identidade, proposta, habilidades e contato direto.

### Incremental Delivery

1. Setup + Foundational: base compilável e tokens prontos.
2. US1: apresentação profissional e navegação semântica.
3. US2: catálogo de projetos com ações condicionais.
4. US3: tema persistente e formulário com `mailto:`.
5. Polish: quickstart, E2E, acessibilidade, responsividade e aderência à Constituição.

## Notes

- Todas as tarefas usam `- [ ]`, ID sequencial e descrição com caminho de arquivo.
- `[P]` aparece somente em tarefas separáveis por arquivo e sem dependência de trabalho incompleto.
- Labels `[US1]`, `[US2]` e `[US3]` aparecem apenas nas fases das histórias correspondentes.
- Testes foram incluídos porque o plano e o quickstart especificam Vitest, Testing Library, axe-core e Playwright.
- O formulário não promete entrega: sucesso significa apenas que a abertura do cliente de e-mail foi solicitada.
- Validação final: `npm run typecheck`, `npm run lint`, `npm run test:run`, `npm run build` e `npm run test:e2e` passaram; Vitest executou 14 testes e Playwright 2 cenários.
- Validação visual: sem rolagem horizontal em 320, 375, 768, 1024 e 1440 px; navegação por teclado, tema, foco no primeiro erro e landmarks verificados.
- Pendência: T059 permanece aberto porque nenhum asset `public/assets/avatar.webp` foi fornecido; o fallback textual `AM` está implementado e validado.
