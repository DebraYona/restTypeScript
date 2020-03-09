import {Schema , Document, model} from 'mongoose'

export interface IProduct extends Document {
    name: string;
    description:string;
    price: Number;
    image: string;
 
}
const ProductSchema= new Schema({
    name: {
        type: String,
        required: true,
        min:4,
        lowercase: true
    },
    description: {
        type: String,
        
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required : true
    },
    image: {
        type: String,
        required : true
    }
});

const Product = model<IProduct>('Product', ProductSchema);

export default Product; 