FROM php:8.3-fpm

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    nginx \
    curl \
    zip \
    unzip \
    git \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pdo_mysql mbstring exif pcntl bcmath gd

# Instala o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copia o projeto
WORKDIR /var/www/html
COPY . .

# Instala dependências PHP
RUN composer install --no-dev --optimize-autoloader

# Permissões
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Copia config do Nginx
COPY nginx.conf /etc/nginx/sites-available/default

EXPOSE 80

# Script de inicialização
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]