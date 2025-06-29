import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage:{

    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        default:0,
        type:Number
    },
    category:{
        type:mongoose.Schema.Types.objectId,
        ref:"Category",
        required: true
    },
    ownership:{
        type:mongoose.Schema.Types.objectId,
        ref:"User",
        required: true
    }
  },
  { timeStamps: true }
);
export const Product = mongoose.model("Product", productSchema);
