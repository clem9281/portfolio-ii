import React, { useEffect, useState, useRef } from "react";

import ThemeProvider from "./components/styledComponents/ThemeProvider";

import Album from "./components/Album";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [ready, setReady] = useState(false);
  const [heroImage, setHeroImage] = useState(null);

  const [scrollToRef] = useState(useRef(null));

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // wait for the large hero image to be ready before loading the page
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
    img.onload = () => {
      setReady(true);
      setHeroImage(img.src);
    };
  }, []);

  return (
    <ThemeProvider>
      <WelcomePage ready={ready}></WelcomePage>
      {ready && (
        <>
          <Hero
            background={heroImage}
            scrollToRef={scrollToRef}
            scrollTo={scrollTo}
            ready={ready}
          />
          <Album ref={scrollToRef} />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
