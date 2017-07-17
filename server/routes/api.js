const router = require('express').Router();
const issuesRouter = require('./api/issues');
const addRouter = require('./api/add');
const editRouter = require('./api/edit');
const issueRouter = require('./api/issue');

router.use('/issues', issuesRouter);
router.use('/add', addRouter);
router.use('/edit', editRouter);
router.use('/issue', issueRouter);

module.exports = router;