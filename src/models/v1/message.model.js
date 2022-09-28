import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
    {
        userId:{
          type:mongoose.Types.ObjectId,
          ref:'User',
            required:true,
        },
        status: {
            type:String,
            enum : ['seen','unseen'],
            required:true,
            default:"seen",
        },
        text: {
            type:String,
            required:true,
        },
        type: {
            type:String,
            enum : ['text','image','file'],
            required:true,
            default:'text',
        },
    },
    {
        timestamps: true,
    }
);

const MessageModel = mongoose.model("Message", messageSchema);

export { MessageModel };
