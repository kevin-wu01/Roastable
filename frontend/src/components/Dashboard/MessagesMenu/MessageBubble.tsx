import { ReactElement, useEffect } from 'react';
import './MessageBubble.scss';
import PropTypes from 'prop-types';
import React from 'react';

export default function MessageBubble({
  content,
  isSelf,
  idx
}: {
  content: string;
  isSelf: boolean;
  idx: number;
}): ReactElement {
  useEffect(() => {
    const innerDiv: Element | null | undefined = document.getElementById(
      'text-' + idx.toString()
    )?.firstElementChild;

    if (isSelf) {
      innerDiv?.classList.remove('MessageBubble-receive');
      innerDiv?.classList.add('MessageBubble-sent');
    } else {
      innerDiv?.classList.remove('MessageBubble-sent');
      innerDiv?.classList.add('MessageBubble-receive');
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
  isSelf: PropTypes.bool,
  idx: PropTypes.number
};
