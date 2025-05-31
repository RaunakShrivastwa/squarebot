import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobTitle:{type:String},
    jobDesc :{type:String},
    allUser: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'EMP'
    }],
    postBY :{type:mongoose.Schema.Types.ObjectId,ref:'EMP'}
});


const jobModal = mongoose.model('JOB',jobSchema);

export  default jobModal;