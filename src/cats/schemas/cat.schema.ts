import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Person' })
  author: MongooseSchema.Types.ObjectId;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
