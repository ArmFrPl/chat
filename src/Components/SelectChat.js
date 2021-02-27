import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/SelectChat.css';

export default class SelectChat extends React.Component {

  open = (e) => {
    console.log(e.target.innerText)
    this.props.setChatName(e.target.innerText);
    this.props.open(true)
  }

  render(){
    return(
      <div className='cont'>
          {
            [...Array(6)].map((x, i) => { 
              return (<Link className='cards' key={i} to='/chats'>
                <button className="select" onClick={this.open}>
                  Theme {i+1}
                </button>
              </Link>
            )})
          }
      </div>
    )
  }
}