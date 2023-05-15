import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(81, {
  cors: { origin: '*' },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Hola alguien se conecto al socket 👌👌👌');
    client.join('room_chat');
  }

  handleDisconnect(client: any) {
    console.log('ALguien se fue! chao chao');
    client.leave('room_chat');
  }

  @SubscribeMessage('event_message') //TODO Backend
  handleIncommingMessage(
    client: Socket,
    payload: { data: string; idUser: string },
  ) {
    console.log(payload);
    this.server.to('room_chat').emit('new_message', payload);
  }
}
