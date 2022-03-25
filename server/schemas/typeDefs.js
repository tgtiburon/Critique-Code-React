const { gql } = require("apollo-server-express");
console.log("Start of typeDefs");
// TODO: We will probably change the way comments work
const typeDefs = gql`
    type Post {
        _id: ID
        upVoted_user_ids: [User]
        downVoted_user_ids: [User]
        title: String
        post_body: String
        vote_count: Number
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
        user(userName:String): User
        posts(userName: String!): [Post]
        post(_id: ID!): Post
      
    }

    type Mutation {

        addUser(userName: String!, email: String!, password: String!, title: String!, github: String!, avatar: String@!): Auth
        updateUser(userName: String!, email: String!, password: String!, title: String!, github: String!, avatar: String@!): User
        deleteUser(userId: ID!): User
        createPost(title: String!, post_body: String!, tag_genre: String!, tag_language: String!): Post
        updatePost(title: String!, post_body: String!, tag_genre: String!, tag_language: String!): Post
        deletePost(postId: ID!): Post
        upVotePost(postId: ID!): Post
        downVotePost(postId: ID!): Post
        createComment(postId: ID!, comment_body: String!): Comment
        updateComment(postId: ID!, comment_body: String!): Comment
        deleteComment(postId: ID!): Comment
        login(email: String!, password: String!): Auth
      


    }

  

`;

console.log("End of typedefs");

module.exports = typeDefs;
