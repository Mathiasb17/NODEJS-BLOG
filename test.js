const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog');

Post.find({title: 'my first blog post'}, (error, posts) => {
    console.log(error, posts)
});

// Post.create({
//     title: 'my third first blog post',
//     description: 'third Blog post description',
//     content: 'third lorem ipsum content'
// }, (error, post) => {
//     console.log(error, post);
// })
