import jwt from 'jsonwebtoken';

const verify = (role)=>{
    return async (req,res,next)=>{
    try{
    const token = req.header('Authorization');
    if(!token){
        return res.status(403).json({Error:'No Token Provided'})
    }

    const decode = jwt.verify(token,'abc123');
    console.log(decode.role,role);
    
    
    if(decode.role == role || decode.role == 'recruiter'){
        next();
    }
    else{
        return res.status(403).json({Error:"Unautorized User"})
    }
    req.id = decode.id
    
    }catch(err){
       return res.status(500).json({Error:err}) 
    }
}
}

export default verify;