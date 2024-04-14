import { Schema, model, models } from "mongoose";

const diseaseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  image: {
    type: String,
    required: [true, "Image is Required"],
  },
  des: {
    type: String,
    required: [true, "Description is Required"],
  },
  symptoms: {
    type: String,
  },
  treatment: {
    type: String,
  },
  prevents: {
    type: String,
  },
  causes: {
    type: String,
  },
  medicine: {
    type: String,
  },
  remark: {
    type: String,
  },
});

const Disease = models.Disease || model("Disease", diseaseSchema);

export default Disease;
