const mongoose = require("mongoose");
const Comment = require("./Comment");
const { format_date } = require("../utils/helpers");

const { Schema } = mongoose;

const postSchema = new Schema(
  {
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
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },

    vote_count: {
      type: Number,
      required: true,
    },

    // user_id: {
    //     type: Number,
    //     required: true
    // },

    tag_genre: {
      type: String,
      required: true,
    },

    tag_language: {
      type: String,
      required: true,
    },
    // comments: [Comment],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
