# Typescord ESLint config

> ESLint config for Typescord projects

This repository contains the ESLint configuration used by the core packages of Typescord.

## Installation

You need to install [ESLint](https://eslint.org) with `@typescord/eslint-config` and others peer dependencies:

```sh
npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-sonarjs eslint-plugin-unicorn @typescord/eslint-config --save-dev
# or with Yarn :
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-sonarjs eslint-plugin-unicorn @typescord/eslint-config -D
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@typescord/prettier-config` and others peer dependencies globally.

## Usage

`@typescord` must be extended when creating packages for Typescord.

JSON format:

```js
{
	"root": true,
	"extends": ["@typescord"]
	// ...
}
```

YAML format:

```yaml
root: true
extends: ['@typescord']
# ...
```
