import React from "react"
import './App.css';

import { SideMenu } from "../components";
import { ContentPageContainer } from "../Pages";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <ContentPageContainer>
        <div>
          balls
        </div>
      </ContentPageContainer>
    </div>
  );
}

export default App;
