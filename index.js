/** @type {import('stylelint').Config} */
const config = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue/scss',
    ],
    rules: {
        // Prefer legacy rgba(0, 0, 0, 0.5) over modern rgba(0, 0, 0, 50%)
        'alpha-value-notation': 'number',
        'annotation-no-unknown': [
            true,
            {
                ignoreAnnotations: ['default', 'global'],
            },
        ],
        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'blockless-after-same-name-blockless',
                    'first-nested',
                ],
                ignore: [
                    'after-comment',
                ],
                ignoreAtRules: [
                    'else',
                ],
            },
        ],
        'color-function-notation': 'legacy',
        'comment-empty-line-before': null,
        'custom-property-empty-line-before': null,
        'declaration-empty-line-before': null,
        'function-name-case': [
            'lower', {
                ignoreFunctions: ['/^get.*$/', '/^#{get.*$/'],
            },
        ],
        'function-no-unknown': null,
        'media-feature-name-no-unknown': [
            true, {
                ignoreMediaFeatureNames: ['prefers-color-scheme'],
            },
        ],
        'no-empty-source': null,
        'rule-empty-line-before': [
            'always',
            {
                except: [
                    'after-single-line-comment',
                    'first-nested',
                ],
            },
        ],
        'selector-class-pattern': [
            '^([a-z][a-z0-9]*)(-+[a-z0-9]+)*$',
            {
                message: 'Expected class selector to be kebab-case',
            },
        ],
        'selector-pseudo-element-no-unknown': true,
        'scss/operator-no-unspaced': null,
        // Changes "currentColor" to lower case
        'value-keyword-case': null,

        // Deprecated rules in v15
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-semicolon-newline-after': 'always',
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': [
            'always', {
                ignoreAtRules: ['if', 'else'],
            },
        ],
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'color-hex-case': 'lower',
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-whitespace-after': 'always',
        indentation: 4,
        'max-empty-lines': 1,
        'max-line-length': null,
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        'no-empty-first-line': true,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        'property-case': 'lower',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-space-before': 'never',
        'selector-max-empty-lines': 0,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'string-quotes': 'single',
        'unit-case': 'lower',
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
    },
};

module.exports = config;
