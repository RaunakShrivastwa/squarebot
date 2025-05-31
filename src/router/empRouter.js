import express from 'express';
import empController from '../controller/empController.js';
import verify from '../auth/verify.js';

const empRouter = express.Router();

console.log("effggf");



empRouter.post('/create',empController.addEmp);
empRouter.get('/getAll',verify('EMP'),empController.getAllEmp);

export default empRouter;