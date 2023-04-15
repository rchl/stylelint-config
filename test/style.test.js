const { spawnSync } = require('child_process');

test('that errors are reported in scss', () => {
    const execResult = spawnSync('stylelint', ['test/style.scss', '--formatter=json'], { encoding: 'utf8' });

    expect(execResult.status).not.toBe(0);

    /** @type {import('stylelint').LintResult[]} */
    const issues = JSON.parse(execResult.stdout);

    expect(issues.length).toBe(1);
    expect(issues[0].warnings.map(warning => warning.rule)).toEqual([
        'declaration-colon-space-after',
        'function-name-case',
        'rule-empty-line-before',
    ]);
});

test('that errors are reported in vue', () => {
    const execResult = spawnSync('stylelint', ['test/page.vue', '--formatter=json'], { encoding: 'utf8' });

    expect(execResult.status).not.toBe(0);

    /** @type {import('stylelint').LintResult[]} */
    const issues = JSON.parse(execResult.stdout);

    expect(issues.length).toBe(1);
    expect(issues[0].warnings.map(warning => warning.rule)).toEqual([
        'color-no-invalid-hex',
        'declaration-block-trailing-semicolon',
        'selector-pseudo-element-no-unknown',
    ]);
});
