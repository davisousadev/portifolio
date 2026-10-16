# Quickstart de Validação

## Pré-requisitos

- Node.js LTS compatível com a versão registrada em `package.json`.
- Dependências instaladas com `npm install`.
- Navegador moderno; para E2E, executar a instalação dos navegadores do Playwright.

## Execução local

```bash
npm install
npm run dev
```

Abrir a URL exibida pelo Vite. A validação visual deve usar servidor HTTP, não
`file://`, para que o fallback de `localStorage` e os assets se comportem como
no ambiente de desenvolvimento.

## Verificações automatizadas

```bash
npm run typecheck
npm run lint
npm run test:run
npm run build
npm run test:e2e
```

Resultados esperados: TypeScript sem erros, lint limpo, testes unitários e de
acessibilidade aprovados, build de produção concluído e Playwright sem falhas.

## Cenários manuais no navegador

1. Em 320 px, 768 px e 1440 px, confirmar ausência de rolagem horizontal,
   conteúdo não sobreposto, cards reorganizados e formulário legível.
2. Percorrer a página apenas com `Tab` e `Shift+Tab`; confirmar ordem lógica,
   foco visível e nomes acessíveis. Ativar e desativar o tema pelo teclado.
3. Alternar entre claro e escuro, recarregar e confirmar a persistência. Testar
   valor inválido no storage e primeira visita com preferência do sistema.
4. Simular avatar indisponível e confirmar fallback textual sem deslocamento
   relevante do layout.
5. Enviar o formulário vazio: erros aparecem junto aos campos e valores válidos
   permanecem. Enviar dados válidos: feedback informa a solicitação ao cliente
   de e-mail. Testar falha e confirmar preservação dos dados.
6. Habilitar redução de movimento no sistema e confirmar que transições não
   essenciais são reduzidas sem remover foco ou feedback.
7. Na seção de projetos, confirmar que itens sem demonstração ou código não
   mostram botões vazios e que ao menos uma ação válida abre em até três
   interações.

## Referências

- Entidades e regras: [data-model.md](./data-model.md)
- Contrato observável: [contracts/ui.md](./contracts/ui.md)
- Requisitos: [spec.md](./spec.md)
