---
title: Components
description: "Fundamental building blocks."
---

Before we starting writing the app, it's worth going through some of the concepts React introduces.

To make it easier to explain, I won't be differentiating between what `react` provides vs `react-dom`.

## Components

A Component takes zero or more `props` and returns a `node`. One of these props can be `children` which is also a `node` and so allows nesting Components within Components.

There's two ways to write components. Using Functions or Classes.

### Functional Components

The most basic Component is a function.

```js
function Application({ children }) {
    return (
        <div className="Application">
            {children}
        </div>
    )
}
```

### Class Components

The most basic Class Component needs to implement the `render` function.

```js
class Application extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="Application">
                {children}
            </div>
        )
    }
}
```

This makes it essentially the same as a Functional Component. However, Class Components also allow you to hook into the [Component Lifecycle](https://facebook.github.io/react/docs/react-component.html). We'll be going into this lifecycle in a future session.

For the most part, Functional Components are ideal as they're simple and don't introduce special casing and state.

## Node

A Node is anything that can be rendered by `react-dom`. Meaning it can be either a React Element; a String or Number (i.e. Text Element); or an Array of them.

## Element

An Element is an instance of a Component with Props.

## Props

Props is just a plain object that's passed into a component. Changing a prop will cause a Component to re-render.
