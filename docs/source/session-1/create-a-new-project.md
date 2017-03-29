---
title: Create a New Project
description: ""
---

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

This will create a `package.json` at the root of your project.

Let's create a source directory.

```
mkdir source
```

And finally a `.gitignore` containing the following:

```
node_modules
*.log
build
```

## Conclusion

You should now have a project directory which looks something like:

```
./react-dojo/
├── node_modules
├── source
├── .gitignore
└── package.json
```