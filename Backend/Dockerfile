FROM node:18-alpine

# Créer le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json (si existant)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port utilisé par ton serveur
EXPOSE 3000

# Commande pour démarrer le serveur
CMD ["node", "server.js"]


