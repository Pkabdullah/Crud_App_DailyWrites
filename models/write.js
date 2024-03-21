// import mongoose, { Schema } from "mongoose";

// const writeSchema = new Schema(
//     {
//         heading: String,
//         description: String,
//     },
//     {
//         timestamps: true,
//     }
// );
// const Write = mongoose.model("Write", writeSchema) || mongoose.model("Write", writeSchema);
// export default Write;


import mongoose, { Schema } from "mongoose";

const writeSchema = new Schema(
  {
    heading: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Write = mongoose.models.Write || mongoose.model("Write", writeSchema);

export default Write;