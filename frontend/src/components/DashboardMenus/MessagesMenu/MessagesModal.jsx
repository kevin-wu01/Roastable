import { useEffect } from 'react';
import MessagesTile from './MessagesTile';

import MessagesArrow from '../../../Images/MessagesArrow/MessagesArrowMirror.png';
import DarkMessagesArrow from '../../../Images/MessagesArrow/DarkMessagesArrowMirror.png';

import "./MessagesModal.scss";

export default function MessagesModal({ setShowMessagesModal, msgData, setCurrConversationIdx }) {
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
    console.log(msgData[0]?.recipiants, "msgData");
    return(
        <div className="MessagesModal">
            {msgData ? msgData.map((msg,idx) => {
                return <MessagesTile key={"tile-" + idx.toString()} idx={idx} firstName={msg.recipiants[0]} lastName={""} 
                lastMessage={msg.messages[msg.messages.length - 1].content} sentLast={msg.sentLast} setCurrConversationIdx={setCurrConversationIdx}  setShowMessagesModal={setShowMessagesModal}/>
            }) : ''}
            <img className="MessagesModal__arrow" src={MessagesArrow} onClick={() => setShowMessagesModal(false)} onMouseOver={() => onHoverArrow()} onMouseOut={() => offHoverArrow()}/>
        </div>
    );
}

//             <MessagesTile firstName="Zoe" lastName="Inoyush" lastMessage="I should've thought about process holy wth" sentLast={true}/>