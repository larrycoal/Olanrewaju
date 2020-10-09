import React from 'react';
import {scroller} from 'react-scroll'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import Main from './Components/Main'
import {gsap} from 'gsap'
import {CSSPlugin} from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

function App() {
  const scrollToElement = (component)=>{
    scroller.scrollTo(component,{
      duration:1500,
      delay:100,
      smooth:true
    })
  }
  return (
    <div className="main-page">
      <Layout>
        <div >
          <Header className="title" title="<olanrewaju/>" style={{ color: 'white' }}>
            <Navigation>
            <li onClick={()=>scrollToElement("landingPage")}>HOME</li>
            <li onClick={()=>scrollToElement("aboutMe")}>ABOUT ME</li>
            <li onClick={()=>console.log('projectssss')}>PROJECTS</li>
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
