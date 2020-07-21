const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// const Category = require('../models/Category');



// GETTING ALL POSTES
router.get('/post', async (req, res, next) => {
    let post = Post.find();
    try {
        let allPost = await post.exec();
        res.status(200).json({
            message: "getting all posts",
            posts: allPost.map(p => {
                return {
                    title: p.title,
                    description: p.description,
                    category: p.category,
                    tags: p.tags,
                    id: p._id
                }
            }),
            request: {
                type: "GET",
                url: "localhost:4000/admin/post"
            }
        });
    } catch (error) {
        console.log(error);
    }
});




// MAKING A POST ASYNC WAY
router.post('/post', async (req, res, next) => {

    const { title, description, category, tags } = req.body;
    const newPost = new Post();
    newPost.title = title;
    newPost.description = description;
    newPost.category = category;
    newPost.tags = tags;
    try {
        const savePost = await newPost.save();
        console.log(savePost);
        res.status(201).json({
            message: "post is been created",
            createdPost: {
                title,
                description,
                category,
                tags
            },
            request: {
                type: "GET",
                url: 'localhost:4000/admin/post/' + savePost._id
            }
        });
    } catch (error) {
        console.log(error);
    }
});







// GETTING A SINGLE POST
router.get('/post/:id', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id).populate('category').exec();
        console.log(post);
        res.status(200).json({
            message: "Getting single post by id",
            post: {
                title: post,
                // category: post.category,
            }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});





// SEARCHING POST BY TAGS





// DELETE A POST
router.delete('/post/:id', async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "post is been deleted",
            post,
            request: {
                type: "DELETE",
                url: "localhost:4000/admin/post"+req.params.id
            }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;