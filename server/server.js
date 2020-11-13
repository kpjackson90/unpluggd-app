/**Models */
require('./models/User');
require('./models/Event');

/**Dependencies */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const keys = require('./config/keys');

/**routes */
const auth = require('./routes/auth');
const event = require('./routes/event');
const room = require('./routes/room');
const index = require('./routes');
const ticket = require('./routes/ticket');
const upload = require('./routes/upload');
const stripe = require('./routes/stripe');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan(':method :url  HTTP/:http-version :status - :response-time ms [:date[web]]'));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Unpluggd',
      description: 'Admin and Consumer Side API',
      contact: {
        name: 'Kareem Phillip-Jackson',
      },
      servers: ['http://localhost:5000'],
    },
  },
  //routes
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(auth);
app.use(event);
app.use(room);
app.use(index);
app.use(ticket);
app.use(upload);
app.use(stripe);

mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection
  .once('open', () => console.log('Connected to Mongo instance'))
  .on('error', error => console.log('Error connecting to MongoDB', error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
