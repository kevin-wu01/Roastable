
import PicturePlaceholder from '../../../Images/PicturePlaceholder.png';

import { H3, H4 } from '../../styled/text';
import "./MessagesTile.scss";

export default function MessagesTile({firstName, lastName, lastMessage, sentLast, idx, setCurrConversationIdx, setShowMessagesModal}) {
    const handleClick = () => {
        setCurrConversationIdx(idx);
        setShowMessagesModal(false);
    }
    
    return(
        <div className="MessagesTile" onClick={() => handleClick()}>
            <img className="MessagesTile__picture" src={PicturePlaceholder} />
            <div className="MessagesTile-text">
                <H4 className="MessagesTile-text__name">{firstName} {lastName}</H4>
                <H4 className="MessagesTile-text__message">{lastMessage}</H4>
            </div>
        </div>
    );
}