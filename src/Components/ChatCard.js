import React from 'react';

import send from '../Imgs/send.svg';
import close from '../Imgs/close.svg';
import user from '../Imgs/user.svg';
import '../Styles/ChatCard.css'

export default class ChatCard extends React.Component {

  
  onClose = (e) => {
    console.log(this.props.closed)
    this.props.close()
  }

  render(){
    return(
      <div className='card'>
        <div className="header">
          <h1 className="chatName">{this.props.name}</h1>
          <img src={close} alt="close" className='close' onClick={this.onClose} />
        </div>
        <div className="chatBody" ref={this.props.chatContainer}>
          {
            this.props.isLoggedIn ? 
            this.props.texts.map((text,i) => {   
              return(
                <div className={'textBox'} key={i}>
                  <p className='text'>{text}</p>
                  <img src={user} alt='' className='userPhoto' />
                </div>
              )
            }) : 
            this.props.texts.map((text, i) => {   
              return(
                <div className={'textBox'} key={i}>
                  <img src={user} alt='' className='userPhoto' />
                  <p className='text'>{text}</p>
                </div>
              )
            }) 
          }
        </div>
        <div className="textInp">
          <input type="text" className="inp" onChange={this.props.changeText} value={this.props.inputText} onKeyPress={this.props.enterSend} />
          <button className='sendButton' onClick={this.props.onSend}>
            <img src={send} alt="" className="send" />
          </button>
        </div>
      </div>
    )
  }
}