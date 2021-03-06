// Foundry Spatial code style rules to override AirBnB base

module.exports = {

    extends: [
        'airbnb-base',
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
    },

};
