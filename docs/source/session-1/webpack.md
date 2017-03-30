---
title: Webpack
description: "Bundling our assets and dependencies."
---


Webpack is a module bundler. It takes our source code and bundles it into a single entry point. This allows us to modularise our code using ES2015 modules while maintaining compatibility in web browsers. It also reduces the number of requests we make to grab our assets from the client-side.

To do this, Webpack takes our source code and passes it through multiple transformations. There are two phases to these transformations: Loaders and Plugins.

> ### Note
>
> We'll be using Webpack 1.x. Webpack 2.x has been released as of writing but for our needs, they aren't too different.
>
> Configuring Webpack can seem extremely complicated. You can look at the Project Template to see where we are heading.

## Configuring Webpack

To configure Webpack, we need a `webpack.config.js` file at the root of our project. It looks something like:

```js
const webpack = require('webpack')
const path = require('path')

const sourceRoot = path.resolve('./source')
const outputRoot = path.resolve(`./build`)

module.exports = {
    target: 'web',
    context: sourceRoot,
    entry: {
        main: ['./index.jsx']
    },
    output: {
        path: outputRoot,
        publicPath: '/',
        filename: 'javascripts/[name]-[chunkhash].js'
    },
    resolve: {
        alias: {
            '~': sourceRoot
        },
        extensions: [
            '', '.js', '.jsx', '.json'
        ],
        unsafeCache: true
    },
    module: {
        loaders: [/* Loaders go here */]
    },
    plugins: [/* Plugins go here */]
}
```

In this configuration we're defining the following:

`target` sets the runtime environment of our build.

`context` sets the base of all our future path references in the config.

`entry` defines the entry point of our bundles. In this case `main` is our only bundle and `index.jsx` is the source file.

`output` defines where to output our build and where to place the bundles. `[name]` refers to the `entry` name, i.e. `main`. `[chunkhash]` is an MD5 hash of the bundle's content.

`resolve` defines how to resolve our depedencies when we use `import` and `require` statements in our source files. Here we can define shortcuts such as auto resolve `extensions` and defining a base directory (`~`) to avoid needing to use long relative paths.

The remaining options involve adding Loaders and Plugins.

## Loaders

The first step of the pipeline are the loaders. Loaders define how a file should be read, they essentially take arbritrary input as text and resolve to JavaScript as text. So, for example, a text file can be wrapped in double quotes to become Javascript strings.

The structure of a loader configuration is as follows:

```js
{
    test: /\.jsx?$/,         // A regex to match the files this loader applies to
    exclude: /node_modules/, // A regex to match files this loader DOES NOT apply to if any.
    loader: 'babel',         // The name of the loader. e.g. babel-loader is just babel.
    query: { 
        // Options specific to the loader if any
    }
}
```

We'll be using the following loaders:

### babel-loader

The `babel-loader` can take our JavaScript and JSX files and transpile it into browser-compatible JavaScript using Babel.

```sh
npm install --save-dev babel-loader
```

```js
{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: { cacheDirectory: true }
}
```

### json-loader

The `json-loader` converts JSON into a JavaScript object.

```sh
npm install --save-dev json-loader
```

```js
{
    test: /\.json$/,
    loader: 'json'
}
```

### style-loader

The `style-loader` itself isn't very useful. It needs to be given a string of CSS in order to inject it into the DOM as a `<style>` tag. We can do this using an ordered array of loaders as you'll see for the `css-loader` and `sass-loader`.

```sh
npm install --save-dev style-loader
```

### css-loader

The `css-loader` converts CSS into a JavaScript String. The `root` is used to resolve asset dependencies like images.

```sh
npm install --save-dev css-loader
```

```js
{
    test: /\.css$/,
    loaders: ['style', `css?root=${sourceRoot}`]
}
```

### sass-loader

The `sass-loader` compiles SASS into CSS.

```sh
npm install --save-dev sass-loader
```

```js
{
    test: /\.scss$/,
    loaders: ['style', `css?root=${sourceRoot}`, 'sass']
}
```

### file-loader

The `file-loader` will copy over a required asset into the build under the given `name` option and resolve to a string pointing to the path the asset's been placed.

```sh
npm install --save-dev file-loader
```

```js
{
    // Images
    test: /\.(jpg|gif|png|svg|ico)(\?.*)?$/,
    loader: 'file?name=[path][name].[ext]'
},
{
    // Fonts
    test: /\.(eot|ttf|woff|woff2)(\?.*)?$/,
    loader: 'file?name=[path][name].[ext]'
},
{
    // Audio
    test: /\.(ogg|wav|mp3)(\?.*)?$/,
    loader: 'file?name=[path][name].[ext]'
},
```

## Plugins

### HtmlWebpackPlugin

The `HtmlWebpackPlugin` takes an [EJS template](http://www.embeddedjs.com/) and generates a HTML file which will inject our entry files as `<script>` tags as part of the build in the `<body>`.

```sh
npm install --save-dev html-webpack-plugin
```

```js
new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.html.ejs',
    inject: 'body'
})
```

The `index.html.ejs` is placed in our `sourceRoot` and should look something like:

```html
<!DOCTYPE html>
<html lang="en-gb" prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>My App | React Dojo</title>
</head>
<body>
<div id="ROOT">
    <!-- Our React elements are injected here -->
</div>
</body>
</html>
```


## Environment-specific Configurations

We'll want to change some of the configuration based on the environment we're running on. For example, our production build should be minified to reduce data usage.

First, we'll need a way to toggle between environments. The most common way to do so in NodeJS apps is to use the `NODE_ENV` environment variable which we can use in our Webpack config using the `process.env.NODE_ENV` variable.

Try making the environment toggle yourself. **An implementation is also provided in the project template.**

### Development Configuration

For `development` we can set the `devtool` to `inline-source-map` so that we can load the source mappings between our source code and bundled code in a single request.

We can also set up the `devServer` so that it knows where to find our bundled files and reduce the amount of logging it outputs.

```js
{
    id: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        contentBase: outputRoot,
        historyApiFallback: true,
        stats: {
            context: sourceRoot,
            colors: true,
            warnings: true,
            timings: true,
            reasons: true,
            errors: true,
            errorDetails: true,
            assets: false,
            cached: false,
            children: false,
            version: false,
            hash: false,
            chunks: false,
            chunkModules: false,
            modules: false,
        }
    }
}
```

#### Dev Server

To use the Dev Server we'll need to install it.

```sh
npm install --save-dev webpack-dev-server
```

The Dev Server is useful for automatically watching for file changes and rebuilding the project. It also keeps the build in-memory and doesn't write anything to disk; making the development cycle a lot faster.

### Production Configuration

For `production` we can minify the bundle using `UglifyJsPlugin`. Since we want to do this after the common plugins, we can put it under a custom `postPlugins` property and concatenate them in the final configuration.

We can also set the `devtool` to `nosource-source-map` so that we can see line number mappings but not expose the source code to the public internet.

So that we don't end up building an invalid bundle, we can set the build to `bail` as soon as there's an error.

```js
{
    id: 'production',
    postPlugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            }
        })
    ],
    bail: true,
    devtool: 'nosources-source-map'
}
```

### DefinePlugin

Some JavaScript libraries also use `NODE_ENV` to toggle the amount of logging they do. However, since the `NODE_ENV` is only available in the NodeJS environment and not the browser, we'll need to resolve this variable in our source files as part of the build. We can do this using the `DefinePlugin` which essentially does a string-replace.

```js
new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(environment.id)
})
```

## Running the Build

Now that we've got our `webpack.config.js` set up, we can run the build. There are multiple ways to build a project.

> Note: If you're using Windows, you'll want to install `cross-env` and prefix your commands with it so that you can provide environment variables in a uniform way.
> ```sh
npm install --save-dev cross-env
```

### Building for Development

We can run the Dev Server while developing.

```sh
NODE_ENV=development webpack-dev-server --progress
```

This will start a HTTP server on `http://localhost:8080/` as defined in our `webpack.config.js`.

### Building for Production

Just run Webpack!

```sh
NODE_ENV=production webpack
```

### Using npm to run commands

We can alias commands using npm. Add the following to your `package.json`.

```json
  "scripts": {
    "start": "cross-env NODE_ENV=development webpack-dev-server --progress",
    "build:production": "cross-env NODE_ENV=production webpack"
  }
```

Now you can just run the appropriate alias.

```sh
npm run start
npm run build:production
```

## Conclusion

You should now have a project directory which looks something like:

```
./react-dojo/
├── node_modules
├── source
│   ├── index.html.ejs
│   └── index.jsx
├── .babelrc
├── .gitignore
├── package.json
└── webpack.config.js
```
