
import cloudinary from "../lib/cloudinary.js";
import message from "../models/message.model.js";
import User from "../models/user.model.js"

export const getUserForSidebar = async(req,res)=>{
try{
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({_id: { $ne: loggedInUserId}}).select('-password'); // THIS SAYES THAT FIND ALL USER EXCEPT THE LOGIN USER/OWNER OF ACCOUNT & ALSO DO NOT FETCH THE PASSWORD 

    res.status(200).json(filteredUsers);

}
catch(error){
    console.log('Error in getUserForSidebar:', error.message);
    res.status(500).json({message: 'Internal Server Error'})
}
}

export const getMessages = async(req,res)=>{
    try{
        const {id:userToChatId} = req.params;
        const SenderId = req.user._id

        const messages = await message.find({
            $or:[
                {SenderId:myId , receiverId: userToChatId},
                {SenderId: userToChatId , receiverId: myId}
            ]
        })

        res.status(200).json(messages)
    }

    catch(error){
        console.log('Error in getMessage:', error.message);
        res.status(500).json({message: 'Internal Server Error'})
    }
}

export const sendMessage = async(req,res)=>{
    try{
        const {text, image} = req.body;
        const {id:receiverId} =req.params
        const SenderId = req.user._id;
        
        let imageUrl;
        if(imageUrl){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage =  new Message({
            SenderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

        res.status(201).json(newMessage)
    }
    catch{
        console.log('Error in sendMessage:', error.message);
        res.status(500).json({message: 'Internal Server Error'})
    }
}