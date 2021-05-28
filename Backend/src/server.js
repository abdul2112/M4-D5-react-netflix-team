import express from 'express';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import mediaRouter from './services/media/index.js';
import reviewsRouter from './services/reviews/index.js';
import { catchAllErrorHandler } from './errorHandlers.js';

const server = express();

const port = 3001;

// MIDDLEWARES

server.use(cors());

server.use(express.json());

// ROUTES
server.use('/media', mediaRouter);
server.use('/reviews', reviewsRouter);

// ERROR MIDDLEWARES
// server.use(badRequestErrorHandler)
// server.use(notFoundErrorHandler)
// server.use(forbiddenErrorHandler)
server.use(catchAllErrorHandler);

console.table(listEndpoints(server));

server.listen(port, () => {
  console.log('Server is running on port:', port);
});
