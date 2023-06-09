import {useInput} from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const BasicForm = (props) => {

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailValueBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log('Submitted!')
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='first-name'>First Name</label>
          <input type='text'
                 id='first-name'
                 value={firstNameValue}
                 onChange={firstNameChangeHandler}
                 onBlur={firstNameBlurHandler}/>
          {firstNameHasError && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text'
                 id='last-name'
                 value={lastNameValue}
                 onChange={lastNameChangeHandler}
                 onBlur={lastNameBlurHandler}/>
          {lastNameHasError && <p className='error-text'>Please enter a last name.</p>}

        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text'
               id='email'
               value={emailValue}
               onChange={emailValueChangeHandler}
               onBlur={emailValueBlurHandler}/>
        {emailHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
