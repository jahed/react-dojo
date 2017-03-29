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
  <h1 className="page-heading">Hello, world!</h1>,
  document.getElementById('ROOT')
);
```

Here we're looking for an element in the DOM with an ID of `ROOT` and create a `h1` element using a React component.

It's worth mentioning that the `h1` element used here is not an HTML element, but a React component defined by `react-dom` which will resolve to a `h1` HTML element.

The HTML you're seeing alongside the JavaScript is known as JSX. It's essentially a shorthand for the following:

```js
React.createElement(
    'h1',  // Component
    {
        // Props
        className: 'page-heading'
    },
    'Hello, world!' // Children
)
```

You can see here why we use `className` instead of the usual HTML `class` attribute. `class` is a reserved keyword in JavaScript and so can't be used as a key; so we work around it. The same can be said for other HTML attributes like `for`.

We'll look into this deeper in the next session.

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

We won't be able to run our app yet as we need to first build it!