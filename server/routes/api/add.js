const router = require('express').Router();
const issues = require('../../issues');

router.get('/', (req, res) => {
    issues.push({ id: issues[issues.length-1].id + 1, name: 'foo', description: 'bar' });
    res.status(204).send();
});

module.exports = router;