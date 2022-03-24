const { gql } = require("apollo-server-express");

// TODO: We will probably change the way comments work
const typeDefs = gql`
    type Post {
        _id: ID
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
        user:User
    }

    type Query {
        users: [User]
        user: User
        user(id:ID): User
        posts:[Post]
        post(id:ID): Post
        comments: [Comment]
        comment(id:ID): Comment
        

    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!, title: String!, github: String!, avatar: String@!): Auth
        updateUser(userName: String!, email: String!, password: String!, title: String!, github: String!, avatar: String@!): User
        deleteUser(id: Int!): User
        createPost(title: String!, post_body: String!, user_id: Int!, tag_genre: String!, tag_language: String!): Post
        updatePost(title: String!, post_body: String!, user_id: Int!, tag_genre: String!, tag_language: String!): Post
        deletePost(id: Int!): Post
        upVotePost(id:Int!): Post
        downVotePost(id: Int!): Post
        createComment(post_id: Int!, comment_body: String!, user_id: Int!): Comment
        updateComment(post_id: Int!, comment_body: String!, user_id: Int!): Comment
        deleteComment(post_id: Int!): Comment
        login(email: String!, password: String!): Auth


    }

`;

module.exports = typeDefs;
