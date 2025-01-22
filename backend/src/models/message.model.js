import mongoose from "mongoose";

const messageSchema =new mongoose.Schema(

    {
        SenderId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
        receiverId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
        text:{
            type: String
        },
        image:{
            type: String
        },
    },
    
    {timestamps: true}
);

const Message = mongoose.model('Message', messageSchema);

export default Message;