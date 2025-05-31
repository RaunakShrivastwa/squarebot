import express from 'express';
import jobController from '../controller/jobController.js';
import verify from '../auth/verify.js';

const jobRouter = express.Router();

jobRouter.post('/create',verify('recruiter'),jobController.addEmp);
jobRouter.get('/getAll',verify('EMP'),jobController.getAllEmp);
jobRouter.post('/applied',verify('EMP'),jobController.applyJObs);
jobRouter.get('/getJob/:id',verify('recruiter'),jobController.getAllJObsByID);

export default jobRouter;