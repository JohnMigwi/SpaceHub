import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/seo';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
    </div>
  </>
);
export default IndexPage;
