#!/bin/bash

cd utils/cli

read -p 'Superuser name: ';
name=${REPLY}
read -s -p 'Password: '
pass=${REPLY}
echo "";

./cli.py --auth ${name}:${pass} create "Dummy Task" --labels labels.json local car1.jpg car2.jpg car3.jpg car4.jpg car5.jpg car6.jpg car7.jpg car8.jpg

./cli.py --auth ${name}:${pass} upload --format "CVAT 1.1" 1 annotations.xml







