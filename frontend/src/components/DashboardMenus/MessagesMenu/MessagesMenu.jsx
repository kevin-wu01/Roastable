import React, { useState } from 'react';
import MessagesModal from "./MessagesModal";

import MessagesArrow from '../../../Images/MessagesArrow/MessagesArrow.png';
import DarkMessagesArrow from '../../../Images/MessagesArrow/DarkMessagesArrow.png';

import { InputLarge } from '../../styled/common';
import { H3 } from '../../styled/text';
import "./MessagesMenu.scss";

export default function MessagesMenu({ socket }) {
    const [showMessagesModal, setShowMessagesModal] = useState(false);
    const [userMessage, setUserMessage] = useState("");

    const onHoverArrow = () => {
        document.getElementsByClassName("MessagesMenu__arrow")[0].src = DarkMessagesArrow;
    }

    const offHoverArrow = () => {
        document.getElementsByClassName("MessagesMenu__arrow")[0].src = MessagesArrow;
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            const chatBox = document.querySelector(".MessagesMenu-TextBox");

            socket.emit('chatMessage', userMessage);
            document.getElementsByClassName("MessagesMenu-input__msg")[0].value = ''; 
            chatBox.scrollTop = chatBox.scrollHeight;
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
            <div className="sentext-box">
                <div className="sentext">
                    Lorem ipsum dolor sit amet potato cheese food literally eating all of that like holy smokes I,
                </div>
            </div>
            <div className="receive-text-box">
                <div className="receive-text">
                    Lorem ipsum dolor sit amet potato cheese food literally eating all of that like holy smokes I,
                </div>
            </div>
            <div className="sentext-box">
                <div className="sentext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem mauris. Donec sit amet ipsum eu leo molestie vestibulum porta quis lacus. Nullam commodo nulla sed sapien rutrum, at pellentesque nulla finibus. Maecenas id risus sed urna scelerisque pellentesque. Mauris pretium mi sit amet dui iaculis elementum. Pellentesque ultrices, tellus vitae pretium egestas, orci arcu convallis lorem, sed aliquet magna leo at metus. Aenean scelerisque placerat libero, non tempor odio gravida eget. Vestibulum tempor blandit nisi. Sed ante tellus, eleifend sit amet leo et, ultrices lacinia felis.
                </div>
            </div>
            <div className="sentext-box">
                <div className="sentext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non lorem mauris. Donec sit amet ipsum eu leo molestie vestibulum porta quis lacus. Nullam commodo nulla sed sapien rutrum, at pellentesque nulla finibus. Maecenas id risus sed urna scelerisque pellentesque. Mauris pretium mi sit amet dui iaculis elementum. Pellentesque ultrices, tellus vitae pretium egestas, orci arcu convallis lorem, sed aliquet magna leo at metus. Aenean scelerisque placerat libero, non tempor odio gravida eget. Vestibulum tempor blandit nisi. Sed ante tellus, eleifend sit amet leo et, ultrices lacinia felis.
                </div>
            </div>
            <div className="receive-text-box">
                <div className="receive-text">
                Integer placerat, ante ac luctus aliquet, sapien nisi venenatis nibh, et accumsan sapien leo nec magna. Sed rutrum nec nunc vel sollicitudin. Mauris fermentum purus eget congue pellentesque. Etiam scelerisque purus nec lectus aliquam sagittis. Curabitur auctor quis lorem quis ullamcorper. Suspendisse congue malesuada orci, nec viverra ante. Maecenas pellentesque quam quis lorem tincidunt dictum. Aenean in est sed nisl hendrerit facilisis. Phasellus elementum at ante eu blandit. 
                </div>
            </div>
            <div className="receive-text-box">
                <div className="receive-text">
                Integer placerat, ante ac luctus aliquet, sapien nisi venenatis nibh, et accumsan sapien leo nec magna. Sed rutrum nec nunc vel sollicitudin. Mauris fermentum purus eget congue pellentesque. Etiam scelerisque purus nec lectus aliquam sagittis. Curabitur auctor quis lorem quis ullamcorper. Suspendisse congue malesuada orci, nec viverra ante. Maecenas pellentesque quam quis lorem tincidunt dictum. Aenean in est sed nisl hendrerit facilisis. Phasellus elementum at ante eu blandit. 
                </div>
            </div>
            </div>
            <div className="MessagesMenu-input">
                <InputLarge className="MessagesMenu-input__msg" type="text" placeholder="Aa" onChange={e => setUserMessage(e.target.value)} onKeyDown={(e) => handleEnter(e)}/>
            </div>
        </div>
    );
}