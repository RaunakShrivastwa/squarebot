import empModal from "../modal/employee.js";

class empController {

    addEmp = async (req, res) => {
        try {
            return res.status(201).json(await empModal.create(req.body));
        } catch (err) {

            return res.status(500).json({ Error: err })
        }
    }

    getAllEmp = async (req, res) => {
        try {
            return res.status(200).json(await empModal.find({}).populate('appliedJobs'))
        } catch (err) {
            return res.status(500).json({ Error: err })
        }
    }

    // getAllJObs = async (req, res) => {
    //     try {

    //     } catch (err) {
    //         return res.status(500).json({ Error: err })
    //     }
    // }


}

export default new empController();