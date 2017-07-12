const router = require('express').Router();
const issuesRouter = require('./api/issues');
const addRouter = require('./api/add');

router.use('/issues', issuesRouter);
router.use('/add', addRouter);

module.exports = router;