import React, { useState, useEffect, ReactElement } from 'react';
import MessagesModal from '../../../components/Dashboard/MessagesMenu/MessagesModal';
import MessageBubble from '../../../components/Dashboard/MessagesMenu/MessageBubble';
import { getUserConversations } from '../../../services/RoastableService/RoastableService';

import MessagesArrow from '../../../Images/MessagesArrow/MessagesArrow.png';
import DarkMessagesArrow from '../../../Images/MessagesArrow/DarkMessagesArrow.png';

import { InputLarge } from '../../../components/styled/common';
import { H3 } from '../../../components/styled/text';
import './MessagesMenu.scss';
import PropTypes from 'prop-types';
import { Conversation, User } from '../../../types/DashboardTypes';
import { Socket } from 'socket.io-client';
import { sendConversationMessage, updateConversationMessages } from '../../../utils/MessageUtils';

export default function MessagesMenu({
  socket,
  userData
}: {
  socket: Socket;
  userData: User;
}): ReactElement {
  const [showMessagesModal, setShowMessagesModal] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [msgData, setMsgData] = useState<Conversation[]>([]);
  const [currConversationIdx, setCurrConversationIdx] = useState(-1);
  const [selectedConvo, setSelectedConvo] = useState<Conversation | null>();

  useEffect(() => {
    getUserConversations(localStorage.getItem('token')).then((convos: Conversation[]) => {
      const chatBox: Element | null = document.querySelector('.MessagesMenu-TextBox');

      setMsgData(convos);

      convos.forEach((c) => {
        socket.emit('join', c.conversationId);
      });

      updateConversationMessages(socket, chatBox, convos, setMsgData);
    });
  }, []);

  useEffect(() => {
    if (currConversationIdx !== -1) {
      setSelectedConvo(msgData[currConversationIdx]);
    }
  }, [currConversationIdx]);

  const onHoverArrow = () => {
    document
      .getElementsByClassName('MessagesMenu__arrow')[0]
      .setAttribute('src', DarkMessagesArrow);
  };

  const offHoverArrow = () => {
    document.getElementsByClassName('MessagesMenu__arrow')[0].setAttribute('src', MessagesArrow);
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && userMessage && selectedConvo) {
      sendConversationMessage(socket, selectedConvo.conversationId, userData.username, userMessage);

      (document.getElementsByClassName('MessagesMenu-input__msg')[0] as HTMLInputElement).value =
        '';

      setCurrConversationIdx(currConversationIdx);
      setUserMessage('');
    }
  };

  return (
    <div className="MessagesMenu">
      {showMessagesModal ? (
        <MessagesModal
          setShowMessagesModal={setShowMessagesModal}
          msgData={msgData}
          setCurrConversationIdx={setCurrConversationIdx}
        />
      ) : (
        <div
          className="MessagesMenu__box"
          onClick={() => setShowMessagesModal(true)}
          onMouseOver={() => onHoverArrow()}
          onMouseOut={() => offHoverArrow()}>
          <img className="MessagesMenu__arrow" src={MessagesArrow} />
        </div>
      )}
      <div className="MessagesMenu-desc">
        <H3 className="MessagesMenu-desc__FirstName">
          {selectedConvo && Object.keys(selectedConvo).length !== 0
            ? selectedConvo.recipiants[0]
            : ''}
        </H3>{' '}
        <H3 className="MessagesMenu-desc__LastName"></H3>
      </div>
      <div className="MessagesMenu-TextBox">
        {selectedConvo && Object.keys(selectedConvo).length !== 0
          ? selectedConvo.messages.map((msg, idx) => {
              return (
                <MessageBubble
                  content={msg.content}
                  isSelf={msg.self}
                  idx={idx}
                  key={'bubble-' + idx.toString()}
                />
              );
            })
          : ''}
      </div>
      <div className="MessagesMenu-input">
        <InputLarge
          className="MessagesMenu-input__msg"
          type="text"
          placeholder="Aa"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserMessage(e.target.value)}
          onKeyDown={(e: KeyboardEvent) => handleEnter(e)}
        />
      </div>
    </div>
  );
}

MessagesMenu.propTypes = {
  socket: PropTypes.any,
  userData: PropTypes.object
};
