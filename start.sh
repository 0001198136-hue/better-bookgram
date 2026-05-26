#!/bin/bash

# Gera APP_KEY se não existir
if [ -z "$APP_KEY" ]; then
    php artisan key:generate --force
fi

php artisan config:cache
php artisan route:cache
php artisan migrate --force

# Inicia PHP-FPM em background e Nginx em foreground
php-fpm &
nginx -g "daemon off;"