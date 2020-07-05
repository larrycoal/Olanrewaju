import React from 'react';
import {connect} from 'react-redux'
import {sendMessage} from './chat'


class Bot extends React.Component {
   messageEnd =React.createRef()
  messanger(e){
     this.props.sendMessage(e.target.value)
     e.target.value=""
 }
 componentDidUpdate () {
  this.scrollToBottom()
}
scrollToBottom = () => {
  this.messageEnd.current.scrollIntoView({ behavior: 'smooth' })
}
  render(){
    const {feed}=this.props
    return(
      <div className="chat-main">
        <div>
          <h3>Olanrewaju Assistant</h3>
        </div>
    <div className="chat-text">{
      feed.map((entry)=>{
       return(
         <ul>
           <li style={entry.sender==='user'?{'textAlign':'right'}:{'textAlign':'left'}} on>
             {entry.text}
             <div ref={this.messageEnd}></div>
             </li>
         </ul>
       )
      })
      }</div>
        <div>
        <input style={{"color":"white"}} type="text" onKeyDown={(e)=>e.keyCode===13?this.messanger(e):null} placeholder="Type message....."/>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = (state)=>({
  feed:state
  
})

export default connect(mapStateToProps,{sendMessage})(Bot);
