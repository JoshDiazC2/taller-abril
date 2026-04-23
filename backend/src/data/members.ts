export type Member = {
  id: string
  name: string
  role: string
  bio: string
  avatarUrl?: string | null
  instagramUrl?: string | null
  linkedinUrl?: string | null
  githubUrl?: string | null
}

export const members: Member[] = [
  {
    id: 'm1',
    name: 'Ana Rojas',
    role: 'Presidenta',
    bio: 'Lidera la dirección general de ACECOM y coordina la agenda académica.',
    instagramUrl: 'https://instagram.com/ana.rojas',
    linkedinUrl: 'https://linkedin.com/in/ana-rojas',
    githubUrl: 'https://github.com/anarojas',
  },
  {
    id: 'm2',
    name: 'Luis Vargas',
    role: 'Vicepresidente',
    bio: 'Apoya a la presidencia y gestiona las alianzas con otras asociaciones.',
    instagramUrl: 'https://instagram.com/luis.vargas',
    linkedinUrl: 'https://linkedin.com/in/luis-vargas',
    githubUrl: 'https://github.com/luisvargas',
  },
  {
    id: 'm3',
    name: 'Camila Torres',
    role: 'Coordinadora de talleres',
    bio: 'Diseña y organiza la programación de talleres abiertos a la comunidad.',
    instagramUrl: 'https://instagram.com/cami.torres',
    linkedinUrl: 'https://linkedin.com/in/camila-torres',
    githubUrl: 'https://github.com/camitorres',
  },
  {
    id: 'm4',
    name: 'Diego Salinas',
    role: 'Coordinador técnico',
    bio: 'Mantiene la infraestructura y los repositorios compartidos de la asociación.',
    instagramUrl: 'https://instagram.com/diego.salinas',
    linkedinUrl: 'https://linkedin.com/in/diego-salinas',
    githubUrl: 'https://github.com/diegosalinas',
  },
  {
    id: 'm5',
    name: 'María Fernández',
    role: 'Coordinadora de comunicaciones',
    bio: 'Administra las redes sociales y la difusión de los eventos de ACECOM.',
    instagramUrl: 'https://instagram.com/maria.fernandez',
    linkedinUrl: 'https://linkedin.com/in/maria-fernandez',
    githubUrl: 'https://github.com/mariafdz',
  },
  {
    id: 'm6',
    name: 'Jorge Mendoza',
    role: 'Tesorero',
    bio: 'Lleva las finanzas de la asociación y el presupuesto de cada actividad.',
    instagramUrl: 'https://instagram.com/jorge.mendoza',
    linkedinUrl: 'https://linkedin.com/in/jorge-mendoza',
    githubUrl: 'https://github.com/jmendoza',
  },
]
