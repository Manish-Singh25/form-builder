// src/models/House.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IHouse extends Document {
  name: string;
  size: string;
  address: string;
  type: string;
}

const HouseSchema: Schema = new Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  address: { type: String, required: true },
  type: { type: String, required: true }
});

const House = mongoose.model<IHouse>('House', HouseSchema);
export default House;
