import React from "react"
import './App.css';

import { SideMenu } from "../components";
import { ContentPageContainer, LaunchOptions } from "../Pages";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <ContentPageContainer>
        <LaunchOptions />
      </ContentPageContainer>
    </div>
  );
}

export default App;
