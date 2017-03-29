---
title: Managing Dependencies
description: ""
---

Project dependencies are managed using the Node Package Manager (npm) and are saved in the `package.json`.

## Dependency Types

There are multiple types of depedencies defined in the `package.json`: 

- `dependencies` are packages you'll be including in your own build.
- `devDependecies` are packages that are part of your development process but not part of the final build.
- `peerDependcies` are packages your package depends on but doesn't include. This allows projects that require your package to use their own dependencies instead of every package including their own.

In our case, things like Webpack and Babel will be in `devDependencies` and React will be in `dependencies`. We won't be using `peerDependencies`, but the packages we use might.

## Dependency Versions

When saving dependencies, npm saves it in the `package.json` as a minor version requirement as according to the rules of [Semantic Versioning](http://semver.org/). You can change this to be more strict, but we'll be sticking to defaults for this dojo.

## Dependency Files

The files for these dependencies are saved in the `node_modules` directory at the root of your project. You'll want to add this directory to your `.gitignore`.

## Installing Dependencies

We can install any package from [npm's repository](https://www.npmjs.com) using the following command in our project directory:

```
// devDependency
npm install --save-dev <package-name>

// dependency
npm install --save     <package-name>
```
