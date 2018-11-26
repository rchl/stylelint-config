const { spawnSync } = require('child_process');

test('that errors are reported in scss', () => {
    const execResult = spawnSync('stylelint', ['test/style.scss', '--formatter=json'], { encoding: 'utf8' });

    expect(execResult.status).not.toBe(0);

    const issues = JSON.parse(execResult.stdout);

    expect(issues.length).toBe(1);
    expect(issues[0].warnings.length).toBe(3);
    expect(issues[0].warnings[0].rule).toBe('declaration-colon-space-after');
    expect(issues[0].warnings[1].rule).toBe('function-name-case');
    expect(issues[0].warnings[2].rule).toBe('rule-empty-line-before');
});

test('that errors are reported in vue', () => {
    const execResult = spawnSync('stylelint', ['test/page.vue', '--formatter=json'], { encoding: 'utf8' });

    expect(execResult.status).not.toBe(0);

    const issues = JSON.parse(execResult.stdout);

    expect(issues.length).toBe(1);
    expect(issues[0].warnings.length).toBe(3);
    expect(issues[0].warnings[0].rule).toBe('color-no-invalid-hex');
    expect(issues[0].warnings[1].rule).toBe('declaration-block-trailing-semicolon');
    expect(issues[0].warnings[2].rule).toBe('selector-pseudo-element-no-unknown');
});
