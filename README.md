# ESLint plugin Typescord
> ESLint plugin for Typescord projects

This repository contains the ESLint configuration used by the core packages of Typescord but also for Typescord projects.

## Installation

[ESLint](http://eslint.org) is required to use this plugin.
```
$ npm i eslint eslint-plugin-typescord --save-dev
// or with Yarn :
$ yarn add eslint eslint-plugin-typescord -D
```

**Warning:** If you already installed ESLint globally, you must also install `eslint-plugin-typescord` globally.

## Usage
Add `typescord` to the plugins section of your `.eslintrc` or `.eslintrc.yml` configuration file. You can omit the `eslint-plugin-` prefix:

### For core or community packages
`typescord/package` must be extended when creating packages for Typescord.

JSON format:
```json
{
  "extends": [
    "plugin:typescord/package"
  ]
}
```

YAML format:
```yaml
extends:
  - plugin:typescord/package
```