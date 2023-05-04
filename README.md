# tnode [![npm](https://img.shields.io/npm/v/@arnaud-barre/tnode)](https://www.npmjs.com/package/@arnaud-barre/tnode)

Simple node wrapper that runs esbuild on TS files for ESM projects. Requires usage of explicit extensions. esbuild target is set to node 18.

For CJS projects, see [@nabla/tnode](https://github.com/nabla/tnode)

## Install

```shell
npm i -D @arnaud-barre/tnode
```

## Usage in package.json scripts

```json
{
  "scripts": {
    "codegen": "tnode scripts/codegen.ts"
  }
}
```

## JSON imports

A loader is provided to bypassed experimental warning and the need for import assertion. There is no support for named exports.

## Credit

`preflight.cjs` & `tnode.cjs` is taken from [tsx](https://github.com/esbuild-kit/tsx)
