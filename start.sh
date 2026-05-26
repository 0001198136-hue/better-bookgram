#!/bin/bash

php artisan config:cache
php artisan route:cache
php artisan migrate --force

php-fpm8.3 -D
nginx -g "daemon off;"