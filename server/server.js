const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const girlProfileRouter = require('./routes/girlProfileRouter');
const preferenceRouter = require('./routes/preferenceRouter');
const reviewRouter = require('./routes/reviewRouter');
const userRouter = require('./routes/userRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET ?? 'test',
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  }),
);

app.use('/api/user', userRouter);
app.use('/api/girls', girlProfileRouter);
app.use('/api/preferences', preferenceRouter);
app.use('/api/reviews', reviewRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
