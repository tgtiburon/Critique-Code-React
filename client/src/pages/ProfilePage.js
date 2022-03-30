import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Profile from '../components/Profile';
import PublicProfile from '../components/Public-Profile';
import Auth from '../utils/auth';


import { useAppContext } from '../utils/GlobalState';

function ProfilePage () {
  const [state, dispatch] = useAppContext();

  // this is a bad way to constrain what the user sees
  // users shouldn't be able to see edit buttons on other user's profiles
  const loggedIn =  Auth.loggedIn();

  const { activeTimeline } = state;


  return (
    <main>
      <Header />
      {loggedIn && (
      <Profile />
      )}
      {!loggedIn && (
      <PublicProfile />
      )}
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
      <Footer />
    </main>
  )
}

export default ProfilePage;