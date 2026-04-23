export type Workshop = {
  id: string
  title: string
  description: string
  presenterIds: string[]
}

export const workshops: Workshop[] = [
  {
    id: 'w1',
    title: 'Introducción al desarrollo web moderno',
    description:
      'Recorrido práctico por frontend, backend y despliegue. La base para quienes recién se inician en desarrollo web.',
    presenterIds: ['m1', 'm3'],
  },
  {
    id: 'w2',
    title: 'Git y flujo de ramas en equipos',
    description:
      'Cómo trabajar con ramas feature, desarrollar en paralelo y resolver conflictos sin perder horas.',
    presenterIds: ['m2'],
  },
  {
    id: 'w3',
    title: 'APIs con Fastify y OpenAPI',
    description:
      'Diseño de una API con contrato claro y documentación automática usando Fastify y OpenAPI.',
    presenterIds: ['m4', 'm1'],
  },
  {
    id: 'w4',
    title: 'Docker para despliegues simples',
    description:
      'Empaquetar una aplicación con Docker y acercarla a producción sin complicaciones.',
    presenterIds: ['m4'],
  },
]
