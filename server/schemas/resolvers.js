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
    user: async ({ id }) => {
      const newUser = User.findOne({ id: id });
      if (newUser) {
        return await newUser;
      }
      throw new AuthenticationError("User with that id not found!");
    },

    // =============================================================
    // Post Queries
    
    // Find all posts /
    posts: async () => {
      return await Post.find();
    },
    // Find a specific post by id /:id
    post: async ({ id }) => {
      const newPost = Post.findOne({ id: id });
      if (newPost) {
        return await newPost;
      }
      throw new AuthenticationError("Post with that id not found!");
    },
    // TODO:
    // Find post by specific tag /tag/:tag_language

    // TODO: Not sure we want to do it this way
    // Find post by funny or advice /funny /advice  
    


    //=============================================================
    // Comment Queries

    // Find all comments
    comments: async () => {
      return await Comment.find();
    },

    // Find a comment by id
    comment: async ({ id }) => {
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
    addUser: async (parent, { userName, email, password, github }) => {
      const user = await User.create({
        userName: userName,
        email: email,
        password: password,
        title: "Please add title",
        github: github,
        avatar: "avatar1.png",
      });
      const token = signToken(user);
      return { token, user };
    },
    // Update a user /:id
    // userName, email, password, title, github, avatar


    // Delete a user /:id
    // id

    
    // ==========================================================
    // Post Mutations

    // Create Post /
    // title, post_body, user_id, tag_genre, tag_language

    // Update Post /:id
    // title, post_body, user_id, tag_genre, tag_language

    // Delete Post /:id  


    // upvote /upvote/:id
    // downvote /downvote/:id

    // =============================================================
    // Comment Mutations

    // Create Comment / 
    // post_id, comment_body, user_id  with auth
    // Update Comment /:id
    // post_id, comment_body, user_id from session

    // delete comment /:id
    // id

    // Login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new AuthenticationError("Incorrect credentials");
      const userPassword = await player.isCorrectPassword(password);

      if (!userPassword) throw new AuthenticationError("Incorrect credentials");

      const token = signToken(user);

      return { token, user };
    },
    // Logout

  },
};

module.exports = resolvers;
