export type Conversation = {
  recipiants: string[];
  messages: Message[];
  conversationId: number;
};

export type Message = {
  content: string;
  self: boolean;
  time_created: Date;
  conversationId: number | null;
};

export type User = {
  firstName: string;
  lastName: string | null;
  username: string;
};
