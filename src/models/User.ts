// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  gender: string;
  color: string;
  age: number;
  address: string;
  cars: mongoose.Types.ObjectId[];
  house: mongoose.Types.ObjectId;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  color: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
  house: { type: Schema.Types.ObjectId, ref: 'House' }
},{timestamps: true});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
