# eslint-config-hof

An up-to-date linter for Home Office Forms products. This includes widely used plugins for node, typescript and mocha for instance.

It also has been created to ensure consistent indentation, spacing, and code structure to be implemented across all HOF products for consistency.

## Usage

To use in a project:

```
npm i -SD eslint-config-hof
```

Then in your package.json file for your `test:lint` script, run:

```
eslint . --config ./node_modules/eslint-config-hof/default.js
```

Or create an `eslint.config.js` in your project root (ESLint 9+ flat config) and run `eslint .`:

```js
"use strict";

const hofConfig = require("eslint-config-hof");

module.exports = [
  ...hofConfig,
  {
    files: ["some/file.js"],
    rules: {
      "import-x/no-unresolved": "off",
    },
  },
];
```

### Upgrading from 1.x

Version 2 uses ESLint 10 and flat config (an array export), and requires Node `>=20.19.0`.

- Legacy `.eslintrc` keys such as `overrides`, `env` and `extends` no longer work; append config objects to the array instead.
- Rule prefixes changed: `import/*` -> `import-x/*`, `node/*` -> `n/*`, and formatting rules now live under `@stylistic/*`.
- Inline `/* eslint-env */` comments are no longer supported; use `/* global */` instead.

This repo installs all the necessary plugins and dependencies for linting including eslint.
There could potentially be a view to create other configs for different teams here
