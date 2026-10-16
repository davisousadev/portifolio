# Contrato de Interface do Portfólio

Este contrato descreve o comportamento observável da SPA. Não há API HTTP na
V1; os contratos externos são links profissionais, o cliente de e-mail e os
controles da interface.

## Landmarks e navegação

- Um `<header>` contém a navegação principal e o controle de tema.
- Um único `<main>` contém as seções com ids estáveis: `inicio`, `sobre`,
  `projetos` e `contato`.
- Um `<footer>` repete contatos essenciais sem duplicar ações inválidas.
- Links de navegação levam às seções por âncoras e preservam foco visível.

## Projetos

Cada projeto renderiza título, descrição e tecnologias quando disponíveis. Ações
`Demonstração` e `Código` aparecem somente quando o respectivo URL existe. Links
externos usam nome acessível, `rel="noreferrer"` quando abrirem nova aba e nunca
apontam para destinos vazios.

## Tema

O botão de tema tem nome acessível que informa a ação seguinte, por exemplo
`Ativar tema escuro` ou `Ativar tema claro`. A classe `dark` é aplicada ao
`<html>`, a preferência válida é armazenada em `localStorage` sob
`portfolio-theme` e o valor permanece após reload. A interface também respeita
`prefers-reduced-motion`.

## Formulário

Campos obrigatórios: `name`, `email` e `message`, cada um com `<label>` visível.
Erros são associados por `aria-describedby`, o estado geral é anunciado por
`aria-live="polite"` e o foco pode ir para o primeiro erro após submit inválido.
Os valores preenchidos permanecem após validação ou falha de `mailto:`.

Com dados válidos, o formulário entra em `submitting` e solicita a abertura de
`mailto:<email>?subject=...&body=...`. O feedback de sucesso deve dizer que o
cliente de e-mail foi aberto/solicitado; não deve afirmar que a mensagem foi
entregue. Se a ação falhar, o formulário entra em `error` e oferece a alternativa
visível de usar o endereço de e-mail direto.

## Critérios de responsividade

A largura útil não deve produzir rolagem horizontal em 320, 375, 768, 1024 e
1440 px. O catálogo usa uma coluna em mobile, duas em tablet e uma grade maior
em desktop quando o conteúdo permitir. Campos de contato permanecem utilizáveis
em teclado e toque, sem texto cortado ou sobreposto.