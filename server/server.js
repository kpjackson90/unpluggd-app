/**Models */
require("./models/User");
require("./models/Event");
require("./models/Pre");

/**Dependencies */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");

/**routes */
const auth = require("./routes/auth");
const event = require("./routes/event");
const room = require("./routes/room");
const index = require("./routes");
const ticket = require("./routes/ticket");
const upload = require("./routes/upload");
const stripe = require("./routes/stripe");
const pre = require("./routes/pre");
const mailchimp = require("./routes/mailchimp");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan(keys.MORGAN_LOG_FORMAT));
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Unpluggd",
      description: "Admin and Consumer Side API",
      contact: {
        name: "Kareem Phillip-Jackson",
      },
      servers: ["http://localhost:5000"],
    },
  },
  //routes
  apis: ["./routes/*.js"],
};

/** Replace all console.logs with morgan logging */

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(auth);
app.use(event);
app.use(room);
app.use(index);
app.use(ticket);
app.use(upload);
app.use(stripe);
app.use(pre);
app.use(mailchimp);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  retryWrites: false,
});
mongoose.connection
  .once("open", () => console.log("Connected to Mongo instance"))
  .on("error", (error) => console.log("Error connecting to MongoDB", error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
