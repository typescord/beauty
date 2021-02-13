# Typescord ESLint config

> ESLint config for Typescord projects

This repository contains the ESLint configuration used by the core packages of Typescord.

## Installation

You need to install [ESLint](http://eslint.org) with `@typescord/eslint-config`:

```sh
npm i eslint @typescord/eslint-config --save-dev
# or with Yarn :
yarn add eslint @typescord/eslint-config -D
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@typescord/eslint-config` globally.

## Usage

`@typescord` must be extended when creating packages for Typescord.

JSON format:

```json
{
  "extends": ["@typescord"]
}
```

YAML format:

```yaml
extends:
  - "@typescord"
```
