const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');

const port = process.env.PORT || 5000;

const dbUrl = process.env.DB_CONNECT;

mongoose
  .connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    // ensureIndex: true,
  })
  .then(() => {
    console.log('Connected to MongoDB...');
    // mongoose.connection.collections['users'].drop( function(err) {
    //   console.log('collection dropped');
    // });
  })
  .catch(err => console.error('Could not connect to MongoDB...', err));

require('./models/comptes');
require('./models/operations');
require('./models/users');
require('./models/folders');
require('./models/media');
require('./models/audit');

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
