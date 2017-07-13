const router = require('express').Router();
const issues = require('../../issues');

router.post('/', (req, res) => {
    const editedIssue = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
    };

    issues.forEach( currentIssue => {
        if (currentIssue.id === editedIssue.id) {
            currentIssue.name = editedIssue.name;
            currentIssue.description = editedIssue.description;
        }
    });
    
    res.status(204).send();
});

module.exports = router;