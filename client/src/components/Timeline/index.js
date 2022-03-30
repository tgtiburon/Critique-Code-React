import React, { useEffect } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs/';

function Timeline(post) {

    const {
        _id,
        createdAt,
        language,
        genre,
        body,
        commentsLength,
        upvotesAmt,
        userName,
        title
    } = post;

    const selectedPost = async (e) => {
        e.preventDefault();
    }
    return (
        <section className="endless-scroll">
            <section key={_id} className="post-body">
                <div type="button" className="up-vote-icon">
                    <i type="upvote" className="fas fa-angle-up"></i>
                </div>
                <div className="title">
                    <a href={`/post/:${_id}`} target="blank">{title}</a>
                    <span>Posted By: <a href="/profile">{userName}</a></span>
                    <span> Created {createdAt} ago </span>
                    <span className="tags"><a href="tag_language">{language}</a>
                    <a href="/tag_genre">{genre}</a></span>
                </div>
                <div className="body">
                    <pre>
                        <code>
                            <SyntaxHighlighter language={language} style={atomOneDark}>
                                {body}
                            </SyntaxHighlighter>
                        </code>
                    </pre>
                </div>
                <div className="info">
                    <a href={`/post/:${_id}`}>{commentsLength} comments</a>
                    <span className="hidden">id</span>
                    <span className="vote-val" id="vote-val{{id}}">{upvotesAmt}</span>
                    <span className="vote-val"> votes</span>
                </div>
                <div type="button" className="down-vote-icon">
                    <i type="downvote" className="fas fa-angle-down"></i>
                </div>
            </section>
        </section>
    )
}

export default Timeline;