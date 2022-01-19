import React, { useState } from 'react';
import MessagesModal from "./MessagesModal";

import MessagesArrow from '../../../Images/MessagesArrow/MessagesArrow.png';
import DarkMessagesArrow from '../../../Images/MessagesArrow/DarkMessagesArrow.png';

import { InputLarge } from '../../styled/common';
import { H3 } from '../../styled/text';
import "./MessagesMenu.scss";

export default function MessagesMenu() {
    const [showMessagesModal, setShowMessagesModal] = useState(false);

    const onHoverArrow = () => {
        document.getElementsByClassName("MessagesMenu__arrow")[0].src = DarkMessagesArrow;
    }

    const offHoverArrow = () => {
        document.getElementsByClassName("MessagesMenu__arrow")[0].src = MessagesArrow;
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('enter pressed');
        }
    }

    return(
        <div className="MessagesMenu">
            {showMessagesModal ? <MessagesModal setShowMessagesModal={setShowMessagesModal}/> :
            <div className="MessagesMenu__box" onClick={() => setShowMessagesModal(true)} onMouseOver={() => onHoverArrow()} onMouseOut={() => offHoverArrow()}>
                <img className="MessagesMenu__arrow" src={MessagesArrow}/>
            </div>
            }
            <div className="MessagesMenu-desc">
                <H3 className="MessagesMenu-desc__FirstName">Zoe</H3> <H3 className="MessagesMenu-desc__LastName">Inoyush</H3>
            </div>
            <div className="MessagesMenu-TextBox">

            </div>
            <div className="MessagesMenu-input">
                <InputLarge className="MessagesMenu-input__msg" type="text" onKeyDown={(e) => handleEnter(e)}/>
            </div>
        </div>
    );
}