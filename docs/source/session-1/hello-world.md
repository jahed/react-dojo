---
title: Hello World
description: "Our first step into React"
---

## Install Lodash

```sh
npm install --save lodash
```

Lodash is a useful utility library which lets you perform a variety of functions against strings, arrays and objects.

## Install React

```sh
npm install --save react react-dom
```

`react` is the general component library, `react-dom` is the DOM-specific library for create components for the DOM.

## A simple app

Let's create an `index.jsx` file in our `source` directory to render something on the page with React.

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('ROOT')
);
```

Here we're looking for an element in the DOM with an ID of `ROOT` and create a `h1` element using a React component.

It's worth mentioning that the `h1` element used here is not an HTML element, but a React component defined by `react-dom` which will resolve to a `h1` HTML element.

## Conclusion

You should now have a project directory which looks something like:

```
./react-dojo/
├── node_modules
├── source
│   └── index.jsx
├── .gitignore
└── package.json
```