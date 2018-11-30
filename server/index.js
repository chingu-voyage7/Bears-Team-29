require('babel-register')({
  presets: [
    [
      'env',
      {
        targets: {node: 'current'},
      },
    ],
  ],
});

module.exports = require('./src/app');
