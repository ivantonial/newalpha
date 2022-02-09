module.exports = {
    apps: [
      {
        script: 'backend/server.js',
        cwd: 'backend/',
        name: 'Backend',
        watch: true,
        env: {
          NODE_ENV: 'development'
        }
      },
      {
        script: 'frontend/index.js',
        cwd: 'frontend/',
        name: 'Frontend',
        watch: true,
        env: {
          NODE_ENV: 'development'
        }
      }
    ]
  }