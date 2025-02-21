# Utiliza la imagen base con Node.js 18 proporcionada por Refine
FROM refinedev/node:18 AS base

# Instalar dependencias
FROM base AS deps
WORKDIR /app

# Copia los archivos del package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Instala las dependencias dependiendo del lockfile encontrado
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Construir la aplicación
FROM base AS builder
WORKDIR /app
ENV NODE_ENV production

# Copia las dependencias instaladas desde la etapa anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia el resto del código fuente
COPY . .

# Ejecuta el build de la aplicación
RUN npm run build

# Imagen final para ejecutar la aplicación
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

# Instala el servidor estático 'serve' para servir los archivos
RUN npm install -g serve

# Copia los archivos estáticos construidos en la etapa 'builder'
COPY --from=builder /app/dist ./dist

# Usa el usuario 'refine' para ejecutar el contenedor
USER refine

# Expone el puerto 3000
EXPOSE 3000

# Comando para servir la aplicación en el puerto 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
