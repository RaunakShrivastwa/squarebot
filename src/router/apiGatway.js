import express from 'express';
import empRouter from './empRouter.js';
import jobRouter from './jobRouter.js';
import createToken from '../auth/createToken.js';

const apiRouter = express.Router();

console.log("ruuu");


apiRouter.use('/emp',empRouter);
apiRouter.use('/job',jobRouter);
apiRouter.post('/create/Token',createToken);

export default apiRouter;