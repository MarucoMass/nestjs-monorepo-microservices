import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({ versionKey: false})
export class Order extends AbstractDocument {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    email: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);