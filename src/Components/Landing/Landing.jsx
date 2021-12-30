import React, {Component} from 'react';

import fireBox from '../../Images/FireTextBox11.png';
import fireBox2 from '../../Images/FireTextBox22.png';
import coffeeCup from '../../Images/CoffeeCup.png';
import circleStripes from '../../Images/CircleStripes.png';

import './Landing.scss';
import './LandingMobile.scss';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <section className="landing">
                    <div className="landing-header">
                        <p className="landing-header-title">Roastable.</p>
                        <p className="landing-header-subtitle">0% coffee. 100% heartwarming</p>
                    </div>
                    <div className="landing-login">
                        <img className="landing-login-img1" src={fireBox} />
                        <img className="landing-login-img2" src={fireBox2} />
                        <div className="landing-login-email">

                        </div>
                        <div className="landing-login-password">

                        </div>
                        <div className="landing-login-buttons">
                            <a className="landing-login-buttons-login">Log In</a>
                            <a className="landing-login-buttons-signup">Sign Up</a>
                        </div>
                    </div>
                </section>
                <section className="about">
                <div className="about-box">
                    <div className="about-title-header">
                        <p className="about-title-header1">welcome! &nbsp; &nbsp; &nbsp;</p>
                        <p className="about-title-header2">welcome! &nbsp; &nbsp; &nbsp;</p>
                        <p className="about-title-header3">welcome!</p>
                    </div>
                    <div className="about-title-text">
                        share a cup of digital coffee
                    </div>
                    <div className="about-title-sub">
                        this one's on us.
                    </div>
                    <img className="about-coffee" src={coffeeCup} /> 
                </div>
                <span className="about-line"/>
                <div className="about-boxDesc">
                    <p className="about-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, augue in luctus ornare, libero neque imperdiet lectus, ut semper dui sem a nulla. Phasellus tempor nisl tempus porta congue.
                    </p>
                    <p className="about-divider">〰</p>
                    <p className="about-desc">
                    Nam pretium, urna vel hendrerit sodales, magna velit rhoncus nulla, id porta diam orci sit amet ligula. Nam quam diam, venenatis sit amet erat et, scelerisque interdum tellus. Nulla sit amet rutrum lacus, sed convallis libero. Suspendisse scelerisque ullamcorper erat a venenatis.
                    </p>
                </div>
                <img className="about-circle" src={circleStripes} />
                </section>
            </div>
        );
    }
}

export default Landing;