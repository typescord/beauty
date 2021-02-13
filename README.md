# Typescord ESLint config

> ESLint config for Typescord projects

This repository contains the ESLint configuration used by the core packages of Typescord.

## Installation

The configuration requires `eslint`. Install the correct versions of the package which can be found with this command:

```sh
npm info "@typescord/eslint-config" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev @typescord/eslint-config
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.

Otherwise, run `npm info "@typescord/eslint-config" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependencies>` with all listed peer dependencies.

## Usage

### For core or community packages

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
