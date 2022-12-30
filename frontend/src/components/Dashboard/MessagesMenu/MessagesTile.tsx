import PicturePlaceholder from '../../../Images/PicturePlaceholder.png';

import { H4 } from '../../styled/text';
import './MessagesTile.scss';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';

export default function MessagesTile({
  user,
  lastMessage,
  idx,
  setCurrConversationIdx,
  setShowMessagesModal
}: {
  user: { firstName: string; lastName: string };
  lastMessage: string;
  idx: number;
  setCurrConversationIdx: (idx: number) => void;
  setShowMessagesModal: (bool: boolean) => void;
}): ReactElement {
  const handleClick = () => {
    setCurrConversationIdx(idx);
    setShowMessagesModal(false);
  };

  return (
    <div className="MessagesTile" onClick={() => handleClick()}>
      <img className="MessagesTile__picture" src={PicturePlaceholder} />
      <div className="MessagesTile-text">
        <H4 className="MessagesTile-text__name">
          {user.firstName} {user.lastName}
        </H4>
        <H4 className="MessagesTile-text__message">{lastMessage}</H4>
      </div>
    </div>
  );
}

MessagesTile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  lastMessage: PropTypes.string,
  idx: PropTypes.number,
  setCurrConversationIdx: PropTypes.func,
  setShowMessagesModal: PropTypes.func
};
