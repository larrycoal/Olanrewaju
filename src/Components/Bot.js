import React from "react";
import { connect } from "react-redux";
import {Close} from "@material-ui/icons"
import {IconButton} from "@material-ui/core"
import { sendMessage } from "./chat";

class Bot extends React.Component {
  messageEnd = React.createRef();
  messanger(e) {
    this.props.sendMessage(e.target.value);
    e.target.value = "";
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.messageEnd.current.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    const { feed } = this.props;
    return (
      <div className="chat-main">
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"baseline",
          borderRadius:"3px",
          padding:"10px",
          backgroundColor: "white"
        }}>
          <div>
            <IconButton onClick={()=>this.props.Close()}>
            <Close fontSize="large"/>
            </IconButton>
            </div>
          <h3>Olanrewaju Assistant</h3>
        </div>
        <div className="chat-text">
          {feed.map((entry) => {
            return (
              <ul>
                <li
                  className="msg"
                  style={
                    entry.sender === "user"
                      ? { textAlign: "right" }
                      : { textAlign: "left" }
                  }
                  on
                >
                  {entry.text}
                  <div ref={this.messageEnd}></div>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <input
            style={{ color: "white" }}
            type="text"
            onKeyDown={(e) => (e.keyCode === 13 ? this.messanger(e) : null)}
            placeholder="Type message....."
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  feed: state,
});

export default connect(mapStateToProps, { sendMessage })(Bot);
