import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_POST } from '../../utils/queries';
import { useAppContext } from '../../utils/GlobalState';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SinglePost() {
    const { id: postId } = useParams();

    // const [state, dispatch] = useAppContext();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {};

    if(loading) {
        return <div>Working on it...</div>
    }

    return (
        <section className='endless-scroll'>
            <section key={post._id} className="post-body">
                <div type="button" className="up-vote-icon">
                    <i type="upvote" className="fas fa-angle-up"></i>
                </div>
                <div className="title">
                    <a href="single-post" target="blank">{post.title}</a>
                    <span>Posted By: <a href="/profile">{post.userName}</a></span>
                    <span> Created {post.createdAt} ago </span>
                    <span className="tags"><a href="tag_language">{post.tag_language}</a>
                    <a href="/tag_genre">{post.tag_genre}</a></span>
                </div>
                <div className="body">
                    <pre>
                        <code>
                            <SyntaxHighlighter language={post.tag_language} style={atomOneDark}>
                                {post.post_body}
                            </SyntaxHighlighter>
                        </code>
                    </pre>
                </div>
                <div className="info">
                    <a href="/post/{{id}}">{post.comments.length} comments</a>
                    <span className="hidden">id</span>
                    <span className="vote-val" id="vote-val{{id}}">{post.upVoted_user_ids.length}</span>
                    <span className="vote-val"> votes</span>
                </div>
                <div type="button" className="down-vote-icon">
                    <i type="downvote" className="fas fa-angle-down"></i>
                </div>
            </section>
        </section>
    )
}

export default SinglePost;