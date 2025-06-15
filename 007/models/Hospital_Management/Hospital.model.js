import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Stirng,
    },
    specializedIn:[
        {
            type: String
        }
    ]
  },
  { timeStamps: true }
);
export const Hospital = mongoose.model("Hospital", hospitalSchema);
