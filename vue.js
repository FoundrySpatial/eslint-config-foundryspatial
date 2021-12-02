// extra rules for VueJS projects

module.exports = {
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
        'plugin:jsdoc/recommended',
        'foundryspatial',
    ],

    rules: {
        // use 4-space indents with default rules
        'vue/html-indent': ['warn', 4, {}],

        'vuejs-accessibility/anchor-has-content': 'off',

        'vue/new-line-between-multi-line-property': ['error', {
            minLineOfMultilineProperty: 2,
        }],
    },
};
