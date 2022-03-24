const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    id: {
        type: Number,
        required: true
    },

    comment_body: {
        type: String,
        required: true
    },

    user_id: {
        type: Number,
        required: true
    },

    post_id: {
        type: Number,
        required: true
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;