const router = require('express').Router();

const issues = [
    { id: 1, name: 'Test Name 1', description: 'Test description 1' },
    { id: 2, name: 'Test Name 2', description: 'Test description 2' },
    { id: 3, name: 'Test Name 3', description: 'Test description 3' },
    { id: 3, name: 'Test Name 4', description: 'Test description 4' }
];

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(issues));
});

module.exports = router;