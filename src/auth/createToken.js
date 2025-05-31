import jwt from 'jsonwebtoken';
import empModal from '../modal/employee.js'

const createToken = async (req,res)=>{
   try{
        const {userEmail,userPassword} = req.body;
        console.log(req.body);
        
        const emp = await empModal.findOne({userEmail});
        console.log(emp);
        
        if(!emp || emp.userPassword != userPassword ){
            return res.status(401).json({Error:'Invalide Credential'})
        }
        const token = jwt.sign({id:emp.id,role:emp.role},'abc123',{expiresIn: '1hr'});
        return res.status(201).json({token})

   }catch(err){
    return res.status(500).json({Error:err})
   } 

}


export default createToken;