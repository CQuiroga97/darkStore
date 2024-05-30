module.exports = {
    apps: [
      {
        name: 'brands',
        script: 'src/app.ts',
        interpreter: 'bun',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };