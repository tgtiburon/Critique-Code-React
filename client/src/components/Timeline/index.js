import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_POSTS, QUERY_POST } from '../../utils/queries';
import { useAppContext } from '../../utils/GlobalState';
import { UPDATE_TIMELINE } from '../../utils/actions';

function Timeline() {
    const [state, dispatch] = useAppContext();
    // change posts shown in timeline with global state
    const { activeTimeline } = state;
    const { loading, data } = useQuery(QUERY_ALL_POSTS);
    useEffect(() => {
        if (data) {
            console.log(data.posts);
            dispatch({
                type: UPDATE_TIMELINE,
                activeTimeline: data.posts
            })
        }
    }, [data, loading, dispatch])

    console.log(activeTimeline)

    return (
        <section className="endless-scroll">
            {activeTimeline.map((post) => (
            <section key={post._id} className="post-body">
                <div type="button" className="up-vote-icon">
                    <i type="upvote" className="fas fa-angle-up"></i>
                </div>
                <div className="title">
                    <a href="single-post" target="blank">Post Link</a>
                    <span>Posted By: <a href="/profile">Username</a> </span>
                    <span> Created {post.createdAt} ago </span>
                    <span className="tags"><a href="tag_language">Tag Language</a>
                    <a href="/tag_genre"></a></span>
                </div>
                <div className="body">
                    <pre>
                        <code>
                            {post.post_body}
                        </code>
                    </pre>
                </div>
                <div className="info">
                    <a href="/post/{{id}}">Post LINK</a>
                    <span className="hidden">id</span>
                    <span className="vote-val" id="vote-val{{id}}">vote_count</span>
                    <span className="vote-val"> votes</span>
                </div>
                <div type="button" className="down-vote-icon">
                    <i type="downvote" className="fas fa-angle-down"></i>
                </div>
            </section>
            ))}
        </section>
    )
}

export default Timeline;