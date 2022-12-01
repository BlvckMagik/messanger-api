import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/messages/messages.schema';
import { MessagesService } from 'src/messages/messages.service';
import { SocketGateway } from './gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessagesService, SocketGateway],
})
export class GatewayModule {}
