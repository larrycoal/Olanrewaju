import React, { useState} from 'react'
import { Tabs, Tab } from 'react-mdl'
import Card from './Cards'

const render = (tab) => {
    
    if (tab === 0) {
        return (
            <div className="project-card">
                <section>
                    <Card
                    name="Chatbot"
                    image="https://res.cloudinary.com/dbdrtuscd/image/upload/v1593528548/dialogflow1-1024x379_ql5a7r.jpg"
                    text="This is a simple chatbot application built using react and redux. It is powered by google dialogflow"
                    github="https://github.com/larrycoal/chat-bot"
                    />
                </section>
                <section >
                    <Card 
                    name="Quick-Test"
                    image="https://res.cloudinary.com/dbdrtuscd/image/upload/v1585151731/luou9owdck8wjimoxxby.jpg"
                    text="A platform for user to create custom test and share links to intended, building with react and redux"
                    github="https://github.com/larrycoal/Quicktest"
                    />
                </section>
                <section >
                    <Card 
                    name="Mailling-List"
                    image="https://res.cloudinary.com/dbdrtuscd/image/upload/v1584996242/Screenshot_2020-03-23_at_9.36.08_PM_ki2emb.png"
                    text="A mailing list application,highlights some members of the lagos state governor cabinet."
                    github="https://github.com/larrycoal/OkadaBan"
                    />
                </section>
                <section>
                    <Card 
                    name="Calculator"
                    image="https://res.cloudinary.com/dbdrtuscd/image/upload/v1593529836/Screenshot_2020-06-30_at_4.10.11_PM_osryb5.png"
                    text="A simple calculator built with react"
                    github="https://github.com/larrycoal/calculator"
                    />
                </section>
                <section>
                <Card 
                    name="Fact-Checker"
                    image="https://res.cloudinary.com/dbdrtuscd/image/upload/v1593529836/Screenshot_2020-06-30_at_4.10.11_PM_osryb5.png"
                    text="A number fact checker powered by numbers-API"
                    github="https://github.com/larrycoal/Fact-checker"
                    />
                </section>
                <section>
                <Card 
                    name="Streaming"
                    image="https://res.cloudinary.com/dbdrtuscd/image/upload/v1593529836/Screenshot_2020-06-30_at_4.10.11_PM_osryb5.png"
                    text="An application to stream video online using OBS"
                    github="https://github.com/larrycoal/streaming"
                    />
                </section>
            </div>
        )
    }
}

const Projects = () => {
    const [tab, setTab] = useState(0)
  
    return (
        <div className="project-page">
            <Tabs activeTab={tab} onChange={(tabId) => { setTab(tabId) }} >
                <Tab>React</Tab>
                <Tab>NodeJs</Tab>
            </Tabs>
            <div className="project-tab">
            {render(tab)}
            </div>
        </div>
    )
}

export default Projects