# Modelo de Dados

Os dados de conteúdo são imutáveis, locais e tipados. Os módulos em `src/data/`
exportam constantes compatíveis com as interfaces abaixo; nenhum componente
repete esses valores no JSX.

## `Profile`

Representa a identidade e a trajetória exibidas no hero e em Sobre Mim.

| Campo | Tipo | Obrigatório | Regra |
|---|---|---:|---|
| `name` | `string` | sim | Nome ou identidade profissional não vazio |
| `headline` | `string` | sim | Título de atuação curto |
| `summary` | `string` | sim | Resumo legível para a primeira visita |
| `bio` | `string` | sim | Trajetória profissional resumida |
| `avatarUrl` | `string` | não | URL local ou externa; falha exige fallback |
| `avatarAlt` | `string` | sim se houver imagem | Descrição adequada da imagem |
| `email` | `string` | sim | Endereço para contato direto |
| `location` | `string` | não | Localidade opcional |

## `ContactDetails`

Dados exibidos na seção de contato e no rodapé. Não é uma segunda fonte de
conteúdo: `src/data/profile.ts` exporta `contactDetails` como uma projeção
tipada de `profile.email` e `profile.location`.

| Campo | Tipo | Obrigatório | Regra |
|---|---|---:|---|
| `email` | `string` | sim | O mesmo endereço definido em `Profile.email` |
| `location` | `string` | não | O mesmo valor definido em `Profile.location` |

## `Project`

Item do catálogo exibido em `ProjectCard`.

| Campo | Tipo | Obrigatório | Regra |
|---|---|---:|---|
| `id` | `string` | sim | Identificador estável e único |
| `title` | `string` | sim | Não vazio |
| `description` | `string` | sim | Resumo compreensível mesmo sem links |
| `technologies` | `string[]` | não | Lista vazia não cria seção vazia |
| `imageUrl` | `string` | não | Imagem opcional com `alt` correspondente |
| `imageAlt` | `string` | não | Obrigatório quando `imageUrl` existir |
| `demoUrl` | `string` | não | Só renderizar ação quando válido |
| `codeUrl` | `string` | não | Só renderizar ação quando válido |
| `featured` | `boolean` | não | Padrão `false`; ordenação opcional futura |

## `SkillGroup`

Agrupa habilidades por categoria compreensível.

| Campo | Tipo | Obrigatório | Regra |
|---|---|---:|---|
| `id` | `string` | sim | Único no catálogo |
| `name` | `string` | sim | Nome da categoria |
| `skills` | `string[]` | sim | Pelo menos uma habilidade para renderização útil |

## `SocialLink`

Link profissional reutilizado no hero, contato e footer.

| Campo | Tipo | Obrigatório | Regra |
|---|---|---:|---|
| `id` | `string` | sim | Único |
| `label` | `string` | sim | Nome visível/acessível |
| `url` | `string` | sim | Destino externo válido |
| `icon` | `string` | não | Identificador de ícone, nunca a única informação |
| `newTab` | `boolean` | não | Quando verdadeiro, usar `target="_blank"` e `rel` seguro |

## `ContactFormValues` e estados

`ContactFormValues` contém `name`, `email` e `message`. `ContactFormErrors`
é um registro parcial desses campos mais `form`. `ContactFormState` é uma união
discriminada com `status: 'idle' | 'invalid' | 'submitting' | 'success' | 'error'`,
`values`, `errors` e mensagem opcional.

Validações: nome obrigatório com 1-120 caracteres; e-mail obrigatório com
formato válido e até 254 caracteres; mensagem obrigatória com 10-4000
caracteres. Esses limites impedem entradas abusivas e são compartilhados por
`src/lib/validation.ts` e seus testes. O
estado `invalid` mantém valores válidos e associa cada erro ao seu input.
`submitting` desabilita apenas o submit. `success` e `error` mantêm os valores
para que a pessoa possa revisar ou tentar novamente.

## `Theme`

União literal `'light' | 'dark'`. Somente esses valores podem ser persistidos.
Qualquer outro valor é descartado; a preferência do sistema é usada como
fallback antes de `light`.

## Relacionamentos

- `Profile` referencia `SocialLink[]` por composição em `App`.
- `ProjectsSection` recebe `Project[]`.
- `AboutSection` recebe `SkillGroup[]`.
- `ContactSection` usa `contactDetails` derivado de `profile.ts`; `ContactForm`
	produz `ContactFormValues`.
- `Theme` é estado de interface, não conteúdo persistente do domínio.
