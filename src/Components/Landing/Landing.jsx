import React, {Component} from 'react';

import fireBox from '../../Images/FireTextBox11.png';
import fireBox2 from '../../Images/FireTextBox22.png';

import './Landing.scss';

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
                        <p className="landing-header-subtitle">0% coffee, 100% heartwarming</p>
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
                <span className="about-box"/>
                    <div className="about-title">
                        <p className="about-title-header">
                            foobar
                        </p>
                        <p className="about-title-text">
                            foobar
                        </p>
                        <p className="about-title-subtitle">

                        </p>
                    </div>
                    
                </section>
            </div>
        );
    }
}

export default Landing;