import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
        type:String,
        required:true,
    },
    diagnosedWith:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    bloodGroup:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        enum:["M" , "F"],
        required:true,
    },
    addmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    }
    
  },
  { timeStamps: true }
);
export const Patient = mongoose.model("Patient", patientSchema);
