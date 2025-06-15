import mongoose  from 'mongoose';

const subTodoSchema = new mongoose.Schema({


    content:{
        type: String,
        required: [true , "content is required"],
        trim: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    

},{timestamps: true});

export const SubTodo = mongoose.model('SubTodo' , subTodoSchema);