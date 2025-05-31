import mongoose from "mongoose";

const empSchema = new mongoose.Schema({
    userName:{type : String,required:true},
    userEmail: {type : String, unique:true,required:true},
    userPassword: {type:String,required:true},
    role:{type:String, enum:['EMP',"recruiter"],default:'EMP'},
    appliedJobs: [{
        type:mongoose.Schema.Types.ObjectId,
                ref:'JOB'
    }]
});


const empModal = mongoose.model('EMP',empSchema);

export  default empModal;