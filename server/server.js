
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const movieSearchRouter = require ('./routes/movie.search.router');
const movieDisplayRouter = require ('./routes/movie.display.router');
const newReleaseRouter = require('./routes/new.release.router');
const releaseDisplayRouter = require('./routes/release.display.router');
const newListRouter = require('./routes/new.list.router')
const getListsRouter = require ('./routes/get.lists.router')
const displayListRouter = require ('./routes/display.list.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/movie-search', movieSearchRouter);
app.use('/movie', movieDisplayRouter);
app.use('/newrelease', newReleaseRouter)
app.use('/releases', releaseDisplayRouter)
app.use('/newlist', newListRouter)
app.use('/lists', getListsRouter);
app.use('/list', displayListRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
