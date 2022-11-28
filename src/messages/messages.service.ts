import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto, UpdateMessageDto } from './messages.dto';
import { Message, MessageDocument } from './messages.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async create(messageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(messageDto);
    return createdMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async findById(id: string): Promise<Message> {
    return this.messageModel.findById(id);
  }

  async remove(id: string): Promise<Message> {
    return this.messageModel.findByIdAndRemove(id);
  }

  async update(id: string, messageDto: UpdateMessageDto): Promise<Message> {
    return this.messageModel.findByIdAndUpdate(id, messageDto);
  }
}
