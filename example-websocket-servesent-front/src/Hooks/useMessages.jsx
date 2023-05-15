import { useState,useEffect } from 'react';
import { socket } from '../Config/io.config';


export function useMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('new_message', (data) => {
      const newMessage = [...messages, data];
      setMessages(newMessage);
    });
  }, [messages]);

  return {messages, setMessages}
}