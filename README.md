## Foundry Spatial ESLint configuration

Install package:

```bash
npx install-peerdeps --dev eslint-config-foundryspatial
```

Add to ESLint config:

```javascript
// .eslintrc.js

extends: [
    // ...
    'foundryspatial',
],
```

For VueJS projects, use `foundryspatial/vue`, which extends our base config with extra Vue rules:

(Assumes the project is using Vue CLI's `@vue/cli-plugin-eslint`)

```javascript
// .eslintrc.js

extends: [
    // ...
    'plugin:vue/recommended',
    'foundryspatial/vue',
],
```
