import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

function App() {
  return (
      <>
        <div className={'bg'}>
            <Hero>
                <Nav/>
            </Hero>
            <Carousel slides={[
                {
                    title: 'Slide 1',
                    image: 'https://dummyimage.com/1920x1080/000/fff&text=+'
                },
                {
                    title: 'Slide 2',
                    image: 'https://dummyimage.com/1920x1080/000/fff&text=+'
                }
            ]}/>
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
