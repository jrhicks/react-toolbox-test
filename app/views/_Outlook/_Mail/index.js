module.exports = {
  component: require('./Mail'),
  childRoutes: [
    require('./_Inbox'),
    require('./_Clutter')
  ]
};
