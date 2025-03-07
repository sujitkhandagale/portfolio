module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3001, // Set the desired port here
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3001, // Set the desired port here
      },
    },
  ],
};
