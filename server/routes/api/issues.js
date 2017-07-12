const router = require('express').Router();
const issues = require('../../issues');

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(issues));
});

module.exports = router;