---
title: Ecosystem
description: "Setting up a React app"
---

In this session we'll be going through the React Ecosystem. We'll see how we can build a modern Javascript app using Babel to write cutting-edge (ES2015) and augmented (JSX) Javascript without worrying too much about browser compatibility, and Webpack to bundle our source files.


## Install NodeJS

First things first. We're going to need to set up NodeJS. To check your current Node version, run:

```sh
node --version
```

If it doesn't run at all or you're on a version before `v6.x`, you'll need to install Node. You can either use the [official installer](https://nodejs.org/en/), install it via your package manager of choice or use the [Node Version Manager](https://github.com/creationix/nvm).

## Create a New Project

Create a new directory:

```sh
mkdir react-dojo
cd react-dojo
```

Make it a Git repo:

```sh
git init
```

Make it a Node package. You can skip through the options it gives you.

```
npm init
```

## Managing Dependencies

Project dependencies are managed using the Node Package Manager (npm). Let's go through some of the concepts.

### Dependency Types

There are multiple types of depedencies: 

- `dependencies` are packages you'll be including in your own build.
- `devDependecies` are packages that are part of your development process but not part of the final build.
- `peerDependcies` are packages your package depends on but doesn't include. This allows projects that require your package to use their own dependencies instead of every package including their own.

In our case, things like Webpack and Babel will be in `devDependencies` and React will be in `dependencies`. We won't be using `peerDependencies`, but the packages we use might.

### Dependency Versions

When saving dependencies, npm saves it in the `package.json` as a minor version requirement as according to the rules of [Semantic Versioning](http://semver.org/). You can change this to be more strict, but we'll be sticking to defaults for this dojo.

## Babel

Babel is a transpiler for Javascript. Essentially, it takes source code in one form and transforms it into another. Let's install it in our project.

```
npm install --save-dev babel babel-core babel-plugin-transform-runtime
```

### Why use Babel?

For our app, Babel will be taking our source code and converting it to ES5. Our source code will use the following, each needing a Babel Preset:

#### ES2015

ES2015 is the latest version of ECMAScript which introduced new syntax such as `import`, `const`, `let` and arrow functions.

```
npm install --save-dev babel-preset-es2015
```

#### ECMAScript Stage 3 Candidate Features

ECMAScript feature requests go through the [TC39 process](http://exploringjs.com/es2016-es2017/ch_tc39-process.html). Stage 3 features are essentially candidates for the next version, waiting for feedback before being finalised. They are usually safe to use.

```
npm install --save-dev babel-preset-stage-3
```

#### JSX

JSX is XML in Javascript. This is useful for writing your React components like HTML elements instead of nested functions, making it more intuitive.

```
npm install --save-dev babel-preset-react
```

### Configuring Babel

To configure Babel, we can add a `.babelrc` to the root of our project.

```json
{
    "presets": ["react", "es2015", "stage-3"],
    "plugins": ["transform-runtime"]
}
```

Here we're using some pre-defined configuration to transform the previously mentioned syntax. We're also using the [`transform-runtime`](https://babeljs.io/docs/plugins/transform-runtime/) plugin which has various conveniences which you can read up on [here](https://babeljs.io/docs/plugins/transform-runtime/).
