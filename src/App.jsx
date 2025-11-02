import React from 'react';
import Header from './components/Header.jsx';
import FeaturedSection from './components/FeaturedSection.jsx';
import PostsGrid from './components/PostsGrid.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <FeaturedSection />
        <PostsGrid />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
