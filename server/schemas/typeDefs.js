const { gql } = require("apollo-server-express");

// TODO: We will probably change the way comments work
const typeDefs = gql`
  type Post {
    _id: ID
    userName: String!
    upVoted_user_ids: [User]
    downVoted_user_ids: [User]
    title: String
    post_body: String
    vote_count: Int
    tag_genre: String
    tag_language: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    comment_body: String
    createdAt: String
    userName: String
  }

  type User {
    _id: ID
    userName: String
    email: String
    title: String
    bio: String
    github: String
    avatar: String
    password: String
    posts: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(userName: String!): User
    posts: [Post]
    post(_id: ID!): Post
    postLang(tag_language: String!): [Post]
    postGenre(tag_genre: String!): [Post]
    comment(_id: ID!): Comment
    comments(_id: ID!): [Comment]
  }

  type Mutation {
    addUser(
      userName: String!
      email: String!
      password: String!
      github: String!
    ): Auth
    updateUser(
      userName: String!
      email: String!
      password: String!
      title: String!
      github: String!
      avatar: String!
    ): User
    deleteUser(userName: String!): User
    createPost(
      userName: String!
      title: String!
      post_body: String!
      tag_genre: String!
      tag_language: String!
    ): Post
    updatePost(
      userName: String!
      title: String!
      post_body: String!
      tag_genre: String!
      tag_language: String!
    ): Post
    deletePost(postId: ID!): Post
    upVotePost(postId: ID!): Post
    downVotePost(postId: ID!): Post
    createComment(postId: ID!, userName: String!, comment_body: String!): Comment
    updateComment(postId: ID!, userName: String!, comment_body: String!): Comment
    deleteComment(postId: ID!): Comment
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
