module.exports = {
  apps: [
    {
      name: "belajar-ci-cd-dev",
      script: "src/index.js",
      env: {
        APP_ENV: "dev",
        PORT: 3100
      }
    },
    {
      name: "belajar-ci-cd-staging",
      script: "src/index.js",
      env: {
        APP_ENV: "staging",
        PORT: 3200
      }
    },
    {
      name: "belajar-ci-cd-prod",
      script: "src/index.js",
      env: {
        APP_ENV: "prod",
        PORT: 3300
      }
    }
  ]
};
