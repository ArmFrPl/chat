import React, {useState} from 'react';

import Carousel from './Carousel';
import ChatCard from './ChatCard';

export default function Chats(props) {

  const [inputText, setInputText] = useState('');
  const [texts, setTexts] = useState([]);

  const chatContainer = React.createRef();

  const scrollToMyRef = () => {
    const scroll =
      chatContainer.current.scrollHeight -
      chatContainer.current.clientHeight;
      chatContainer.current.scrollTo(0, scroll);
  };

  const onSend = (e) => {
    if(texts.texts){
      setTexts({texts: [...texts.texts, inputText]}, () => scrollToMyRef())
      setInputText('');
    }else{
      setTexts({texts: [inputText]}, () => scrollToMyRef())
      setInputText('');
    }
  }

  const enterSend = (e) => {
    console.log( texts)
    if(e.key === 'Enter'){
      if(texts.texts){
        setTexts({texts: [...texts.texts, inputText]}, () => scrollToMyRef())
        setInputText('');
      }else{
        setTexts({texts: [inputText]}, () => scrollToMyRef())
        setInputText('');
      }
    }
  }

  const changeText = (e) => {
    setInputText(e.target.value)
  }

  const close = () => {
    props.changeClosed({closed: false})
  }

  const open = () => {
    props.changeClosed({closed: true})
  }

  const onSelect = (name) => {
    props.setChatName(name)
    setTexts([]);
  }

  console.log(props.closed)
  return (
    <div>
      <Carousel onSelect={onSelect} open={open} />
      {props.closed.closed && <ChatCard isLoggedIn={props.isLoggedIn} name={props.chatName} closed={props.closed} close={close} onSend={onSend} changeText={changeText} texts={texts} inputText={inputText} chatContainer={chatContainer} enterSend={enterSend} />}
    </div>
  )
}