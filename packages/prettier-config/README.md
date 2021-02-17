# Typescord Prettier config

> Prettier config for Typescord projects

This repository contains the Prettier configuration used by the core packages of Typescord.

## Installation

You need to install [Prettier](https://prettier.io) with `@typescord/prettier-config`:

```sh
npm i prettier @typescord/prettier-config --save-dev
# or with Yarn :
yarn add prettier @typescord/prettier-config -D
```

**Note:** If you installed Prettier globally (using the `-g` flag) then you must also install `@typescord/prettier-config` globally.

## Usage

In `package.json` :

```js
{
	// ...
	"prettier": "@typescord/prettier-config"
	// ...
}
```
