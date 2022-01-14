#!/bin/bash

# Copy the production environment file from S3 to the local installation
aws s3 cp s3://cust-bsecure-codedeploy-s3/bsecure-config/order.env  /var/www/vhosts/order.bsecure.pk/.env
aws s3 cp s3://cust-bsecure-codedeploy-s3/bsecure-config/order-eslintrc.json /var/www/vhosts/order.bsecure.pk/.eslintrc.json

# Setup the various file and folder permissions for Laravel
chown -R ubuntu:www-data /var/www/vhosts/order.bsecure.pk


cd /var/www/vhosts/order.bsecure.pk
npm install
npm run build
chown -R ubuntu:www-data /var/www/vhosts/order.bsecure.pk

