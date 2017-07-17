const router = require('express').Router();
const issues = require('../../issues');

router.post('/', (req, res) => {
    const newIssue = {
        id: issues[issues.length-1].id + 1,
        name: req.body.name,
        description: req.body.description,
        parent: req.body.parent || undefined
    };
    const [ parentIssue ] = issues.filter( currentIssue => { return currentIssue.id === req.body.parent });
    if (parentIssue) {
        parentIssue.child = newIssue.id;
    }
    issues.push(newIssue);
    res.status(200);
    res.send(JSON.stringify(newIssue));
});

module.exports = router;