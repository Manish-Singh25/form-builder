import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL??'', {
  dbName: 'form-builder'
  }).catch(err => console.log(err));

export default  mongoose 