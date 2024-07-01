// src/models/Car.ts
import mongoose, { Schema, Document } from 'mongoose';
import { FORM_STATUS, FORM_TYPE } from 'src/helpers/const';

interface IForm extends Document {
  name: string;
  createdBy: string;
  publishedBy: string;
  publishDate: Date;
  type: string;
  status: string;
}

const FormSchema: Schema = new Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Types.ObjectId, required: true, ref: 'Admin' },
  publishedBy: { type: mongoose.Types.ObjectId, ref: 'Admin'},
  publishDate: { type: Date },
  type: { 
    type: String,
    enum: FORM_TYPE,
    required: true, 
    default: 'BROADCAST'
  },
  status: { 
    type: String,
    enum: FORM_STATUS,
    required: true, 
    default: 'DRAFT'
  }
});

const Form = mongoose.model<IForm>('Form', FormSchema);
export default Form;
