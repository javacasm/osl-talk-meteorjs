- [Official docs](http://docs.meteor.com/#/full/usingpackages)

#### Meteor has its own ecosystem of packages

There is, like `npm` is for [nodejs](https://nodejs.org), a package manager for Meteor. But it is integrated already with the Meteor command line. That is:
 - `meteor add <package-name>`
 - `meteor remove <package-name>`
 - `meteor update <package-name>`

Some are already there and another you have to add them or, better said, install them.
 - [Packages bundled with Meteor](
      github.com/meteor/meteor/tree/devel/packages
   )
 - Avaliable packages available through the [atmosphere website](atmospherejs.com)

Most of the packages work in the client and in the server,
but others don't.

When you install a package it goes to the `packages` folder on the main directory of the project. So, say you installed `bootstrap-3` with

    $ meteor add mrt:bootstrap-3

will be installed at packages/boostrap-3.

By default, a Meteor application comes with these packages

meteor-platform
autopublish
insecure

You can find them in ".meteor/packages" at your project's folder.

The first is a bundle of the basic, or normally needed,
packages. You can see them in the "package.js" of this folder
  - [github.com/meteor/meteor/blob/devel/packages/meteor-platform](
      github.com/meteor/meteor/blob/devel/packages/meteor-platform
    )

The "autopublish" package makes all the collections publish
all the documents they have to the client. You want this
for prototyping but do "meteor remove autopublish" once you
have some "Meteor.publish" handlers set up.

The "insecure" package is also there for prototyping. This package
allows any operation on your database(s) directly on the client. So
yes, actually if you deploy some app with this you'll remove this
for sure.

In any case, Meteor warns you about these two packages above while
using them so you are aware of what is going on.

### On the Client

There is a `Package` global were all packages live. To see what is installed by default run the meteor server and open your browser

### On the Server

There is a `Npm.require` instead of `node`'s require which is not defined for the Meteor runtime.

### npm packages and Meteor

Meteor has no `require` function like `node` has. Also it has no `__filename` or `__dirname`. Instead there is a `Npm.require` function. And it only works in the server.

The main difference between `node`'s require and `Npm.require` is that you only can require `npm` package installed were Meteor bundles your project. That is:

    .meteor/local/build/programs/server

So you can, in principle, install packages like so

    $ npm install --prefix .meteor/local/build/programs/server react

And then require them in a `js` file.

```js
 var React = Npm.require('react');
```
There are workarounds, but this is a design decission.
