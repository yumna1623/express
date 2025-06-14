import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.objectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true,
    }
})

const orderSchema = new mongoose.Schema(
  {
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.objectId,
        ref:"User",
        required:true
    },
    orderItems:{
        type:[orderItemsSchema],
        
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING" , "CANCELLED" , "DELIVERED"],
        
    }
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
