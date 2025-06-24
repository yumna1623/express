//making schema to send on DB

import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name : {
      type : String,
      required:[true , "Please enter product name"]
    },
    quantity : {
      type : Number,
      required:true,
      default:0
    },
    price:{
      type : Number,
      required : true,
      deafult : 0
    },
    image:{
        type : String,
        required : false,
    },
  },
  {
    timestamp : true,
  }
)

const Product = mongoose.model("Product" , ProductSchema)

export default Product