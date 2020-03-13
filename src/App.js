import React from "react";

import ThemeProvider from "./components/styledComponents/ThemeProvider";

import Album from "./components/Album";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <Album />
    </ThemeProvider>
  );
}

export default App;
