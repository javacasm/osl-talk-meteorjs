# file-load

Meteor loads all of your files in your project.

- `lib` folders will load first and `main.*` files last.
- `client/` files will be sent to the client.
- `server/` files will be kept in the server.
- `private/` will only be available through the [Assets](http://docs.meteor.com/#/full/assets) API.
- `public/` files will be served as static files.
- Any other folder not listed above will could be used in the client and the server.

Meteor bundles your application providing source maps for `js` and `css` by default.

The bundle destination is at `.meteor/local/build/programs`. For this directory to exists you have to run the application at least once, of course xD.
