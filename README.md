# API REST - Node.js + Express + Prisma + Supabase

## Descripción
API REST para gestión de usuarios y tareas construida con Node.js, Express, Prisma y PostgreSQL en Supabase.

## Instalación
```bash
npm install
```

## Configuración

Crea un archivo `.env` con tu cadena de conexión a Supabase:
```env
DATABASE_URL="postgresql://..."
```

## Ejecutar migraciones
```bash
npx prisma migrate dev
```

## Iniciar servidor
```bash
npm start
```

El servidor corre en `http://localhost:3000`

## Endpoints

### Users
- `POST /users` - Crear usuario
- `GET /users` - Listar usuarios
- `GET /users/:id` - Obtener usuario por ID

### Tasks
- `POST /tasks` - Crear tarea
- `GET /tasks` - Listar tareas
- `GET /tasks/user/:userId` - Listar tareas por usuario

## Tecnologías
- Node.js
- Express
- Prisma ORM
- PostgreSQL (Supabase)

