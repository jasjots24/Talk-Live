
import { generateToken } from "../lib/utils.js"
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import cloudinary from "../lib/cloudinary.js"

export const signup =async(req,res)=>{
    const {fullName, email, password} = req.body;

    try{

        if(!fullName || !password || !email){
            return res.status(400).json({message: "Please fill out all fields"})
        }

        if(password.length <6){
            return res.status(400).json({message: "Password must be at least 6 characters"})
        }
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message: 'User Already exists'});

        //SALT IS USED TO GENERATE pseudorandom STRING THAT IS ADDED TO PASSWORD

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            email,
            fullName,
            password: hashedPassword
        })

        if(newUser){
            // SO IF USER IS CREATED SUCCESSFULLY THEN WE WILL CREATE JWT token for them
            generateToken(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic
            });

        }else{
            return res.status(400).json({message:'Invalid user Data'})
        }
    }
    catch(error){
        console.log("Error in signup", error.message);
        res.status(500).json({message: 'Internal server error '})
    }
}


export const login = async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({message: 'Invalid Credentials'})
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect){
            res.status(400).json({message: 'Invalid Credentials'})
        }

        generateToken(user._id, res)

        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            email : user.email,
            profilePic : user.profilePic,
        });
    }
    catch(error){
        console.log('Error while loging', error.message);
        res.status(500).json({message: 'Internal Server Error'})
        
    }
}


export const logout =(req,res)=>{
    try{
        res.cookie('jwt', "" , {maxAge:0})
        res.status(200).json({message:"Logged out Successfully"})
    }
    catch(error){ 
        console.log('Error while loging-out', error.message);
        res.status(500).json({message: 'Internal Server Error'})
        
    }
}


export const updateProfile = async(req,res)=>{

    try{

        const {profilePic} = req.body;
        const userId = req.user._id;

        if(!profilePic){
            return res.status(400).json({message: 'Profile pic is required'});
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic:uploadResponse.secure_url}, {new:true})

        res.status(200).json(updatedUser)
    }
    catch(error){
        console.log('Error in updated profile', error);
        res.status(500).json({message : 'Internal Server Error'});
    }

}


export const checkAuth = (req,res)=>{
    try{
        res.status(200).json(req.user);
    }
    catch(error){
        console.log('Error In checkAuth controller', error.message);
        res.status(500).json({message : 'Internal Server Error'})
    }
}