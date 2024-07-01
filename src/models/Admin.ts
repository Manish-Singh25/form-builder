import mongoose, { Schema, Document } from 'mongoose';
import { USER_STATUS } from '../helpers/const';

interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
  status: string;
}

const AdminSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, enum: USER_STATUS, required: true, default: 'ACTIVE' }
},{
  timestamps: true,
  strict: true
});

const Admin = mongoose.model<IAdmin>('Admin', AdminSchema);
export default Admin;
