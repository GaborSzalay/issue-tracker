const router = require('express').Router();
const issues = require('../../issues');

router.get('/', (req, res) => {
    const mainIssues = issues.filter(issue => !Number.isInteger(issue.parent) );

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(mainIssues));
});

module.exports = router;