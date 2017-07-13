const router = require('express').Router();
const issues = require('../../issues');

router.post('/', (req, res) => {
    const newIssue = {
        id: issues[issues.length-1].id + 1,
        name: 'foo',
        description: 'bar'
    };

    issues.push(newIssue);
    res.status(200);
    res.send(JSON.stringify(newIssue));
});

module.exports = router;