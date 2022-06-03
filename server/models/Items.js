import mongoose from 'mongoose';

const itemsSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
       
    },
    stock:{
        type: Number,
       
    }
})

export default mongoose.model("Items", itemsSchema);