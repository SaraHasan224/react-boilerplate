#!/bin/bash

today=`date '+%Y_%m_%d__%H_%M_%S'`;
old_Dir_name="/var/www/vhosts/order.bsecure.pk-$today"

#### stop apache2 #######
service apache2 stop
### rename old directory 
mv /var/www/vhosts/order.bsecure.pk $old_Dir_name
