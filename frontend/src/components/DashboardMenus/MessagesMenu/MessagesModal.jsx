import { useEffect } from 'react';
import MessagesTile from './MessagesTile';

import MessagesArrow from '../../../Images/MessagesArrow/MessagesArrowMirror.png';
import DarkMessagesArrow from '../../../Images/MessagesArrow/DarkMessagesArrowMirror.png';

import "./MessagesModal.scss";

export default function MessagesModal({ setShowMessagesModal }) {
    let mockData = [{FirstName: "Kevin", LastName: "Wu", LastMessage:"I should've thought about process holy wth", sentLast: true}, 
    {FirstName: "Kevin", LastName: "Wu", LastMessage:"I should've thought about process holy wth", sentLast: true},
    {FirstName: "Zoe", LastName: "Inoyush", LastMessage: "I should've thought about process holy wth", SentLast: true}]
    let messageTiles;

    useEffect(() => {

    }, []);

    const onHoverArrow = () => {
        document.getElementsByClassName("MessagesModal__arrow")[0].src = DarkMessagesArrow;
    }

    const offHoverArrow = () => {
        document.getElementsByClassName("MessagesModal__arrow")[0].src = MessagesArrow;
    }

    return(
        <div className="MessagesModal">
            {mockData.map(d => {
                return <MessagesTile firstName={d.FirstName} lastName={d.LastName} lastMessage={d.LastMessage} sentLast={d.sentLast}/>
            })}
            <MessagesTile firstName="Zoe" lastName="Inoyush" lastMessage="I should've thought about process holy wth" sentLast={true}/>
            <img className="MessagesModal__arrow" src={MessagesArrow} onClick={() => setShowMessagesModal(false)} onMouseOver={() => onHoverArrow()} onMouseOut={() => offHoverArrow()}/>
        </div>
    );
}