import React from "react";

import SliderPopup from "./components/SliderPopup";
import UsersList from "./components/UsersList";

import { Main, Cover, BackgroundImg, Header } from "./styled";

function App() {
  return (
    <Main>
      <BackgroundImg>
        <Cover></Cover>
      </BackgroundImg>
      <Header>Meet our team</Header>

      <UsersList />
      <SliderPopup />
    </Main>
  );
}

export default App;
