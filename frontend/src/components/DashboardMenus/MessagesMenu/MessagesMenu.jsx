import React, { useState, useEffect } from 'react';
import MessagesModal from './MessagesModal';
import MessageBubble from './MessageBubble';
import { getUserConversations } from '../../../services/RoastableService/RoastableService';

import MessagesArrow from '../../../Images/MessagesArrow/MessagesArrow.png';
import DarkMessagesArrow from '../../../Images/MessagesArrow/DarkMessagesArrow.png';

import { InputLarge } from '../../styled/common';
import { H3 } from '../../styled/text';
import './MessagesMenu.scss';
import PropTypes from 'prop-types';

export default function MessagesMenu({ socket, userData }) {
  const [showMessagesModal, setShowMessagesModal] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [msgData, setMsgData] = useState([]);
  const [currConversationIdx, setCurrConversationIdx] = useState(-1);
  const [selectedConvo, setSelectedConvo] = useState({});

  useEffect(() => {
    getUserConversations(localStorage.getItem('token')).then((convos) => {
      setMsgData(convos);

      convos.forEach((c) => {
        socket.emit('join', c.conversationId);
      });

      socket.on('message', (newMsg, self) => {
        newMsg.self = self;
        console.log(newMsg, 'newMsg');
        let newMsgIdx = convos.findIndex((c) => c.conversationId === newMsg.conversationId);
        convos[newMsgIdx].messages.push(newMsg);

        const newConvos = convos.slice();
        setMsgData(newConvos);
      });
    });
  }, []);

  useEffect(() => {
    if (currConversationIdx !== -1) {
      setSelectedConvo(msgData[currConversationIdx]);
    }
  }, [currConversationIdx]);

  const onHoverArrow = () => {
    document.getElementsByClassName('MessagesMenu__arrow')[0].src = DarkMessagesArrow;
  };

  const offHoverArrow = () => {
    document.getElementsByClassName('MessagesMenu__arrow')[0].src = MessagesArrow;
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const chatBox = document.querySelector('.MessagesMenu-TextBox');

      socket.emit('chatMessage', {
        conversationId: selectedConvo.conversationId,
        sender: userData.username,
        content: userMessage
      });
      document.getElementsByClassName('MessagesMenu-input__msg')[0].value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
      setCurrConversationIdx(currConversationIdx);
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
          {Object.keys(selectedConvo).length !== 0 ? selectedConvo.recipiants[0] : ''}
        </H3>{' '}
        <H3 className="MessagesMenu-desc__LastName"></H3>
      </div>
      <div className="MessagesMenu-TextBox">
        {Object.keys(selectedConvo).length !== 0
          ? selectedConvo.messages.map((msg, idx) => {
              return (
                <MessageBubble
                  content={msg.content}
                  self={msg.self}
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
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
      </div>
    </div>
  );
}

MessagesMenu.propTypes = {
  socket: PropTypes.any,
  userData: PropTypes.object
};
