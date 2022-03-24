import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SidePanel from '../components/Side-Panel';
import Timeline from '../components/Timeline';
function Home () {
  return (
    <main>
      <Header />
      <Timeline />
      <SidePanel />
      <Footer />
    </main>
  )
}

export default Home;