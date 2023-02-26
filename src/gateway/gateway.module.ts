import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from 'src/messages/messages.schema';
import { SocketGateway } from './gateway';

@Module({
  providers: [SocketGateway],
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
})
export class GatewayModule {}
