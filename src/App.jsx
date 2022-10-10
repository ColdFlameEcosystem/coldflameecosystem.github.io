import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
      <>
        <div className={'bg'}>
            <Hero>
                <Nav/>
            </Hero>
        </div>
        {
          /*
          todo-list
           <DiscordDisplay/>
           <Footer/>
          */
        }
      </>
  );
}

export default App;
