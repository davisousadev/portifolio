<!--
Sync Impact Report
- Version change: scaffold -> 1.0.0
- Modified principles: five template placeholders replaced by the portfolio
	architecture, quality, accessibility, responsive design, and maintainability
	principles.
- Added sections: Implementation Standards; Delivery Workflow and Quality Gates.
- Removed sections: none.
- Follow-up TODOs: none.
-->

# Constituição do Portfólio Web

## Princípios Fundamentais

### I. Stack Tipada e Performática (NÃO NEGOCIÁVEL)
O projeto MUST usar React com TypeScript e Vite. O TypeScript MUST permanecer em
modo estrito e o código MUST compilar sem erros antes de qualquer entrega. O uso
de `any` é proibido; interfaces, tipos de domínio, props e retornos públicos
MUST ser declarados explicitamente. Dependências novas MUST ter justificativa
técnica e compatibilidade com a stack existente.

### II. Design System Consistente e Mobile First
A estilização MUST usar Tailwind CSS, priorizando classes utilitárias e tokens
consistentes para espaçamento, cores, tipografia, estados e breakpoints. Todo
layout MUST ser projetado primeiro para telas móveis e MUST se adaptar sem
quebras a tablets e desktops. Componentes visuais MUST reutilizar padrões do
design system em vez de introduzir valores isolados sem justificativa.

### III. Componentes Modulares e Dados Separados
Cada componente MUST ter uma única responsabilidade e permanecer pequeno o
suficiente para ser compreendido e testado isoladamente. Componentes reutilizáveis
MUST ficar em `src/components/`. Conteúdo e dados mockados, incluindo projetos,
experiências, habilidades e redes sociais, MUST ficar em arquivos dedicados de
`src/data/`; dados não podem ser hardcoded no JSX. A lógica de apresentação MUST
ser separada de dados, regras de negócio e integrações.

### IV. Acessibilidade e HTML Semântico
Toda funcionalidade MUST ser utilizável por teclado e MUST preservar foco visível,
ordem de tabulação lógica e alvos interativos adequados. As páginas MUST usar
elementos semânticos como `<header>`, `<main>`, `<section>` e `<footer>` quando
correspondente ao conteúdo. Imagens MUST ter texto alternativo apropriado,
controles MUST ter nome acessível e atributos `aria-*` MUST ser usados quando a
semântica nativa não for suficiente. A acessibilidade não pode ser adicionada
como etapa posterior.

### V. Simplicidade, Manutenibilidade e Evidência
As implementações MUST resolver o requisito com a menor complexidade necessária,
sem abstrações prematuras ou duplicação evitável. Mudanças MUST preservar APIs,
padrões locais e comportamento existente, salvo quando o requisito exigir o
contrário. Cada entrega MUST ter uma verificação executável adequada ao risco,
como typecheck, lint, testes ou validação visual, e erros MUST ser corrigidos na
causa raiz antes do avanço da tarefa.

## Padrões de Implementação

- A estrutura de pastas MUST respeitar as responsabilidades estabelecidas,
	especialmente `src/components/` para componentes e `src/data/` para dados.
- Props e dados MUST usar tipos explícitos e nomes descritivos; variáveis de uma
	letra são proibidas fora de convenções inevitáveis de APIs externas.
- JSX MUST permanecer declarativo. Transformações de dados complexas MUST sair
	do markup e ficar em funções nomeadas e tipadas.
- O código MUST evitar estilos inline e valores mágicos quando Tailwind ou tokens
	do design system puderem expressar a mesma intenção.
- O projeto MUST manter o bundle e o carregamento inicial enxutos; recursos
	pesados MUST ser carregados somente quando necessários.
- Alterações MUST manter o conteúdo legível, o contraste adequado e a interface
	funcional em estados vazios, de carregamento e de erro quando aplicável.

## Workflow e Gates de Qualidade

1. A especificação, o plano e o arquivo `tasks.md` MUST refletir o escopo atual.
	 O `tasks.md` MUST ser atualizado à medida que as funcionalidades forem
	 implementadas, sem marcar tarefas não verificadas como concluídas.
2. Antes de editar, o agente MUST identificar o caminho de código responsável,
	 a hipótese sobre o comportamento e uma verificação que possa falsificá-la.
3. Após criar ou alterar componentes visuais, o agente MUST iniciar ou usar o
	 servidor local e validar a interface no navegador embutido do VS Code, incluindo
	 os breakpoints relevantes quando a mudança for responsiva.
4. O agente MUST executar uma validação focada imediatamente após a edição,
	 priorizando teste, typecheck, lint ou build conforme o risco da alteração.
5. Erros do terminal, do compilador ou do console MUST ser investigados e
	 corrigidos pela causa raiz antes da próxima tarefa. Nenhuma entrega pode
	 prosseguir com falhas conhecidas sem registro explícito no plano.
6. Revisões MUST verificar tipagem estrita, acessibilidade, responsividade,
	 separação de dados, consistência visual e ausência de regressões.

## Governança

Esta Constituição prevalece sobre convenções locais conflitantes e MUST ser
considerada nas fases de especificação, planejamento, implementação e revisão.
Toda exceção MUST ser documentada no plano ou na tarefa correspondente, explicar
o impacto e indicar uma data ou condição para remoção. Alterações na Constituição
exigem atualização do relatório de impacto, justificativa da mudança e revisão do
versionamento semântico.

O versionamento segue estas regras:

- MAJOR: remoção ou redefinição incompatível de um princípio ou gate.
- MINOR: inclusão de princípio, seção ou regra obrigatória materialmente nova.
- PATCH: esclarecimento, correção editorial ou refinamento sem mudança de
	obrigação.

Antes de concluir qualquer tarefa, o agente MUST confirmar aderência a esta
Constituição e registrar pendências em `tasks.md`. Revisões de código MUST rejeitar
mudanças que violem regras não negociáveis, salvo exceção documentada e aprovada.

**Version**: 1.0.0 | **Ratified**: 2026-10-15 | **Last Amended**: 2026-10-15
