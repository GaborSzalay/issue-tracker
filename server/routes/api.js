var router = require('express').Router();
var issuesRouter = require('./api/issues');

router.use('/issues', issuesRouter);

module.exports = router;