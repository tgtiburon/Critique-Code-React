import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SidePanel from '../components/Side-Panel';
import Timeline from '../components/Timeline';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_POSTS } from '../utils/queries';
import { useAppContext } from '../utils/GlobalState';
import { UPDATE_TIMELINE } from '../utils/actions';

function Home () {
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

  console.log(activeTimeline);

  return (
    <main>
      <Header />
      {activeTimeline.map((post) => (
          <Timeline 
          key={post._id}
          _id={post._id}
          createdAt={post.createdAt}
          language={post.tag_language}
          genre={post.tag_genre}
          body={post.post_body}
          commentsLength={post.comments.length}
          upvotesAmt={post.upVoted_user_ids.length}
          userName={post.userName}
          title={post.title}
          />
      ))}
      <SidePanel />
      <Footer />
    </main>
  )
}

export default Home;