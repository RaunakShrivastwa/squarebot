import jobModal from "../modal/job.js";
import empModal from "../modal/employee.js";
import RegisterEmail from "../Mail/sendMail.js";

const obj = new RegisterEmail();

class jobController {

    addEmp = async (req, res) => {
        try {
            const job = await jobModal.create(req.body);
            job.postBY = req.id;
            job.save();
            return res.status(201).json(job);

        } catch (err) {

            return res.status(500).json({ Error: err })
        }
    }

    getAllEmp = async (req, res) => {
        try {
            return res.status(200).json(await jobModal.find({}))
        } catch (err) {
            return res.status(500).json({ Error: err })
        }
    }

    applyJObs = async (req, res) => {
        try {
            const { userID, jobID } = req.body;
            const job = await jobModal.findById(jobID).populate('postBY');
            if (!job) {
                return res.status(404).json({ Error: "jobs no longer Exist!!!!!!!!!" })
            }

            if (!userID) {
                return res.status(501).json({ Error: 'user not found or something went wrong' })
            }

            const emp = await empModal.findById(userID);
            console.log("user",emp);
            
            if (!emp) {
                return res.status(404).json({ Error: 'User does not exist' })
            }
            job.allUser.push(emp);
            job.save();
            emp.appliedJobs.push(job);
            emp.save();
            const User = {
                userName:emp.userName,
                appliedRole:job.jobTitle,
                userEmail:emp.userEmail,
                recruiterEmail: job.postBY.userEmail
                
            }
            console.log(User);
            
            obj.sendMail(User);

            return res.status(200).json({ Message: "Applied Successfully" })
        } catch (err) {
            return res.status(500).json({ Error: err })
        }
    }

    getAllJObsByID = async (req, res) => {
        try {
           const job = await jobModal.findById(req.params.id).populate('allUser');
           if(!job){
            return res.status(404).json({Error:'Jobs does not exist'})
           }
          return res.status(200).json({jobs:job})

        } catch (err) {
            return res.status(500).json({ Error: err })
        }
    }


}

export default new jobController();