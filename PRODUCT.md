# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React, TypeScript, Vite, Tailwind CSS e testes com Vitest/Playwright.

## Users

Recrutadores, empresas e potenciais clientes de software que precisam avaliar rapidamente a atuação, as habilidades e os projetos de Davi Sousa e encontrar uma forma de iniciar contato.

## Product Purpose

Um portfólio web pessoal de página única que apresenta a identidade profissional, a atuação em desenvolvimento full stack e engenharia de dados, projetos publicados, habilidades técnicas e formas de contato. O sucesso é o visitante entender a proposta profissional, encontrar evidências concretas do trabalho e conseguir iniciar uma conversa sem fricção.

## Positioning

Davi Sousa atua entre código, conteúdo e design para transformar problemas complexos em produtos digitais simples de usar, com experiências claras, acessíveis e feitas para durar.

## Operating Context

O visitante chega por uma visita direta ou por um link profissional, percorre as seções Início, Sobre, Projetos e Contato em uma única página e pode abrir repositórios, demonstrações e redes profissionais. A experiência deve funcionar em dispositivos móveis e desktops, em português, com preferência de tema persistida no navegador.

## Capabilities and Constraints

- Apresenta perfil profissional, resumo, trajetória e habilidades agrupadas em Front-end, Back-end, Dados e Fluxo de trabalho.
- Exibe projetos locais estruturados com título, descrição, tecnologias e links opcionais para código e demonstração.
- Oferece contato por e-mail, redes profissionais e formulário com validação, estados de sucesso e falha, preservando os dados em caso de erro.
- Permite alternar entre temas claro e escuro, respeita redução de movimento e prioriza navegação por teclado, semântica, foco visível e contraste adequado.
- A primeira versão é uma página única e não inclui autenticação, área administrativa, banco de dados, backend de mensagens ou blog.
- O conteúdo inicial é mantido em fontes locais separadas da marcação visual.
- Dados atuais de identidade, e-mail, localização, redes e projetos devem ser preservados conforme o conteúdo existente; a validação futura de links e dados de contato permanece uma decisão aberta.

## Brand Commitments

- Nome: Davi Sousa.
- Atuação comunicada: Desenvolvedor Full Stack e engenheiro de dados.
- Resumo: "Crio experiências digitais claras, acessíveis e feitas para durar."
- Localização registrada: Fortaleza, CE.
- Idioma inicial: português.
- Voz profissional, clara e acessível, sem afirmações ou provas que não estejam disponíveis no conteúdo do projeto.

## Evidence on Hand

- Perfil, contato e localização: `src/data/profile.ts`.
- Projetos publicados: `src/data/projects.ts`, incluindo Finance Flow, Micro Commerce, Editais PNCP e Automação de Certificados.
- Habilidades técnicas: `src/data/skills.ts`.
- Redes profissionais: `src/data/socialLinks.ts`.
- Requisitos e critérios de sucesso: `specs/001-web-portfolio/spec.md`.
- Não há depoimentos, métricas de impacto, clientes, pricing ou outras provas comerciais confirmadas; não fabricar esses elementos.

## Product Principles

- Tornar a proposta profissional compreensível em poucos segundos.
- Usar projetos reais como evidência principal da experiência.
- Reduzir barreiras para contato e avaliação técnica.
- Preservar clareza, acessibilidade e legibilidade em qualquer viewport e tema.
- Manter o conteúdo estruturado e fácil de atualizar sem duplicação.

## Accessibility & Inclusion

O produto deve oferecer navegação por teclado, foco visível, ordem de tabulação lógica, landmarks e HTML semântico, nomes acessíveis para controles, textos alternativos quando houver imagens, contraste adequado nos temas e suporte à preferência por redução de movimento. O alvo registrado é acessibilidade básica conforme os requisitos da V1; uma auditoria formal completa pode ocorrer posteriormente.