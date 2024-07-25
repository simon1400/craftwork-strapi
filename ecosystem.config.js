module.exports = {
  apps : [{
    name   : "Craftwork strapi copy",
    script : "npm start"
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/craftwork-strapi.git',
      path : '/home/dimi/app/craftwork/strapi-copy',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
