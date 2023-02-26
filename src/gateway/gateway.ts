import { InjectModel } from '@nestjs/mongoose';
import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Model } from 'mongoose';
import { Server } from 'socket.io';
import { Message, MessageDocument } from 'src/messages/messages.schema';

@WebSocketGateway({
  cors: {
    origiin: ['http://localhost:3000'],
  },
})
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Connected ' + socket.id);
    });
  }

  @SubscribeMessage('newMessage')
  onNewMessage() {
    return this.messageModel.find().exec();
  }
}
