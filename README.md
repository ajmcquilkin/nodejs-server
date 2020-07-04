# nodejs-server

## ReactJS App

## ExpressJS Server

- Pug renders content based on *.pug filename
- All Pug modules extend the generic `layout.pug` file
- Can use directories and relative URLs with `.pug` files
- These URLs start in the declared *views* folder in the `server.js` file
- `res.locals.whatever` is passed into all `.pug` files and persists from request to response, where a `res.render('name', {})` passed object does not persist ([see here](https://teamtreehouse.com/community/resrender-passing-in-object-vs-resrenderlocals-variables))
