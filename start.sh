#!/bin/sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd /app/devhyun-page
yarn

pm2 stop devhyun-page
pm2 delete devhyun-page

export NODE_ENV=production
pm2 start npm --name "devhyun-page" -- start