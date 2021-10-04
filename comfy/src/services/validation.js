import { isEmpty, isEmail, isNumeric } from 'validator';

const validateInput = (name, value) => {
  switch (name) {
    case 'email': {
      if (isEmpty(value)) {
        return 'Email is required';
      }
      if (!isEmail(value)) {
        return 'Invalid email format';
      }
      return '';
    }
    case 'password': {
      if (isEmpty(value)) {
        return 'Password is required';
      }
      return '';
    }
    case 'confirmpassword': {
      if (isEmpty(value)) {
        return 'Confirm password is required';
      }
      return '';
    }

    case 'firstname': {
      if (isEmpty(value)) {
        return 'Firstname is required';
      }
      return '';
    }
    case 'lastname': {
      if (isEmpty(value)) {
        return 'Lastname is required';
      }
      return '';
    }
    case 'phonenumber': {
      if (isEmpty(value)) {
        return 'Phonenumber is required';
      }
      if (!isNumeric(value)) {
        return 'Invalid phonenumber format';
      }
      if (value.length !== 10) {
        return 'Invalid phonenumber format';
      }
      return '';
    }
    default:
      return '';
  }
};

const validateRegisterObject = (value, form) => {
  console.log('validata', value);
  const errorEmail = validateInput('email', value.email);
  const errorPassword = validateInput('password', value.password);
  const errorFirstname = validateInput('firstname', value.firstname);
  const errorLastname = validateInput('lastname', value.password);
  const errorPhonenumber = validateInput('phonenumber', value.phonenumber);
  const errorConfirmPassword =
    value.password !== value.confirmpassword ? 'Password is not match' : '';

  const error = {};
  if (errorEmail) error.email = errorEmail;
  if (errorPassword) error.password = errorPassword;
  if (errorFirstname) error.firstname = errorFirstname;
  if (errorLastname) error.lastname = errorLastname;
  if (errorPhonenumber) error.phonenumber = errorPhonenumber;
  if (errorConfirmPassword) error.confirmpassword = errorConfirmPassword;
  return error;
};

const validateLoginObject = (value) => {
  const errorEmail = validateInput('email', value.email);
  const errorPassword = validateInput('password', value.password);

  const error = {};
  if (errorEmail) error.email = errorEmail;
  if (errorPassword) error.password = errorPassword;

  return error;
};
export { validateInput, validateRegisterObject, validateLoginObject };
