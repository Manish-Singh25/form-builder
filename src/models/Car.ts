// src/models/Car.ts
import mongoose, { Schema, Document } from 'mongoose';

interface ICar extends Document {
  name: string;
  number: string;
  colour: string;
  purchaseDate: Date;
  companyName: string;
}

const CarSchema: Schema = new Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  colour: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  companyName: { type: String, required: true }
});

const Car = mongoose.model<ICar>('Car', CarSchema);
export default Car;
