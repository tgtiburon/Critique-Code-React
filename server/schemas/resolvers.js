const { AuthenticationError } = require("apollo-server-express");

const { User, Post, Comment } = require("../models");
const auth = require("../utils/auth");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // ==========================================================
    // User Queries

    // gets all users /
    users: async () => {
      return await User.find();
    },
    // gets user by id  /:id
    user: async (parent, { userName }) => {
      const newUser = User.findOne({ userName });
      if (newUser) {
        return await newUser;
      }
      throw new AuthenticationError("User with that name  not found!");
    },

    // Get the current user
    me: async (parent, args, context) => {
      // Are they authorized
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("posts");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },

    // =============================================================
    // Post Queries

    // Find all posts /
    posts: async () => {
      return await Post.find();
    },
    // Find a specific post by id /:id
    post: async (parent, { id }) => {
      const newPost = Post.findOne({ id: id });
      if (newPost) {
        return await newPost;
      }
      throw new AuthenticationError("Post with that id not found!");
    },

    // Find post by specific tag /tag/:tag_language
    postLang: async (parent, { tag_language }) => {
      const langPost = Post.find({ tag_language: tag_language }).exec();
      console.log(tag_language);

      if (langPost) {
        return await langPost;
      }
      throw new AuthenticationError("Post with that language not found!");
    },

    // Find post by funny or advice /funny /advice
    postGenre: async (parent, { tag_genre }) => {
      const genrePost = Post.find({ tag_genre: tag_genre });
      if (genrePost) {
        return await genrePost;
      }
      throw new AuthenticationError("Post with that genre not found!");
    },

    //=============================================================
    // Comment Queries

    // Find all comments
    comments: async () => {
      return await Comment.find();
    },

    // Find a comment by id
    comment: async (parent, { id }) => {
      const newComment = Comment.findOne({ id: id });
      if (newComment) {
        return await newComment;
      }
      throw new AuthenticationError("Comment with that id not found!");
    },
  },

  Mutation: {
    // =====================================================
    // User Mutations

    // Create a user  /
    // username, email, password, title, github, avatar
    addUser: async (parent, { userName, email, github, password }) => {
      const user = await User.create({ userName, email, github, password });
      const token = signToken(user);
      return { token, user };
    },
    // Update a user /:id
    // userName, email, password, title, github, avatar
    updateUser: async (
      parent,
      { userName, email, github, password, title, avatar }
    ) => {
      const user = await User.findOneAndUpdate({
        userName,
        email,
        github,
        password,
        title,
        avatar,
      });
      const token = signToken(user);
      return { token, user };
    },

    // Delete a user /:id
    // id
    deleteUser: async (parent, { userName }) => {
      const user = await User.findOneAndDelete({ userName });
      // What do we want to return?
      if (user) {
        return await user;
      }
      throw new AuthenticationError("User with that id not found!");
    },

    // ==========================================================
    // Post Mutations

    // Create Post /
    // title, post_body, user_id, tag_genre, tag_language
    // TODO: remove username from create post
    createPost: async (
      parent,
      { userName, title, post_body, tag_genre, tag_language },
      context
    ) => {
      if (context.user) {
        const newPost = await Post.create({
          userName: context.user.userName,
          title,
          post_body,
          tag_genre,
          tag_language,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: Post._id } },
          { new: true }
        );
        return newPost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // Update Post /:id
    // title, post_body, user_id, tag_genre, tag_language
    //TODO: Might have to change
    updatePost: async (
      parent,
      { userName, title, post_body, tag_genre, tag_language }
    ) => {
      const newPost = await Post.findOneAndUpdate({
        userName,
        title,
        post_body,
        tag_genre,
        tag_language,
      });
      if (newPost) {
        return await newPost;
      }
      throw new AuthenticationError("Could not update post!");
    },

    // Delete Post /:id
    //TODO:
    deletePost: async (parent, { id }) => {
      const post = await Post.findOneAndDelete({ id });
      if (post) {
        return await post;
      }
      throw new AuthenticationError("Could not delete post!");
    },

    // upvote /upvote/:id
    // downvote /downvote/:id

    // =============================================================
    // Comment Mutations

    // Create Comment /
    // post_id, comment_body, user_id  with auth
    createComment: async (
      parent,
      { postId, userName, comment_body },
      context
    ) => {
      if (context.user) {
        const newComment = await Comment.create({
          postId,
          userName: context.user.username,
          comment_body,
        });

        await Post.findByIdAndUpdate(
          { _id: postId },
          { $push: { comments: newComment._id } },
          { new: true }
        );
        return newComment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Update Comment /:id
    // post_id, comment_body, user_id from session
    //TODO: Might need to update too
    updateComment: async (parent, { postId, userName, comment_body }) => {
      const updatedComment = await Comment.findOneAndUpdate({
        postId,
        userName,
        comment_body,
      });
      if (updatedComment) {
        return await updatedComment;
      }
      throw new AuthenticationError("Could not update Comment!");
    },

    // delete comment /:id
    // id
    deleteComment: async (parent, { id }) => {
      const comment = await Comment.findOneAndDelete({ id });
      if (comment) {
        return await comment;
      }
      throw new AuthenticationError("Could not delete comment!");
    },

    // Login
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });
      if (!user) throw new AuthenticationError("Incorrect credentials");
      const userPassword = await user.isCorrectPassword(password);

      if (!userPassword) throw new AuthenticationError("Incorrect credentials");

      const token = signToken(user);

      return { token, user };
    },
    // Logout
  },
};

module.exports = resolvers;
