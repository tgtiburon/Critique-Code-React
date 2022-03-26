import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
    $github: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
      github: $github
    ) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userName: String!) {
    deleteUser(userName: $userName) {
      userName
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $userName: String!
    $email: String!
    $password: String!
    $github: String!
    $title: String!
    $avatar: String!
  ) {
    updateUser(
      userName: $userName
      email: $email
      password: $password
      github: $github
      title: $title
      avatar: $avatar
    ) {
      _id
      userName
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $userName: String!
    $title: String!
    $post_body: String!
    $tag_genre: String!
    $tag_language: String!
  ) {
    createPost(
      userName: $userName
      title: $title
      post_body: $post_body
      tag_genre: $tag_genre
      tag_language: $tag_language
    ) {
      _id
      userName
      title
      post_body
      tag_genre
      tag_language
      comments {
        _id
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment(
    $postId: ID!
    $userName: String!
    $comment_body: String!
  ) {
    createComment(
      postId: $postId
      userName: $userName
      comment_body: $comment_body
    ) {
      _id
      userName
      comment_body
      createdAt
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $postId: ID!
    $userName: String!
    $comment_body: String!
  ) {
    updateComment(
      postId: $postId
      userName: $userName
      comment_body: $comment_body
    ) {
      _id
      userName
      comment_body
      createdAt
    }
  }
`;
