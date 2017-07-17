const issues = [
    { id: 0, name: 'Test Name 1', description: 'Test description 1' },
    { id: 1, name: 'Test Name 2', description: 'Test description 2', child: 4 },
    { id: 4, name: 'Test Child Issue 5', description: 'Test description 5', parent: 1 },
    { id: 2, name: 'Test Name 3', description: 'Test description 3' },
    { id: 3, name: 'Test Name 4', description: 'Test description 4' }
];

module.exports = issues;