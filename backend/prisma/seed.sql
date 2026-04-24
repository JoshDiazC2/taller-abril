-- seed.sql — datos iniciales del portal ACECOM.
-- Se ejecuta con `npm run db:seed` o automáticamente después de `npm run db:migrate` / `npm run db:init`.
-- Para agregar o cambiar datos, edita este archivo y corre `npm run db:reset`
-- (borra la DB y vuelve a aplicar migraciones + este seed).

-- ==============================
-- Miembros de ACECOM
-- ==============================

INSERT OR REPLACE INTO Member (id, name, role, bio, instagramUrl, linkedinUrl, githubUrl) VALUES
  ('m1', 'Jose Muñoz', 'Presidente',
   'Preside ACECOM y representa a la asociación ante la universidad.',
   NULL, NULL, NULL),

  ('m2', 'Andy Yamil', 'Secretario',
   'Lleva la agenda y las actas de la asociación; mantiene la memoria de ACECOM.',
   NULL, NULL, NULL),

  ('m3', 'Percy Huaman', 'Tesorero',
   'Administra las finanzas y el presupuesto de cada actividad de ACECOM.',
   NULL, NULL, NULL),

  ('m4', 'Sergio Pezo', 'Miembro Activo',
   'Miembro activo de ACECOM; participa en talleres y proyectos de desarrollo.',
   'https://www.instagram.com/sergiopezoj/',
   'https://www.linkedin.com/in/sergio-pezo/',
   'https://github.com/thsergitox'),

  ('m5', 'Omar Vite', 'Miembro Activo',
   'Miembro activo de ACECOM; colabora en talleres y eventos de la asociación.',
   'https://www.instagram.com/vite_bao/',
   'https://www.linkedin.com/in/omar-vite-allca-647754263/',
   'https://github.com/omarbvitea');

-- ==============================
-- Talleres
-- ==============================

INSERT OR REPLACE INTO Workshop (id, title, description) VALUES
  ('w1', 'Introducción al desarrollo web moderno',
   'Recorrido práctico por frontend, backend y despliegue. La base para quienes recién se inician en desarrollo web.'),

  ('w2', 'Git y flujo de ramas en equipos',
   'Cómo trabajar con ramas feature, desarrollar en paralelo y resolver conflictos sin perder horas.'),

  ('w3', 'APIs con Fastify y OpenAPI',
   'Diseño de una API con contrato claro y documentación automática usando Fastify y OpenAPI.'),

  ('w4', 'Docker para despliegues simples',
   'Empaquetar una aplicación con Docker y acercarla a producción sin complicaciones.');

-- ==============================
-- Post del blog
-- (authorId → Member.id; body = markdown)
-- ==============================

INSERT OR REPLACE INTO Post (id, title, slug, excerpt, body, authorId, publishedAt) VALUES
  ('p1', '¿Por qué separar frontend y backend?', 'por-que-separar-frontend-backend',
   'Una pequeña guía sobre por qué tiene sentido construir frontend y backend como dos piezas distintas que se comunican por una API.',
   '## Responsabilidades distintas

El frontend se dedica a la presentación y a la interacción con la persona usuaria.
El backend se ocupa de la lógica del dominio y de servir datos.

## Beneficios

- Se pueden desarrollar en paralelo por equipos distintos.
- Se puede reemplazar una capa sin tocar la otra.
- El contrato entre ambas queda explícito en la API.',
   'm4', '2026-04-10T00:00:00.000Z');

-- ==============================
-- Relación Taller ↔ Expositores
-- (qué miembros presentan cada taller)
-- ==============================

INSERT OR REPLACE INTO WorkshopPresenter (workshopId, memberId) VALUES
  ('w1', 'm4'), -- Sergio presenta el taller de desarrollo web
  ('w1', 'm5'), -- junto con Omar
  ('w2', 'm1'), -- Jose presenta Git
  ('w2', 'm2'), -- junto con Andy
  ('w3', 'm4'), -- Sergio presenta APIs con Fastify
  ('w3', 'm1'), -- junto con Jose
  ('w4', 'm5'), -- Omar presenta Docker
  ('w4', 'm3'); -- junto con Percy
