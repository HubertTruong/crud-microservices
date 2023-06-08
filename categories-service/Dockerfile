# Utiliser une image de base appropriée
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de l'application dans le conteneur
COPY package.json .
COPY package-lock.json .
RUN npm ci --only=production

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposer le port sur lequel l'application écoute
EXPOSE 5000

# Commande de démarrage de l'application
CMD ["node", "index.js"]