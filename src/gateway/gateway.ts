import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessagesService } from 'src/messages/messages.service';

@WebSocketGateway()
export class SocketGateway {
  constructor(private readonly messageService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newMessage')
  async onNewMessage() {
    const messages = await this.messageService.findAll();
    this.server.sockets.emit('newMessage', messages);
  }
}
