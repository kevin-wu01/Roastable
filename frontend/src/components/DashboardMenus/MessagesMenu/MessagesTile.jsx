
import PicturePlaceholder from '../../../Images/PicturePlaceholder.png';

import { H3, H4 } from '../../styled/text';
import "./MessagesTile.scss";

export default function MessagesTile({firstName, lastName, lastMessage, sentLast}) {

    return(
        <div className="MessagesTile">
            <img className="MessagesTile__picture" src={PicturePlaceholder} />
            <div className="MessagesTile-text">
                <H4 className="MessagesTile-text__name">{firstName} {lastName}</H4>
                <H4 className="MessagesTile-text__message">{lastMessage}</H4>
            </div>
        </div>
    );
}