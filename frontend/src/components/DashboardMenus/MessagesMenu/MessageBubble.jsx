import { useEffect } from 'react';
import './MessageBubble.scss';
import PropTypes from 'prop-types';

export default function MessageBubble({ content, self, idx }) {
  useEffect(() => {
    let innerDiv = document.getElementById('text-' + idx.toString()).firstChild;

    if (self) {
      innerDiv.classList.remove('MessageBubble-receive');
      innerDiv.classList.add('MessageBubble-sent');
    } else {
      innerDiv.classList.remove('MessageBubble-sent');
      innerDiv.classList.add('MessageBubble-receive');
    }
  });

  return (
    <div className="MessageBubble" id={'text-' + idx.toString()}>
      <div className="MessageBubble-text">{content}</div>
    </div>
  );
}

MessageBubble.propTypes = {
  content: PropTypes.string,
  self: PropTypes.any,
  idx: PropTypes.number
};
