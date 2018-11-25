const mongoose = require('mongoose');
const config = require('./config');

const dbConfig = config.database;

mongoose
  .connect(
    `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`,
    {useNewUrlParser: true},
  )
  .then(() => console.log('Connect database successfully'))
  .catch(err => console.error('Connect database failed'));
