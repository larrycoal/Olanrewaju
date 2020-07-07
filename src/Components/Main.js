import React from 'react'
import{Switch,Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import AboutMe from './about'

import Projects from './Project'

const Main =()=>{

    return(
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route  path="/about" component={AboutMe}/>
            <Route path="/project" component={Projects}/>

        </Switch>
    )
}

export default Main