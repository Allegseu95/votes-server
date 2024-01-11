const { Router } = require('express');

const requestRoute = require('./request.route');
const userRoute = require('./user.route');
const ballotRoute = require('./ballot.route');
const candidateRoute = require('./candidate.route');
const jrvRoute = require('./jrv.route');
const jrvBallotRoute = require('./jrvBallot.route');
const adminRoute = require('./admin.route');
const recordRoute = require('./record.route');

const router = Router();

const defaultRoutes = [
  {
    path: '/requests',
    route: requestRoute
  },
  {
    path: '/users',
    route: userRoute
  },
  {
    path: '/ballots',
    route: ballotRoute
  },
  {
    path: '/candidates',
    route: candidateRoute
  },
  {
    path: '/jrvs',
    route: jrvRoute
  },
  {
    path: '/jrvsballots',
    route: jrvBallotRoute
  },
  {
    path: '/admin',
    route: adminRoute
  },
  {
    path: '/records',
    route: recordRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
