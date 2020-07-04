import {ApiAiClient} from 'api-ai-javascript'
import {createStore,applyMiddleware} from 'redux'

const accessToken = 'e0aeca09da044abf8017cd117a5e9640'
const client= new ApiAiClient({accessToken})

export const sendMessage =(text,sender="user")=>({
    type:"ON-MESSAGE",
    payload:{text,sender}
});

const messageMiddleware = ()=>next=>action=>{
   
  next(action)
   const {text}=action.payload
  if(action.type==="ON-MESSAGE"){
      client.textRequest(text)
      .then((response)=>{
           const{result:{fulfillment}}=response
          next(sendMessage(fulfillment.speech,'bot'))
      })
  }
}
const initstate =[{text:"HELLO!! I am a simple conversation chatbot created by Olanrewaju,I will try to answer your question to the best of my abilities",sender:'bot'}]
const messageReducer=(state=initstate,action)=>{
    switch(action.type){
        case "ON-MESSAGE": return [...state,action.payload]

        default: return state
    }
}

export const store=createStore(messageReducer,applyMiddleware(messageMiddleware))
