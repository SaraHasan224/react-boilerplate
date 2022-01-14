# Reload PHP-FPM so that any cached code is subsequently refreshed


oldCopy=`date '+%Y_%m_%d__'`;
old_copy_name="/var/www/vhosts/order.bsecure.pk-$today*"
service php7.2-fpm reload
service apache2 start

rm -rf $old_copy_name
rm -f /var/www/vhosts/order.bsecure.pk/appspec.yml
rm -f /var/www/vhosts/order.bsecure.pk/scripts
rm -f /var/www/vhosts/order.bsecure.pk/codedeploy_deploy.py
rm -f /var/www/vhosts/order.bsecure.pk/bitbucket-pipelines.yml
