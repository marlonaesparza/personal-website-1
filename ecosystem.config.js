module.exports = {
  apps: [{
    name: 'personal-website-1',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-221-115-147.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/personal-website-1.pem',
      ref: 'origin/main',
      repo: 'git@github.com:marlonaesparza/personal-website-1.git',
      path: '/home/ubuntu/personal-website-1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
