import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'finance-flow',
    title: 'Finance Flow',
    description: 'Finance Flow é um sistema para gestão de clientes, planos e assinaturas. ',
    technologies: ['React', 'TypeScript', 'Drizzle', 'Fastify', 'PostgreSQL', 'Fastify', 'TailwindCSS', 'ShadCN'],
    codeUrl: 'https://github.com/davisousadev/finance-flow',
    featured: true,
  },
  {
    id: 'micro-commerce',
    title: 'Micro Commerce',
    description: 'O Micro-commerce é uma aplicação distribuída baseada em microsserviços projetada para ser escalável, resiliente e de fácil manutenção. ',
    technologies: ['Docker', 'Nginx', 'Node.js', 'Fastify',  'PostgreSQL', 'RabbitMQ',  'TypeScript'],
    codeUrl: 'https://github.com/davisousadev/micro-commerce',
  },
  {
    id: 'editais-pncp',
    title: 'Editais PNCP',
    description: 'Coleta e organiza informações sobre editais de pesquisa do Programa Nacional de Cooperação em Pesquisa (PNCP)',
    technologies: ['Python', 'Botcity', 'Pandas', 'loguru', 'SQLite'],
  },
  {
     id: 'automação-de-certificados',
    title: 'Automação de Certificados',
    description: 'Sistema de automação para geração de certificados personalizados. Preenchimento automático de dados e download dos certificados em PDF.',
    technologies: ['Python', 'N8N', 'Next', 'TypeScript', 'TailwindCSS'],
    codeUrl: 'https://github.com/davisousadev/gerador-certificado-web',
    featured: true,
    demoUrl: 'https://gerador-certificado-web.vercel.app/',
  }
];