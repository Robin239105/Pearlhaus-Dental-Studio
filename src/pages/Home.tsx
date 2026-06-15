import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyPearlhaus from '../components/home/WhyPearlhaus';
import BeforeAfterSlider from '../components/home/BeforeAfterSlider';
import TeamPreview from '../components/home/TeamPreview';
import Testimonials from '../components/home/Testimonials';
import TechnologySection from '../components/home/TechnologySection';
import StatsSection from '../components/home/StatsSection';
import BlogPreview from '../components/home/BlogPreview';
import BookingCTA from '../components/home/BookingCTA';

export const Home: React.FC = () => {
  return (
    <PageWrapper>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyPearlhaus />
      <BeforeAfterSlider />
      <TeamPreview />
      <Testimonials />
      <TechnologySection />
      <StatsSection />
      <BlogPreview />
      <BookingCTA />
    </PageWrapper>
  );
};

export default Home;
