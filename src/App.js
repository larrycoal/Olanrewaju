import React from 'react';
import Main from './Components/Main'
import {gsap} from 'gsap'
import {CSSPlugin} from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

function App() {
  return (
    <div>
   <Main/>
    </div>
  );
}

export default App;
