module.exports = {
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
        'block-closing-brace-newline-after': [
            'always', {
                ignoreAtRules: ['if', 'else'],
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
        indentation: 4,
        'max-line-length': null,
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
        'string-quotes': 'single',
        // Changes "currentColor" to lower case
        'value-keyword-case': null,
    },
};
