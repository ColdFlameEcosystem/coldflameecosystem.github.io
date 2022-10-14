import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import DiscordDisplay from "./components/DiscordDisplay";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <div className={'bg'}>
            <Hero>
                <Nav/>
            </Hero>
            <Carousel />
            <DiscordDisplay/>
            <br/>
            <Footer />
        </div>
      </>
  );
}

export default App;
