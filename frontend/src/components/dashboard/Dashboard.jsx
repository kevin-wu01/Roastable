import React, {Component} from 'react';

import circleStripes from '../../Images/CircleStripes.png';

import { H1, H2, H3, H4 } from '../styled/text';
import "./Dashboard.scss";

export default function Dashboard() {

    return(
        <div className="Dashboard">
            <img className="about-circle" src={circleStripes} alt="circle with stripes"/>
            <div className="square"></div>
            <div className="Dashboard-menu">
                <div className="Dashboard-menu-sidebar">

                </div>
                <div className="Dashboard-menu-display">

                </div>
            </div>
        </div>
    );

}