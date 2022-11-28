export class CreateMessageDto {
  readonly text: string;
  readonly username: string;
  readonly date: string;
}

export class UpdateMessageDto {
  readonly text: string;
  readonly username: string;
  readonly date: string;
}
