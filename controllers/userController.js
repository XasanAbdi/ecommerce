import Users from "../models/userModels.js";
import generateToken from "../utilities/generatetoken.js";

export const register=async(req,res)=>{
    const {name,email,password,address,phone}=req.body;
    const userExits=await Users.findOne({email})
   if (userExits) {
    res.status(400).json({message:'User allready Exists'})
   }else{
    const user =Users.create({
        name,email,password,address,phone
    }) 
    if (user) {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            token:generateToken(user._id)


        })
    
    } else{
        res.status(401).json({message:'invalid user data'});
    }

   }
      
 
    
}
export const login=async(req,res)=>{
    const {email,password} = req.body;
    const user =await Users.findOne({email});
    if (user && password==user.password) {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            token:generateToken(user._id)


        })
    }
    else{
        res.status(401).json({message:'invalid user or password'});

    }
} 
