const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({

    id: {
        type: Number,
        required: true
    },
    upVoted_user_ids: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    downVoted_user_ids: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    title: {
        type: String,
        required: true,
    },

    post_body: {
        type: String,
        required: true
    },

    vote_count: {
        type: Number,
        required: true
    },

    user_id: {
        type: Number,
        required: true
    },

    tag_genre: {
        type: String,
        required: true
    },

    tag_language: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;