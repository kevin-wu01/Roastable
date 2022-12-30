import React, { ReactElement, useState } from 'react';
import { createUser } from '../../services/RoastableService/RoastableService';

import './SignupModal.scss';
import { H1 } from '../styled/text';
import { Input, Button } from '../styled/common';
import PropTypes from 'prop-types';
import { Response } from '../../types/ApiTypes';

export default function SignupModal({
  setShowModal
}: {
  setShowModal: (state: boolean) => void;
}): ReactElement {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  /*
    let fields;
    let label;

    useEffect(() => {
        fields = Array.from(document.getElementsByTagName("input")).splice(2,6);
        label = document.getElementsByClassName("SignupModal-label")[0];
    })
    */
  //
  const submitForm = () => {
    resetErrorFields();
    const errorFields = validateForm();

    if (errorFields.length === 0) {
      setDisableButton(true);

      createUser(firstName, lastName, username, password).then((res: Response) => {
        console.log(res, 'response');
        const label = document.getElementsByClassName('SignupModal-label')[0];
        console.log(res);
        if (res.status === 201) {
          label.classList.add('SignupModal-SuccessLabel');
          label.textContent = 'User successfully created';
        } else {
          label.classList.add('SignupModal-ErrorLabel');
          label.textContent = res.message;
        }

        setDisableButton(false);
      });
    } else {
      highlightErrorFields(errorFields);
    }
  };

  const resetErrorFields = () => {
    const fields = Array.from(document.getElementsByTagName('input')).splice(2, 6);
    const label = document.getElementsByClassName('SignupModal-label')[0];

    if (label) {
      label.classList.remove('SignupModal-ErrorLabel');
      label.classList.remove('SignupModal-SuccessLabel');
      label.textContent = '';
    }

    if (fields) {
      fields.forEach((f) => {
        f.classList.remove('SignupModal-ErrorField');
      });
    }
  };

  const validateForm = () => {
    const fields = [firstName, lastName, username, password];
    const errorIdx: number[] = [];

    fields.forEach((f, idx) => {
      if (typeof f === 'undefined') {
        errorIdx.push(idx);
      }
    });

    return errorIdx;
  };

  const highlightErrorFields = (errorFields: number[]) => {
    const fields = Array.from(document.getElementsByTagName('input')).splice(2, 6);
    const label = document.getElementsByClassName('SignupModal-label')[0];

    label.classList.add('SignupModal-ErrorLabel');
    label.textContent = 'All fields must be completed.';

    errorFields.forEach((e) => {
      fields[e].classList.add('SignupModal-ErrorField');
    });
  };

  return (
    <div className="SignupModal">
      <div className="SignupModal-content">
        <span className="SignupModal-close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <H1 className="SignupModal-title">Sign Up</H1>
        <hr className="SignupModal-break" />
        <form id="modal">
          <Input
            type="text"
            placeholder="First name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <Input
            className="SignupModal-LastInput"
            type="password"
            placeholder="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <label className="SignupModal-label"></label>
        </form>
        <Button disable={disableButton} onClick={submitForm}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

SignupModal.propTypes = {
  setShowModal: PropTypes.func
};
