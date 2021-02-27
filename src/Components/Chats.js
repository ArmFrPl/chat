import React from 'react';

import Carousel from './Carousel';
import ChatCard from './ChatCard';

export default class Chats extends React.Component {

  state = {
    inputText: '',
    texts: [],
  }

  chatContainer = React.createRef();

  scrollToMyRef = () => {
    const scroll =
      this.chatContainer.current.scrollHeight -
      this.chatContainer.current.clientHeight;
    this.chatContainer.current.scrollTo(0, scroll);
  };

  onSend = (e) => {
    this.setState({texts: [...this.state.texts, this.state.inputText]}, () => this.scrollToMyRef())
    this.setState({inputText: ''})
  }

  enterSend = (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
      this.setState({texts: [...this.state.texts, this.state.inputText]}, () => this.scrollToMyRef())
      this.setState({inputText: ''})
    }
  }

  changeText = (e) => {
    this.setState({inputText: e.target.value})
  }

  close = () => {
    this.props.changeClosed({closed: false})
    console.log(this.state)
  }

  open = () => {
    this.props.changeClosed({closed: true})
  }

  onSelect = (name) => {
    this.props.setChatName(name)
    this.setState({texts: []})
  }

  render() {
    return (
      <div>
        <Carousel onSelect={this.onSelect} open={this.open} />
        {this.props.closed && <ChatCard isLoggedIn={this.props.isLoggedIn} name={this.props.chatName} closed={this.props.closed} close={this.close} onSend={this.onSend} changeText={this.changeText} texts={this.state.texts} inputText={this.state.inputText} chatContainer={this.chatContainer} enterSend={this.enterSend} />}
        
      </div>
    )
  }
}