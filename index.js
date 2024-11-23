import express from 'express';
import jsonServer from 'json-server';
import { slowingDownMiddleware } from './slow.middleware.js';

const server = express();

server.use(slowingDownMiddleware);
server.use(jsonServer.router('server/db.json'));

const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on Port ${port}`);
});
