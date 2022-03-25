import { gql } from "@apollo/client";
/* 
    WE WANT TO BE ABLE TO QUERY USER CONTENT CONDITIONALLY

    IF WE ARE ON A PROFILE WE WANT TO SHOW ONLY THE USER IN QUESTIONS POSTS

    IF A TERM IS SEARCHED, ONLY SHOW POSTS RELATED TO TERM
*/

export const QUERY_ALL_POSTS = gql`
  query posts {
    posts {
      _id
      upVoted_user_ids
      downVoted_user_ids
      title
      post_body
      vote_count
      tag_genre
      tag_language
      createdAt
      comments {
        _id
      }
    }
  }
`;

export const QUERY_ALL_COMMENTS = gql`
  query comments($id: ID!) {
    comments(_id: $id) {
      _id
      comment_body
      createdAt
      userName
    }
  }
`;
// we probably want more info on user query (comments, post info (???))
export const QUERY_USER = gql`
  query user($userName: String!) {
    user(userName: $username) {
      _id
      userName
      email
      title
      bio
      github
      avatar
      password
      posts {
        _id
        title
        createdAt
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      upVoted_user_ids
      downVoted_user_ids
      title
      post_body
      vote_count
      tag_genre
      tag_language
      createdAt
      comments
    }
  }
`;
