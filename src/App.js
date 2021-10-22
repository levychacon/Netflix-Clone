import {JumbotronContainer} from "../src/containers/jumbotron"
import React from 'react'
import { FooterContainer } from "./containers/footer";
import FaqsContainer from "./containers/faqs";
function App() {
  return (
    <>
    <JumbotronContainer/>
    <FaqsContainer/>
    <FooterContainer/>
    </>
  )
}

export default App;
