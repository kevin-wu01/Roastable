import React, { useEffect, useState } from "react";
import { createUser } from "../RoastableService/RoastableService";

import './SignupModal.scss';
import { H1 } from "../styled/text";
import { Input, Button } from "../styled/common";

export default function SignupModal({ setShowModal }) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    /*
    let fields;
    let label;

    useEffect(() => {
        fields = Array.from(document.getElementsByTagName("input")).splice(2,6);
        label = document.getElementsByClassName("SignupModal-label")[0];
    })
    */

    const submitForm = () => {
        resetErrorFields();
        const errorFields = validateForm();
        if (errorFields.length === 0) {
            createUser(fristName, lastName, username, password)
        } else {
            highlightErrorFields(errorFields);
        }
    }

    const resetErrorFields = () => {
        const fields = Array.from(document.getElementsByTagName("input")).splice(2,6);
        const label = document.getElementsByClassName("SignupModal-label")[0];

        if (label) {
            label.classList.remove("SignupModal-ErrorLabel");
            label.textContent = "";
        }

        if (fields) {
            fields.forEach((f) => {
                f.classList.remove("SignupModal-ErrorField")
            })
        }

    }

    const validateForm = () => {
        const fields = [firstName, lastName, username, password];
        let errorIdx = [];

        fields.forEach((f, idx) => {
            if (typeof f === "undefined") {
                errorIdx.push(idx);
            }
        })

        return errorIdx;
    }

    const highlightErrorFields = (errorFields) => {
        const fields = Array.from(document.getElementsByTagName("input")).splice(2,6);
        const label = document.getElementsByClassName("SignupModal-label")[0];

        label.classList.add("SignupModal-ErrorLabel");
        label.textContent = "All fields must be completed."

        errorFields.forEach((e) => {
            fields[e].classList.add("SignupModal-ErrorField");
        })
    }

    return(
        <div className="SignupModal">
            <div className="SignupModal-content">
                <span className="SignupModal-close" onClick={() => setShowModal(false)}>&times;</span>
                <H1 className="SignupModal-title">Sign Up</H1>
                <hr className="SignupModal-break"/>
                <form id="modal">
                    <Input type="text" placeholder="First name" onChange={e => setFirstName(e.target.value)}/>
                    <Input type="text" placeholder="Last name" onChange={e => setLastName(e.target.value)}/>
                    <Input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    <Input className="SignupModal-LastInput" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <label className="SignupModal-label"></label>
                </form>
                <Button onClick={submitForm}>Sign Up</Button>
            </div>
        </div>
    );
}