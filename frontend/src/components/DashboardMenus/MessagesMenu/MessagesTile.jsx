import PicturePlaceholder from '../../../Images/PicturePlaceholder.png';

import { H4 } from '../../styled/text';
import './MessagesTile.scss';
import PropTypes from 'prop-types';

export default function MessagesTile({
  firstName,
  lastName,
  lastMessage,
  idx,
  setCurrConversationIdx,
  setShowMessagesModal
}) {
  const handleClick = () => {
    setCurrConversationIdx(idx);
    setShowMessagesModal(false);
  };

  return (
    <div className="MessagesTile" onClick={() => handleClick()}>
      <img className="MessagesTile__picture" src={PicturePlaceholder} />
      <div className="MessagesTile-text">
        <H4 className="MessagesTile-text__name">
          {firstName} {lastName}
        </H4>
        <H4 className="MessagesTile-text__message">{lastMessage}</H4>
      </div>
    </div>
  );
}

MessagesTile.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.lastName,
  lastMessage: PropTypes.string,
  idx: PropTypes.number,
  setCurrConversationIdx: PropTypes.func,
  setShowMessagesModal: PropTypes.func
};
