# --------------------------------------------------------------------------------
# Dockerfile pour le front-end VitalSync avec Nginx et proxy vers backend
# --------------------------------------------------------------------------------

FROM nginx:alpine

# Copier les fichiers HTML/CSS/JS dans le dossier Nginx
WORKDIR /usr/share/nginx/html
COPY index.html ./

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrage de Nginx en foreground
CMD ["nginx", "-g", "daemon off;"]