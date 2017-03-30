---
title: Creating a Component
---

Remember, a Functional Component is written as so:

```js
import React from 'react'

export default function YourComponent({ prop1, children }) {
    return (
        <div className="YourComponent">
            <h1>{prop1}</h1>
            <p>{children}</p>
        </div>
    )
}
```

## How not to define a component

A Component must evaluate to a *single* node. You can't have an array. So you can't do the following:

```js
import React from 'react'

export default function YourComponent({ prop1, children }) {
    // THIS IS NOT ALLOWED!
    return (
        <div className="YourComponentOne" />
        <span className="YourComponentTwo" />
    )
}
```

Use `<div>`s to wrap components if you have to.

## Using Props in a Component

If you're wondering about the curly braces in the function arguments

```js
export default function YourComponent({ prop1, children }) {
    // ...
}
```

it's essentially a short hand for

```js
export default function YourComponent(props) {
    const { prop1, children } = props
    // ...
```

which in turn is a shorthand for

```js
export default function YourComponent(props) {
    const prop1 = props.prop1
    const children = props.children
    // ...
```

Using the braces to assign variables from objects is called [Object Destructuring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) and was introduced in ES2015.

## Detecting Invalid Prop Types

Sometimes, you might get into a situation where you're passing in the wrong values to your props. React can help you debug these situations using `propTypes`. If a given value does not match an assigned `PropType`, React will log a warning to identify the issue.

```js
import React, { PropTypes } from 'react'

export default function YourComponent({ prop1, children }) {
    // ...
}

YourCommponent.propTypes = {
    prop1: PropTypes.string
    children: PropTypes.node.isRequired
}
```

## Assigning Default Props

If you want to fallback to a default value for your props, you can use `defaultProps`.

```js
import React, { PropTypes } from 'react'

export default function YourComponent({ prop1, children }) {
    // ...
}

YourComponent.defaultProps = {
    prop1: 'A Heading'
}
```

## Forwarding Props

If you're wrapping a component but want to forward some props to the wrapped component, you can use Object Spreading and the `...rest` syntax when Object Destructuring.

```js
import React from 'react'

export default function Section({ heading, children ...props }) {
    return (
        <section {...props}>
            <h2>{heading}</h2>
            <p>{children}</p>
        </section>
    )
}
```

So doing something like:

```js
<Section className="fancy" heading="Hello">
    World!
</Section>
```

Will evaluate to:

```js
<section className="fancy">
    <h2>Hello!</h2>
    <p>World!</p>
</section>
```

## Using a Component

You need to use Components to create Components. So using your Component is no different than what you did to create it!

```js
<YourComponent prop1="some value">
    Some child content
</YourComponent>
```

Any nested content is resolved as a `children` prop.

## Iterating on Components

If you want to create a number of Elements, you can just provide an expression which resolves to any array of Elements.

```js
<div>
    {['a', 'b', 'c'].map(letter => (
        <p key={letter}>
            {letter}
        </p>
    )}
</div>
```

You have to provide a `key` prop which is unique for each element of the array. Otherwise, React won't be able to keep track of
which Element is which when running its [diffing](https://facebook.github.io/react/docs/reconciliation.html). So without a `key`, if you remove an element, it will re-render the whole tree
instead of just removing one Element.

## Assigning Props

You'll also notice the double-braces when assigning the prop. The first brace indicates a prop value, the second set defines the JavaScript object to assign

Here's some different ways you can assign a prop.

```
some-prop="a string"         // a string
some-prop={9001}             // a number
some-prop                    // resolves to some-prop={true}
some-prop={{ key: 'value' }} // an object
some-prop={aVariable}        // a variable
some-prop={`a string ${andVariable}`} // a string with a variable

some-prop={any expression}   // really, you can use any expression
```
