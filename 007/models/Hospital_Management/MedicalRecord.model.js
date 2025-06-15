import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    username: {
     

    },
  },
  { timeStamps: true }
);
export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
