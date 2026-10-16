# Research: Portfólio Web Pessoal

## React + TypeScript + Vite

- **Decision**: Usar React com TypeScript estrito e Vite como aplicação frontend única.
- **Rationale**: É a stack obrigatória da Constituição, oferece feedback rápido no desenvolvimento e é suficiente para uma página sem SSR, rotas ou backend.
- **Alternatives considered**: Next.js adicionaria roteamento/SSR sem necessidade; JavaScript não atende à tipagem obrigatória.

## Tailwind CSS

- **Decision**: Usar Tailwind CSS com `darkMode: 'class'`, tokens semânticos e classes utilitárias.
- **Rationale**: Atende diretamente ao princípio de design system, mantém breakpoints mobile-first e evita estilos isolados. Variáveis CSS permitem trocar cores com consistência entre temas.
- **Alternatives considered**: CSS Modules e styled-components entram em conflito com a Constituição; CSS puro aumentaria a chance de valores duplicados.

## Dados locais e tipagem

- **Decision**: Manter perfil, projetos, habilidades e redes sociais em módulos TypeScript dedicados de `src/data/`, validados por interfaces de `src/types/`.
- **Rationale**: Satisfaz FR-004, evita duplicação no JSX e permite que novos projetos sejam adicionados sem alterar a estrutura visual.
- **Alternatives considered**: JSON sem validação em compilação e CMS/backend introduziriam complexidade e infraestrutura fora do escopo.

## Tema persistido

- **Decision**: Aplicar classe `dark` em `<html>`, ler/escrever `localStorage` com fallback para `matchMedia('(prefers-color-scheme: dark)')` e aplicar o valor antes do bundle.
- **Rationale**: Combina preferência manual persistida com uma primeira visita confortável e reduz o flash de tema. Valores inválidos e falhas de storage caem para uma opção legível.
- **Alternatives considered**: Apenas `prefers-color-scheme` não preserva escolha manual; apenas `localStorage` ignora a preferência inicial do sistema; Zustand/Redux seriam estado global desnecessário.

## Formulário sem backend

- **Decision**: Validar client-side, preservar dados em erro e encaminhar por `mailto:`. O status de sucesso comunica apenas que o cliente de e-mail foi solicitado.
- **Rationale**: A especificação exclui backend e banco. A interface continua útil sem simular entrega de mensagem.
- **Alternatives considered**: Formspree, FormSubmit e Netlify Forms exigem configuração externa, mudam o modelo de privacidade e podem falhar fora de um ambiente hospedado configurado.

## Acessibilidade e movimento

- **Decision**: Usar HTML semântico, labels nativos, `aria-describedby`, `aria-live`, `:focus-visible`, `alt` significativo e `prefers-reduced-motion`.
- **Rationale**: Cobre FR-008 a FR-011 e torna o fluxo de teclado verificável. axe-core complementará, mas não substituirá, a inspeção manual.
- **Alternatives considered**: Snapshots isolados não detectam foco, overflow, ordem de tabulação nem mudanças de viewport.

## Testes e validação

- **Decision**: Usar Vitest/React Testing Library para lógica e estados, axe-core para acessibilidade básica e Playwright para navegação, tema, formulário e breakpoints de 320, 768 e 1440 px.
- **Rationale**: Cada ferramenta cobre um risco diferente: compilação estrita, comportamento de componentes, acessibilidade e experiência real no navegador.
- **Alternatives considered**: Apenas testes unitários não comprovam responsividade; apenas inspeção manual é repetitiva e não deixa uma verificação executável.

## Riscos residuais

- `localStorage` pode ser bloqueado, especialmente em modo privado ou origem `file://`; executar a validação pelo servidor Vite e manter fallback em memória.
- `mailto:` depende de um cliente de e-mail instalado e não confirma entrega.
- Imagens remotas podem falhar; preferir avatar local otimizado com fallback textual.
- A versão do Node deve ser fixada/documentada pelo scaffold e pelo lockfile.
