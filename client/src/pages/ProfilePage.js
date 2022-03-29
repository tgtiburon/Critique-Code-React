import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import Profile from '../components/Profile';

function ProfilePage () {
  return (
    <main>
      <Header />
      <Profile />
      {/* <Timeline /> */}
      <Footer />
    </main>
  )
}

export default ProfilePage;