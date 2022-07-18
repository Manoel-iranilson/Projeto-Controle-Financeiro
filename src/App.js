import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Summary />
    </>
  );
}

export default App;
