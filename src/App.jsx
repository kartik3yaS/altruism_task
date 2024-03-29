import React from "react";
import Main from "./Components/Main";
import Slider from "./Components/Slider";
import EmbedLink from "./Components/EmbedLink";
import Main2 from "./Components/Main2";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Main />
        <Slider />
        <Main2 />
        <EmbedLink />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
