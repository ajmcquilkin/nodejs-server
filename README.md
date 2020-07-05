# nodejs-server

## ReactJS App

## ExpressJS Server

- Pug renders content based on *.pug filename
- All Pug modules extend the generic `layout.pug` file
- Can use directories and relative URLs with `.pug` files
- These URLs start in the declared *views* folder in the `server.js` file
- `res.locals.whatever` is passed into all `.pug` files and persists from request to response, where a `res.render('name', {})` passed object does not persist ([see here](https://teamtreehouse.com/community/resrender-passing-in-object-vs-resrenderlocals-variables))
- [Helpful link](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change) for server development
- `/bin/www` only used in production, `yarn dev` bypasses this file ([see here](https://stackoverflow.com/questions/23169941/what-does-bin-www-do-in-express-4-x))
- Keep `yarn dev` script as `nodemon`, configuration is done in `nodemon.json` file *only*
