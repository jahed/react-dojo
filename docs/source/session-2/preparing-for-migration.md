---
title: Preparing for Migration
description: "How to structure a React Component"
---

Let's start by making our first, top-most component, `Application`.

In our `source`, we can create a `components` directory. In here we'll place all of our components.

```
cd source
mkdir components
```

For every component, we'll have a directory named after the components with an `index.jsx` and `styles.scss`.

```
cd components
mkdir Application
cd Application
touch index.jsx
touch styles.scss
```

Now some boilerplate for the `index.jsx`.

```js
// ~/components/Application/index.jsx
import React from 'react'
import './styles.scss'

export default function Application() {
    return (
        <h1 className="Application">Hello, world!</h1>
    )
}
```

We need to import `React` in all of our JSX files since JSX is just sugar around function calls on `React`.

We can also import the `styles.scss` for our component. This will add a `<style>` on our page to style the component.

We don't need to hook into the lifecycle, so we're using a functional component.

It's useful to name the `className` after the component's name so that we're consistent when referring to the component in our styles.

You'll notice we're returning the same content which we had in our previous session. So now, we can swap it in. In our **top-level** `index.jsx`.


```js
// ~/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Application from '~/components/Application'

ReactDOM.render(
  <Application />,
  document.getElementById('ROOT')
);
```

## Conclusion

Your `source` directory should look something like this:

```
./answers/session-2/source
├── components
│   └── Application
│       ├── index.jsx
│       └── styles.scss
├── index.html.ejs
└── index.jsx
```