import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    GatewayModule,
    MongooseModule.forRoot(
      `mongodb+srv://BlvckMagic:Kvvaiu24@cluster0.xntq76d.mongodb.net/?retryWrites=true&w=majority`,
    ),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
