import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/SelectChat.css';

export default function SelectChat(props){

  let open = (e) => {
    console.log(e.target.innerText)
    props.setChatName(e.target.innerText);
    props.open(true)
  }
  return(
    <div className='cont'>
        {
          [...Array(6)].map((x, i) => { 
            return (<Link className='cards' key={i} to='/chats'>
              <button className="select" onClick={open}>
                Theme {i+1}
              </button>
            </Link>
          )})
        }
    </div>
  )
}