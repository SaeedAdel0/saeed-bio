import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ProfileSection from '@/components/ProfileSection';
import SocialLinks from '@/components/SocialLinks';
import ActionButtons from '@/components/ActionButtons';
import BackgroundSettings from '@/components/BackgroundSettings';
import { Toaster } from '@/components/ui/toaster';

const backgrounds = {
  image1: 'bg-cover bg-center',
  image2: 'bg-cover bg-center',
  image3: 'bg-cover bg-center',
};

const backgroundImages = {
  image1: 'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image2: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image3: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const backgroundIds = Object.keys(backgrounds);

function App() {
  const [background, setBackground] = useState('image1');

  useEffect(() => {
    const backgroundTimer = setInterval(() => {
      setBackground((prev) => {
        const currentIndex = backgroundIds.indexOf(prev);
        // Ensure we handle cases where the current ID might not be in the list
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % backgroundIds.length;
        return backgroundIds[nextIndex];
      });
    }, 4000); // Increased to 4 seconds for better user experience

    return () => clearInterval(backgroundTimer);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImages[background]})`,
  };

  return (
    <>
      <Helmet>
        <title>Saeed Adel Alkatheri | Portfolio</title>
        <meta name="description" content="Connect with Saeed Adel Alkatheri. Professional portfolio and social links." />
      </Helmet>
      <div 
        className={`min-h-screen ${backgrounds[background]} transition-all duration-500`}
        style={backgroundStyle}
      >
        <div className="min-h-screen bg-black/30">
          <BackgroundSettings 
            currentBackground={background}
            onBackgroundChange={setBackground}
          />
          
          <div className="container mx-auto px-4 pt-24 pb-[160px] max-w-2xl sm:pt-[120px] sm:pb-[160px]">
            <div className="space-y-8">
              <ProfileSection />
              <SocialLinks />
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;