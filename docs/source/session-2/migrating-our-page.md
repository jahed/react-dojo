---
title: Migrating our Page
description: "It's (almost) as simple as copy and paste."
---

Let's migrate our entire page from the CSS Dojo all in one go.

```js
// ~/components/Application/index.jsx
import React from 'react'
import './styles.scss'

export default function Application() {
    return (
        <div className="Application">
            {/* Paste the <body> here! */}
        </div>
    )
}
```

```scss
// ~/components/Application/styles.scss
// Paste the CSS here
```

Check your page... It doesn't work!

## JSX vs HTML

Open your Browser's Dev Tools and check the log output. React's logging is extremely useful for debugging. Try fixing the issues yourself.

The main takeaway here is that JSX, while similar to HTML, has a few differences.

### Keyword Conflicts

For one, as mentioned before, the `class` attribute conflicts with JavaScripts `class` keyword, so we need to use `className` instead in JSX.

### Props aren't Attributes!

While some props are similar to attributes, some aren't. The `style` prop for example takes an object rather than a string like it would in HTML. So...


```
style="background-image: url('/images/dominion.jpg');"
```

becomes

```
import featureBgImage from '~/images/dominion.jpg'
//...
style={{ backgroundImage: `url(${featureBgImage})` }}
```

Here's we're using Webpack to resolve our image and provide the URL to our `style` object.


## Conclusion

Check the page now, it works! Or at least, it should. If it doesn't, keep debugging.

Your `source` directory should look something like this:

```
./answers/session-2/source
├── components
│   └── Application
│       ├── index.jsx
│       └── styles.scss
├── images
│   └── dominion.jpg
├── index.html.ejs
└── index.jsx
```
