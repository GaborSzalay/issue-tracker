const router = require('express').Router();
const issuesRouter = require('./api/issues');

router.use('/issues', issuesRouter);

module.exports = router;