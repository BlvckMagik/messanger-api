import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateMessageDto, UpdateMessageDto } from './messages.dto';
import { Message } from './messages.schema';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Get()
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Message> {
    return this.messageService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.create(createMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Message> {
    return this.messageService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateMessageDto: UpdateMessageDto,
    @Param('id') id: string,
  ): Promise<Message> {
    return this.messageService.update(id, updateMessageDto);
  }
}
