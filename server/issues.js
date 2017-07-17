const issues = [
    { id: 1, name: 'Test Name 1', description: 'Test description 1' },
    { id: 2, name: 'Test Name 2', description: 'Test description 2', child: 5 },
    { id: 5, name: 'Test Child Issue 5', description: 'Test description 5', parent: 2 },
    { id: 3, name: 'Test Name 3', description: 'Test description 3' },
    { id: 4, name: 'Test Name 4', description: 'Test description 4' }
];

module.exports = issues;