import React, {Component, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import SignupModal from './SignupModal';

import fireBox from '../../Images/FireTextBox11.png';
import fireBox2 from '../../Images/FireTextBox22.png';
import coffeeCup from '../../Images/CoffeeCup.png';
import circleStripes from '../../Images/CircleStripes.png';

import { loginUser } from '../RoastableService/RoastableService';

import './Landing.scss';
import './LandingMobile.scss';

export default function Landing({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.documentElement.style.overflow = 'hidden'; 
        } else {
            document.documentElement.style.overflow = 'auto'; 
        }
    })

    const handleLogin = e => {
        e.preventDefault();

        resetLoginErrors();
        const valid = validateFields();

        if (valid) {
            loginUser({ username, password })
            .then((token) => {
                if (token.data.token) {
                    setToken(token);
                    return <Navigate to="/home"/>;
                } else {
                    displayLoginError(token.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    const validateFields = () => {
        return true;
    }

    const displayLoginError = (err) => {
        const errorField = document.getElementsByClassName("landing-login-error")[0];
        const loginFields = document.getElementsByTagName("input");
    
        errorField.innerHTML = err;

        loginFields[0].classList.add("landing-login-errorField");
        loginFields[1].classList.add("landing-login-errorField");
    }

    const resetLoginErrors = () => {
        const errorField = document.getElementsByClassName("landing-login-error")[0];
        const loginFields = document.getElementsByTagName("input");
        
        errorField.innerHTML = "";

        loginFields[0].classList.remove("landing-login-errorField");
        loginFields[1].classList.remove("landing-login-errorField");
    }

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

                    <form id="login">
                        <input className="landing-login-email" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        <input className="landing-login-password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <label className="landing-login-error"></label>
                    </form>
                    <div className="landing-login-buttons">
                        <a className="landing-login-buttons-login" form="login" onClick={handleLogin}>Log In</a>
                        <a className="landing-login-buttons-signup" onClick={() => setShowModal(true)}>Sign Up</a>
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
            {
                showModal ? <SignupModal setShowModal={setShowModal}/>  : ''
            }
        </div>
    );
}

Landing.propTypes = {
    setToken: PropTypes.func.isRequired
}