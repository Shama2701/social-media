import mongoose from 'mongoose';

const postSchema =mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tag:[String],
    selectedFiles:String,
    likesCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
});

const postMessage=mongoose.model('postMessage',postSchema);

export default postMessage;





// import mongoose from "mongoose";

// const postSchema=mongoose.Schema({
//     title:String,
//     message:String,
//     creator:String,
//     tags:[String],
//     selectedFile:String,
//     likeCount:{
//         type:Number,
//         default:0
//     },
//     createdAt:{
//         type:Date,
//         default:new Date()
//     },
// });
// const PostMessage=mongoose.model(`PostMessage`,postSchema);

// export default PostMessage;