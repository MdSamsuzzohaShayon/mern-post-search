const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Category = require('./Category');


const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img_src: {
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'category'
    },
    tags: {
        type: [String],
        required: true,
    }
});







module.exports=mongoose.model('post', postSchema);