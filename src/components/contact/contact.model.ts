import { Document, Model, model, Schema, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

/**
 * --------------------------------
 * Interface for contact Model
 * --------------------------------
 */

export interface IContactDocument {
    contactNumber: string;
}

export interface IContact extends IContactDocument, Document {}

export interface IContactModel extends Model<IContact> {
    paginate(query, option: { limit?: number; page?: number }): any;
}

/**
 * contact Schema for store in DB
 */

export const contactSchema: Schema<IContactDocument, IContactModel> = new Schema(
    {
        contactNumber: {
            type: Schema.Types.String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true,
    },
);

contactSchema.plugin(mongoosePaginate);
contactSchema.index({contactNumber: 1})
export const Contact = model<IContactDocument, IContactModel>('contacts', contactSchema);
export default Contact;
