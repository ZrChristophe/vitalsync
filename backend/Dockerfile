# --------------------------------------------------------------------------------
# Multi-stage build pour le backend Node.js
#
# Pourquoi utiliser un multi-stage build :
# 1️ Sécurité : le stage final de production ne contient pas les fichiers de test
#    ni les dépendances de développement, ce qui réduit la surface d'attaque.

# 2️ Taille d'image : seule la partie nécessaire à l'exécution est copiée dans
#    l'image finale, ce qui réduit considérablement la taille et accélère le déploiement.

# 3️ Qualité CI/CD : les tests sont exécutés dans un stage séparé. Si un test échoue,
#    le build échoue avant de produire l'image de production.
# --------------------------------------------------------------------------------
    
# Stage 1 : build et tests
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

# Stage 2 : production
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/server.js ./server.js
EXPOSE 3000
CMD ["node", "server.js"]