import { useEffect, useState } from 'react'
import './App.css'
import { ChatRoom } from './Components/ChatRoom';
import { socket } from './Config/io.config';
import { Graphic } from './Components/Graphic';


const VALUESBUTTONS = {
  websocket: 'websocket',
  serverSideEvents: 'server side events'
}


function App() {

  const [modeExample, setModeExample] = useState(VALUESBUTTONS.websocket); 

   useEffect(() => {
    socket.on("room_chat", (msg) => {
      console.log("message => ",msg)
    });
  }, []);

  return (
    <div className="container">
      <div className="group-button">
        <button type= "button" onClick={() => setModeExample(VALUESBUTTONS.websocket)} name='websocket'>Ejemplo Web Socket</button>
        <button type= "button" onClick={() => setModeExample(VALUESBUTTONS.serverSideEvents)} name='server side events'>Ejemplo Server Side Events</button>
      </div>
      <div className="space-example">
        <div className="chat_window">
          {modeExample === VALUESBUTTONS.websocket && <ChatRoom socket={socket}/> }
          {modeExample === VALUESBUTTONS.serverSideEvents && <Graphic/> }
        </div>
      </div>
    </div>
  )
}

export default App
