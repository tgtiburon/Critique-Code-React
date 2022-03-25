import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login(
        $userName: String!, 
        $password: String!
        ) {
        login(
            userName: $userName, 
            password: $password
            ) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $userName: String!, 
        $email: String!, 
        $password: String!, 
        $github: String!
        ) {
        addUser(
            userName: $userName, 
            email: $email, 
            password: $password
            ) {
            token
            user {
                _id
            }
        }
    }
`;

export const CREATE_POST = gql`
    mutation createPost(
        $title: String!, 
        $post_body: String!, 
        $tag_genre: String!, 
        $tag_language: String!
        ) {
        createPost(
            title: $title,
            post_body: $post_body
            tag_genre: $tag_genre
            tag_language: $tag_language
        )    
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment(
        $comment_body: String!
        $userName: String!
        ) {
        addComment(
            comment_body: $comment_body
            userName: $userName
        )
    }
`;