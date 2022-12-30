import { Socket } from 'socket.io-client';
import { Conversation, Message } from '../types/DashboardTypes';

export function updateConversationMessages(
  socket: Socket,
  chatBox: Element | null,
  convos: Conversation[],
  setMsgData: (convos: Conversation[]) => void
): void {
  socket.on('message', (newMsg: Message, self: boolean) => {
    let isScrollBottom = false;

    if (chatBox) {
      isScrollBottom = Math.ceil(chatBox.scrollTop) == chatBox.scrollHeight - chatBox.clientHeight;
    }

    newMsg.self = self;
    console.log(newMsg, 'newMsg');
    const newMsgIdx = convos.findIndex((c) => c.conversationId === newMsg.conversationId);
    convos[newMsgIdx].messages.push(newMsg);

    const newConvos = convos.slice();
    setMsgData(newConvos);

    if (chatBox && (self || isScrollBottom)) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });
}

export function sendConversationMessage(
  socket: Socket,
  conversationId: number,
  senderUsername: string,
  content: string
): void {
  socket.emit('chatMessage', {
    conversationId: conversationId,
    sender: senderUsername,
    content
  });
}
