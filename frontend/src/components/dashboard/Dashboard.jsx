import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getUserData } from '../RoastableService/RoastableService';
import io from 'socket.io-client';

import SidebarItem from '../SidebarItem/SidebarItem';
import HomeMenu from '../DashboardMenus/HomeMenu/HomeMenu';
import MessagesMenu from '../DashboardMenus/MessagesMenu/MessagesMenu';

import circleStripesSmall from '../../Images/CircleStripesSmall.png';
import circleStripes from '../../Images/CircleStripes.png';
import circleStripesLarge from '../../Images/CircleStripesLarge.png';
import picturePlaceholder from '../../Images/PicturePlaceholder.png';
import DropdownArrow from '../../Images/DropdownArrow.png';

import { H1, H2, H3, H4 } from '../styled/text';
import "./Dashboard.scss";

export default function Dashboard() {
    const [selectedMenu, setSelectedMenu] = useState("home");
    const [menuContent, setMenuContent] = useState(<HomeMenu/>);
    const [dropdown, setDropdown] = useState(false);
    const [userData, setUserData] = useState();
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getUserData(localStorage.getItem('token'))
        .then((user) => {
            setUserData(user);
        });
    }, []);

    useEffect(() => {
        let buttonIdx;

        switch(selectedMenu) {
            case "home":
                buttonIdx = 0;
                break;
            case "messages":
                buttonIdx = 1;
                break;
            case "people":
                buttonIdx = 2;
                break;
            case "settings":
                buttonIdx = 3;
                break;
        }

        selectMenuContent();
        updateButtonStyle(buttonIdx);
    }, [selectedMenu]);

    useEffect(() => {
        const newSocket = io.connect(`http://${window.location.hostname}:4321`, {
            auth: {
                token: localStorage.getItem('token')
            }
        });
        setSocket(newSocket);

        return () => newSocket.close();
    }, [setSocket]);

    useEffect(() => {
        if (socket) {
            socket.on('connect', () => {
                console.log("connected to socket");
            })

            socket.on('message', message => {
                console.log(message);
            })

            socket.on('error', message => {
                console.warn("an error occurred");
                socket.disconnect();
            })
        }
    }, [socket]);

    const selectMenuContent = () => {
        switch(selectedMenu) {
            case "home":
                setMenuContent(<HomeMenu/>);
                break;
            case "messages":
                setMenuContent(<MessagesMenu socket={socket} userData={userData}/>);
                break;
            case "people":
                setMenuContent(<div></div>);
                break;
            case "settings":
                setMenuContent(<div></div>);;
                break;
        }
    }

    const userLogOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const updateButtonStyle = (menuIdx) => {
        const menuItems = Array.from(document.getElementsByClassName("Dashboard-menu-sidebar__button"));

        const selectedMenuItem = menuItems[menuIdx];
        const unselectedMenuItems = menuItems.splice(menuIdx, 1);

        menuItems.forEach((item) => {
            item.classList.remove("Dashboard-menu-sidebar__button--selected");
        })

        selectedMenuItem.classList.add("Dashboard-menu-sidebar__button--selected");
    }

    const redirectCoffee = () => {
        navigate("/coffeeshop");
    }

    return(
        <div className="Dashboard">
            <img className="Dashboard-circle1" src={circleStripesLarge} alt="circle with stripes"/>
            <img className="Dashboard-circle2" src={circleStripes} alt="circle with stripes"/>
            <img className="Dashboard-circle3" src={circleStripes} alt="circle with stripes"/>
            <img className="Dashboard-circle4" src={circleStripesSmall} alt="circle with stripes"/>
            <div className="Dashboard-menu">
                <div className="Dashboard-menu-sidebar">
                    <div className="Dashboard-menu-sidebar__profile">
                        <img className="Dashboard-menu-sidebar__picture" src={picturePlaceholder}/>
                        <div>
                            <H3 className="Dashboard-menu-sidebar__name">{userData ? `${userData.firstName} ${userData.lastName}` : ''}</H3>
                            <div className="Dashboard-menu-dropdown">
                                <img className="Dashboard-menu-dropdown__arrow" src={DropdownArrow} onClick={() => setDropdown(!dropdown)} />
                                {dropdown ? 
                                <div className="Dashboard-menu-dropdown__content">
                                    <button className="Dashboard-menu-dropdown__button" onClick={userLogOut}><H4>Log Out</H4></button>
                                </div> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="Dashboard-menu-sidebar__items">
                        <button className="Dashboard-menu-sidebar__button" onClick={() => setSelectedMenu("home")}><H2 className="Dashboard-menu-sidebar__title">Home</H2></button>
                        <button className="Dashboard-menu-sidebar__button" onClick={() => setSelectedMenu("messages")}><H2 className="Dashboard-menu-sidebar__title">Messages</H2></button>
                        <button className="Dashboard-menu-sidebar__button" onClick={() => setSelectedMenu("people")}><H2 className="Dashboard-menu-sidebar__title">People</H2></button>
                        <button className="Dashboard-menu-sidebar__button" onClick={() => setSelectedMenu("settings")}><H2 className="Dashboard-menu-sidebar__title">Settings</H2></button>
                    </div>
                    <div className="Dashboard-menu-sidebar__coffee">
                        <button className="Dashboard-menu-sidebar__coffeeButton" onClick={() => redirectCoffee()}><H2 className="Dashboard-menu-sidebar__coffeeTitle">Coffee Shop</H2></button>
                    </div>
                </div>
                <div className="Dashboard-menu-display">
                    {menuContent}
                </div>
            </div>
        </div>
    );

}

// <SidebarItem selectedItem={itemSelected1} itemTitle="foobar"/>