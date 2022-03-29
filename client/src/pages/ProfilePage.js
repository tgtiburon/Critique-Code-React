import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Profile from '../components/Profile';
import PublicProfile from '../components/Public-Profile';
import Auth from '../utils/auth';

function ProfilePage () {
  // this is a bad way to constrain what the user sees
  // users shouldn't be able to see edit buttons on other user's profiles
  const loggedIn =  Auth.loggedIn();


  return (
    <main>
      <Header />
      {loggedIn && (
          <Profile />
      )}
      {!loggedIn && (
        <PublicProfile />
      )}
      {/* <Timeline /> */}
      <Footer />
    </main>
  )
}

export default ProfilePage;