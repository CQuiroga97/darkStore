module.exports = {
    apps: [
      {
        name: 'app',
        script: 'src/app.ts',
        interpreter: 'ts-node',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };