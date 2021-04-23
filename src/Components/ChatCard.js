import React from 'react';

import send from '../Imgs/send.svg';
import close from '../Imgs/close.svg';
import user from '../Imgs/user.svg';
import '../Styles/ChatCard.css'

export default function ChatCard(props) {
  
  const onClose = (e) => {
    props.close()
  }

  return(
    <div className='card'>
      <div className="header">
        <h1 className="chatName">{props.name}</h1>
        <img src={close} alt="close" className='close' onClick={onClose} />
      </div>
      <div className="chatBody" ref={props.chatContainer}>
        {
          props.isLoggedIn ? 
          !props.texts.texts ? null : props.texts.texts.map((text,i) => {   
            return(
              <div className={'textBox'} key={i}>
                <p className='text'>{text}</p>
                <img src={user} alt='' className='userPhoto' />
              </div>
            )
          }) : 
          !props.texts.texts ? null : props.texts.texts.map((text, i) => {   
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
        <input type="text" className="inp" onChange={props.changeText} value={props.inputText} onKeyPress={props.enterSend} />
        <button className='sendButton' onClick={props.onSend}>
          <img src={send} alt="" className="send" />
        </button>
      </div>
    </div>
  )
}