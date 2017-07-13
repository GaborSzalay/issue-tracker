const router = require('express').Router();
const issuesRouter = require('./api/issues');
const addRouter = require('./api/add');
const editRouter = require('./api/edit');

router.use('/issues', issuesRouter);
router.use('/add', addRouter);
router.use('/edit', editRouter);

module.exports = router;