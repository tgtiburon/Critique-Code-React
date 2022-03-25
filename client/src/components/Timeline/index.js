import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_POSTS } from '../../utils/queries';
import { useAppContext } from '../../utils/GlobalState';
import { UPDATE_TIMELINE } from '../../utils/actions';

function Timeline() {
    // const [state, dispatch] = useAppContext();

    // // change posts shown in timeline with global state
    // const { activeTimeline } = state;

    const { loading, data } = useQuery(QUERY_ALL_POSTS);

    console.log(data);
    // useEffect(() => {
    //     if (data) {
    //         dispatch({
    //             type: UPDATE_TIMELINE,
    //             activeTimeline: data.posts
    //         })
    //     }
    // }, [data])

    return (
        <section className="endless-scroll">
            <section className="post-body">
                <div type="button" className="up-vote-icon">
                    <i type="upvote" className="fas fa-angle-up"></i>
                </div>
                <div className="title">
                    <a href="single-post" target="blank">Post Link</a>
                    <span>Posted By: <a href="/profile">Username</a> </span>
                    <span> date created at </span>
                    <span className="tags"><a href="tag_language">Tag Language</a>
                    <a href="/tag_genre">Tag Genre</a></span>
                </div>
                <div className="body">
                    <pre>
                        <code>
                            Post Body
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
        </section>
    )
}

export default Timeline;