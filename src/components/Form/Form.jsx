import { useState } from "react";

import useInput from "../../hooks/use-input";

import CtaBanner from "../CtaBanner";
import InputErrorMsg from "./InputErrorMsg";
import Modal from "../Modal";

const Form = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameError,
    onChangeHandler: nameInputChangeHandler,
    onBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: surnameValue,
    isValid: surnameIsValid,
    hasError: surnameError,
    onChangeHandler: surnameInputChangeHandler,
    onBlurHandler: surnameInputBlurHandler,
    reset: surnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    onChangeHandler: emailInputChangeHandler,
    onBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordError,
    onChangeHandler: passwordInputChangeHandler,
    onBlurHandler: passwordInputBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (nameIsValid && surnameIsValid && emailIsValid && passwordIsValid)
    formIsValid = true;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      console.log(
        `${nameValue}\n${surnameValue}\n${emailValue}\n${passwordValue}`
      );
      setIsSubmitting(false);
      setFormIsSubmitted(true);
    }, "2000");

    nameReset();
    surnameReset();
    emailReset();
    passwordReset();
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  if (isSubmitting) {
    return (
      <div className="form__container">
        <p className="form-submiting-text">Submitting form</p>
        <div class="lds-hourglass"></div>
      </div>
    );
  }

  if (formIsSubmitted) {
    return (
      <div className="form__container">
        <p className="form-success-text">Form submitted, thank you!</p>
      </div>
    );
  }

  return (
    <div className="form__container">
      <CtaBanner />
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form__input-box">
          <input
            className={nameError ? "error-border" : ""}
            type="text"
            placeholder={nameError || "First Name"}
            value={nameValue}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameError && (
            <InputErrorMsg errorText="First Name cannot be empty" />
          )}
        </div>
        <div className="form__input-box">
          <input
            className={surnameError ? "error-border" : ""}
            type="text"
            placeholder={surnameError || "Last Name"}
            value={surnameValue}
            onChange={surnameInputChangeHandler}
            onBlur={surnameInputBlurHandler}
          />
          {surnameError && (
            <InputErrorMsg errorText="Last Name cannot be empty" />
          )}
        </div>
        <div className="form__input-box">
          <input
            className={emailError ? "error-border" : ""}
            type="text"
            placeholder={emailError || "Email Adress"}
            value={emailValue}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
          {emailError && (
            <InputErrorMsg errorText="Looks like this is not an email" />
          )}
        </div>
        <div className="form__input-box">
          <input
            className={passwordError ? "error-border" : ""}
            type="password"
            placeholder={passwordError || "Password"}
            value={passwordValue}
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
          />
          {passwordError && (
            <InputErrorMsg errorText="Password cannot be empty" />
          )}
        </div>
        <button disabled={!formIsValid}>Claim your free trial</button>
        <p className="form-terms">
          <span className="form-terms--text">
            By clicking this button you are agreeing to our
          </span>
          <a href="#" className="form-terms--link" onClick={toggleModal}>
            Terms and Services
          </a>
        </p>
      </form>
      {modalIsOpen && <Modal onToggle={toggleModal} />}
    </div>
  );
};

export default Form;
