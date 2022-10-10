import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";

function App() {
  return (
      <>
        <div className={'bg'}>
            <Nav/>
        </div>
        {
          /*
          todo-list
           <Hero/>
           <DiscordDisplay/>
           <Footer/>
          */
        }
      </>
  );
}

export default App;
