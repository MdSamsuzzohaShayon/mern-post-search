const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./Post');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique : true,

    }
});



// to prevent referance , 
// for example when we delete book it will also delete the author that we referancing to the book
// to prevent this 
categorySchema.pre('remove',(next)=>{
    Post.find({category: this.id}, (err, post)=>{
        if(err){
            next(err);
        }else if(post.length > 0){
            next(new Error("this category post still"));
        }else{
            next();
        }
    })
});


module.exports = mongoose.model('category', categorySchema);