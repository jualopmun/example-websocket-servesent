import { useState } from 'react';
import { Chat } from './Chat';
import { useMessages } from '../Hooks/useMessages';
import { socket } from '../Config/io.config';
import { idUser } from '../Config/idUser.config';

export function ChatRoom() {

  const [inputValue, setInputValue] = useState('');
  const { messages } = useMessages();
  
  const onSendMessage = (event) => {
    event.preventDefault();
    const message = inputValue;
    if(message === '') return;
    const payload = {idUser, message};
    socket.emit('event_message',payload)
    setInputValue('');
  }
  

  return (
    <>
      <div className="top_menu">
        <div className="title">Chat</div>
      </div>
      <ul className="messages">
      {messages.map((data, index) => (<Chat key={`messag-${index}`} message={data.message} idUserSend={data.idUser}></Chat>))}
      </ul>
      <form className="bottom_wrapper clearfix" onSubmit={onSendMessage}>
        <div className="message_input_wrapper">
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="message_input"  placeholder="Escribe tu mensaje aqui..." />
        </div>
        <div className="send_message" onClick={onSendMessage}>
          <div className="icon"></div>
          <div className="text">Send</div>
        </div>
      </form>
    </>
  )
  
  
}