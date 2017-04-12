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

By default, when saving dependencies, npm saves it in the `package.json` as a minor version requirement as according to the rules of [Semantic Versioning](http://semver.org/). You can change this to be more strict by using the `--save-exact` flag when running `npm install`.

I won't be including the `--save-exact` flag when referring to `npm install` in this dojo but I recommend using it to avoid future difficulties when packages update and introduced changes different from those mentioned in this dojo.

You can find a list of representations npm uses for version dependencies in [their documentation](https://docs.npmjs.com/files/package.json#dependencies).

## Installing Dependencies

We can install any package from [npm's repository](https://www.npmjs.com) using one of the following commands in our project directory:

```
// devDependency, latest version, allow patch updates (default)
npm install --save-dev <package-name>

// devDependency, latest version, allow no updates
npm install --save-dev --save-exact <package-name>

// devDependency, exact version, allow no updates
npm install --save-dev <package-name>@1.0.2

// devDependency, latest version of v1.x.x, allow minor updates
npm install --save-dev <package-name>@1

// dependency, minor version, allow patch updates
npm install --save <package-name>
```

For a full list of options, [check npm's documentation](https://docs.npmjs.com/files/package.json).

## Dependency Files

The files for these dependencies are saved in the `node_modules` directory at the root of your project. You'll want to add this directory to your `.gitignore`.

## Updating Dependencies

You can run `npm update` to update your local dependencies based on your version requirements. Of course, if you're using `--save-exact`, `npm update` won't achieve anything.

So, to make sure we're not falling behind versions, we can use third-party tools like [`npm-check`](https://github.com/dylang/npm-check) to check and update our dependencies. This is especially useful when using `--save-exact` as it gives up more control on when to update.

![](/react-dojo/images/session-1-npm-check.png)

For this dojo, we won't be referring back to `npm-check` but it's worth mentioning.