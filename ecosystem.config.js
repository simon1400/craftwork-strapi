module.exports = {
  apps : [{
    name: "craftwork-strapi",
    script: "npm",
    args: "start",
    cwd: "/home/dimi/app/craftwork/strapi",
    exec_mode: "fork",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env_production: {
      NODE_ENV: "production",
      HOST: "0.0.0.0",
      PORT: 1337
    }
  }]
};
