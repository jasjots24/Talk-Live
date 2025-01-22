
import { generateToken } from "../lib/utils.js"
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'

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

export const login =(req,res)=>{
    res.send('Signup Routes ')
}

export const logout =(req,res)=>{
    res.send('Signup Routes ')
}