import React from "react";

import Home from "./pages/Home";
import { CharactersProvider } from "./Context/CharactersContext";

function App() {
  return (
    <CharactersProvider>
      <Home />;
    </CharactersProvider>
  );
}

export default App;
