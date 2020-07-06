import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import Main from './Components/Main'
import {gsap} from 'gsap'
import {CSSPlugin} from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

function App() {
  
  return (
    <div className="main-page">
      <Layout>
        <div >
          <Header className="title" title="<olanrewaju/>" style={{ color: 'white' }}>
            <Navigation>
            <Link to="/">Home</Link>
              <Link to="/about">About Me</Link>
              <Link to="/project">Projects</Link>
            </Navigation>
          </Header>
        </div>
        <Drawer  className="drawer" title="Olanrewaju">
          <Navigation className="drawer">
          <Link  id="drawer" to="/">Home</Link>
            <Link  id="drawer" to="/about">About Me</Link>
            <Link id="drawer" to="/project">Projects</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
