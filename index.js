// Foundry Spatial code style rules to override AirBnB base

module.exports = {
    extends: [
        'airbnb-base',
    ],

    plugins: [
        'simple-import-sort',
        'jsdoc',
    ],

    rules: {
        // indent 4 spaces
        indent: [
            'error',
            4,
        ],

        // max line length 120 chars
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        // Disable no-underscore-dangle (mapbox-gl, elasticsearch)
        'no-underscore-dangle': 'off',
        'no-undefined': 'error',
        'simple-import-sort/sort': 'error',
        'sort-imports': 'off', // must turn off for simple-import-sort/sort to work
        'import/order': 'off', // must turn off for simple-import-sort/sort to work
        'jsdoc/no-undefined-types': 'off',
    },
};
