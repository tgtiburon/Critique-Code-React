const mongoose = require("mongoose");
const { formatDate } = require("../utils/helpers");

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    // id: {
    //     type: Number,
    //     required: true
    // },
    userName: {
      type: String,
      required: true,
    },

    comment_body: {
      type: String,
      required: true,
      maxlength: 560,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
  },

  {
    toJSON: {
      getters: true,
    },
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
