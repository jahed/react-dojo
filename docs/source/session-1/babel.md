---
title: Babel
description: "Using cutting edge and augmented JavaScript."
---

Babel is a transpiler for Javascript. Essentially, it takes source code in one form and transforms it into another. Let's install it in our project.

```
npm install --save-dev babel babel-core babel-plugin-transform-runtime
```

For our app, Babel will be taking our source code and converting it to ES5. To do this, we'll need to add a `.babelrc` to the root of our project.

```json
{
    "presets": ["es2015", "stage-3", "react"],
    "plugins": ["transform-runtime"]
}
```

Here we're using the [`transform-runtime`](https://babeljs.io/docs/plugins/transform-runtime/) plugin which has various conveniences which you can read up on [here](https://babeljs.io/docs/plugins/transform-runtime/). 

The presets allows us to use the following:

## ECMAScript 2015

ES2015 is the latest version of ECMAScript which introduced new syntax such as `import`, `const`, `let` and arrow functions.

```
npm install --save-dev babel-preset-es2015
```

## ECMAScript Stage 3 Candidate Features

ECMAScript feature requests go through the [TC39 process](http://exploringjs.com/es2016-es2017/ch_tc39-process.html). Stage 3 features are essentially candidates for the next version, waiting for feedback before being finalised. They are usually safe to use.

```
npm install --save-dev babel-preset-stage-3
```

## JSX

JSX is XML in Javascript. This is useful for writing your React components like HTML elements instead of nested functions, making it more intuitive.

```
npm install --save-dev babel-preset-react
```
