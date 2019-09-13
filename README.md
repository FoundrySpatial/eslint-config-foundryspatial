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

```javascript
// .eslintrc.js

extends: [
    // ...
    'plugin:vue/recommended',
    'foundryspatial/vue',
],
```
