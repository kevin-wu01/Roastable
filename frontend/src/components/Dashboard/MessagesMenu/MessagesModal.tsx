import React, { ReactElement } from 'react';
import MessagesTile from './MessagesTile';
import PropTypes from 'prop-types';

import MessagesArrow from '../../../Images/MessagesArrow/MessagesArrowMirror.png';
import DarkMessagesArrow from '../../../Images/MessagesArrow/DarkMessagesArrowMirror.png';

import './MessagesModal.scss';
import { Conversation } from '../../../types/DashboardTypes';

export default function MessagesModal({
  setShowMessagesModal,
  msgData,
  setCurrConversationIdx
}: {
  setShowMessagesModal: () => void;
  msgData: Conversation[];
  setCurrConversationIdx: () => void;
}): ReactElement {
  // let mockData = [
  //   {
  //     FirstName: 'Kevin',
  //     LastName: 'Wu',
  //     LastMessage: "I should've thought about process holy wth",
  //     sentLast: true
  //   },
  //   {
  //     FirstName: 'Kevin',
  //     LastName: 'Wu',
  //     LastMessage: "I should've thought about process holy wth",
  //     sentLast: true
  //   },
  //   {
  //     FirstName: 'Zoe',
  //     LastName: 'Inoyush',
  //     LastMessage: "I should've thought about process holy wth",
  //     SentLast: true
  //   }
  // ];

  const onHoverArrow = () => {
    // const element: HTMLImageElement = document.getElementsByClassName('MessagesModal__arrow')[0];
    // ((HTMLImageElement) document.getElementsByClassName('MessagesModal__arrow')[0]).src = DarkMessagesArrow;
    document
      .getElementsByClassName('MessagesModal__arrow')[0]
      .setAttribute('src', DarkMessagesArrow);
  };

  const offHoverArrow = () => {
    // document.getElementsByClassName('MessagesModal__arrow')[0].src = MessagesArrow;
    document.getElementsByClassName('MessagesModal__arrow')[0].setAttribute('src', MessagesArrow);
  };
  console.log(msgData, 'msgData');

  return (
    <div className="MessagesModal">
      {msgData
        ? msgData.map((msg, idx) => {
            return (
              <MessagesTile
                key={'tile-' + idx.toString()}
                idx={idx}
                user={{ firstName: msg.recipiants[0], lastName: '' }}
                lastMessage={msg.messages[msg.messages.length - 1].content}
                setCurrConversationIdx={setCurrConversationIdx}
                setShowMessagesModal={setShowMessagesModal}
              />
            );
          })
        : ''}
      <img
        className="MessagesModal__arrow"
        src={MessagesArrow}
        onClick={() => setShowMessagesModal(false)}
        onMouseOver={() => onHoverArrow()}
        onMouseOut={() => offHoverArrow()}
      />
    </div>
  );
}

MessagesModal.propTypes = {
  setShowMessagesModal: PropTypes.func,
  msgData: PropTypes.arrayOf(PropTypes.object),
  setCurrConversationIdx: PropTypes.func
};
