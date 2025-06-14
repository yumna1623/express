import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({

    content:{
        type: String,
        required: [true, "Content is required"],
    },
    complete:{
        type:Boolean,
        default: false
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true 
        },
        subTodos:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubTodo'
            }
        ]
},{timeStamps: true});
export const Todo = mongoose.model('Todo', todoSchema);