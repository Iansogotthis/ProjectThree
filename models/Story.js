const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true,
    },
    comment: {
        type: String,
        required: true,
    },
    posted: {
        type: Date,
        default: Date.now,
    },
});

const StoryPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    authorName:{
        type: String,

    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" },
    story: {
        type: String,
        required: true,
    },
    emotion: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: [CommentSchema],
    created: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('StoryPost', StoryPostSchema);