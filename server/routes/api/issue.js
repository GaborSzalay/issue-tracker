const router = require('express').Router();
const issues = require('../../issues');

router.post('/', (req, res) => {
    let foundIssue = false;

    issues.forEach( currentIssue => {
        if (currentIssue.id === req.body.id) {
            foundIssue = currentIssue;
        }
    });
    
    res.send(JSON.stringify(foundIssue));
});

module.exports = router;