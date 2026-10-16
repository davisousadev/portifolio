import type { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    name: 'Front-end',
    skills: ['React', 'TypeScript', 'HTML semântico', 'Responsive Design', 'Next.js', 'Acessibilidade' ],
  },
  {
    id: 'backend',
    name: 'Back-end',
    skills: ['API REST', 'Fastify', 'NestJS', 'Drizzle', 'PostgreSQL'],
  },    
  {
    id: 'dados',
    name: 'Dados',
    skills: ['python', 'spark', 'airflow', 'ETL', 'SQL', "RPA", 'pandas'],
  },
  {
    id: 'workflow',
    name: 'Fluxo de trabalho',
    skills: ['Git', 'Testes automatizados', 'Documentação', 'IA', 'Docker', 'Agile'],
  },
];