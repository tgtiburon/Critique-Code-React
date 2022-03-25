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
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $post_body: String!
    $tag_genre: String!
    $tag_language: String!
  ) {
    createPost(
      post_body: $post_body
      title: $title
      tag_genre: $tag_genre
      tag_language: $tag_language
    ) {
      _id
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

export const ADD_COMMENT = gql`
  mutation addComment($comment_body: String!, $postId: ID!) {
    addComment(comment_body: $comment_body, postId: $postId) {
      _id
      comments {
        _id
        comment_body
        userName
        createdAt
      }
    }
  }
`;
