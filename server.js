import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.jon");
const middlewares = jsonServer.defaults();
const port = process.env.POR || 320;

server.use(middlewaRes);
server.use(router);
server.listen(port);
