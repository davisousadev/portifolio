import type { ContactDetails, Profile } from '../types/portfolio';

export const profile: Profile = {
  name: 'Davi Sousa',
  headline: 'Desenvolvedor Full Stack e engenheiro de dados',
  summary: 'Crio experiências digitais claras, acessíveis e feitas para durar.',
  bio: 'Atuo entre código, conteúdo e design para transformar problemas complexos em produtos digitais simples de usar.',
  email: 'ola@alexmartins.dev',
  location: 'Fortaleza, CE',
};

export const contactDetails: ContactDetails = {
  email: profile.email,
  ...(profile.location ? { location: profile.location } : {}),
};