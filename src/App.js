import React from "react";

import ThemeProvider from "./components/styledComponents/ThemeProvider";

import Album from "./components/Album/Album";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Hero />
        <Album />
      </div>
    </ThemeProvider>
  );
}

export default App;
