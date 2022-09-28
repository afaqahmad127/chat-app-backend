import { MessageModel } from "../../models/index.js";

const createMessage = (body) => {
    return MessageModel(body).save();
};
const getChatMessages = () => {
    return MessageModel.aggregate([
        {
            $lookup: {
                from: 'users',
                let: { "id": "$userId" },
                pipeline: [
                    { $match: { $expr: { $eq: ['$_id', '$$id'] },},},
                    {
                        $project: {
                            firstName:1,
                            lastName:1,
                            imageUrl:1,
                            id:'$_id',
                            _id:0,
                        },
                    }
                ],
                as: "author"
            },
        },
        {
            $unwind:'$author'
        },
        {
            $project:{
               id:'$_id',
                author:1,
                type:1,
                status:1,
                text:1,
                createdAt:1,
                _id:0,
            }
        }
    ])
};
const getChatMessage = (id) => {
    return MessageModel.aggregate([
        {
            $match:{_id:id}
        },
        {
            $lookup: {
                from: 'users',
                let: { "id": "$userId" },
                pipeline: [
                    { $match: { $expr: { $eq: ['$_id', '$$id'] },},},
                    {
                        $project: {
                            firstName:1,
                            lastName:1,
                            imageUrl:1,
                            id:'$_id',
                            _id:0,
                        },
                    }
                ],
                as: "author"
            },
        },
        {
            $unwind:'$author'
        },
        {
            $project:{
                id:'$_id',
                author:1,
                type:1,
                status:1,
                text:1,
                createdAt:1,
                _id:0,
            }
        }
    ])
};

export default { createMessage,getChatMessages,getChatMessage };
