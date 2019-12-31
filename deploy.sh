scp -r dist root@47.74.180.191:/opt/fingoapp.com
ssh root@47.74.180.191 '\
cd /opt/fingoapp.com \
&& sudo rm -rf desgin || true \
&& sudo mv dist desgin \
&& sudo rm -rf dist || true \
&& exit'

rm -rf dist
