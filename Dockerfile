FROM nginx:latest

# Copy all project files to Nginx public folder
COPY . /usr/share/nginx/html/

# Create a symlink to serve aws-ai-practioner.html as index.html
RUN ln -sf /usr/share/nginx/html/aws-ai-practioner.html /usr/share/nginx/html/index.html

# Expose port 80 for traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
