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
    case 'address': {
      if (isEmpty(value)) {
        return 'required';
      }
      return '';
    }
    case 'province': {
      if (isEmpty(value)) {
        return 'required';
      }
      return '';
    }
    case 'district': {
      if (isEmpty(value)) {
        return 'required';
      }
      return '';
    }
    case 'subdistrict': {
      if (isEmpty(value)) {
        return 'required';
      }
      return '';
    }
    case 'zipcode': {
      if (isEmpty(value)) {
        return 'required';
      }
      return '';
    }
    case 'skuId': {
      if (isEmpty(value)) {
        return 'กรุณาระบุ';
      }
      return '';
    }
    case 'roast': {
      if (isEmpty(value)) {
        return 'กรุณาระบุ';
      }
      return '';
    }
    case 'grind': {
      if (isEmpty(value)) {
        return 'กรุณาระบุ';
      }
      return '';
    }
    case 'weight': {
      if (isEmpty(value)) {
        return 'กรุณาระบุ';
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

const validateShipmentObject = (value) => {
  const errorAddress = validateInput('address', value.address);
  const errorProvince = validateInput('province', value.province);
  const errorDistrict = validateInput('district', value.district);
  const errorSubdistrict = validateInput('subdistrict', value.subdistrict);
  const errorZipCode = validateInput('zipcode', value.zipcode);
  const errorPhonenumber = validateInput('phonenumber', value.phonenumber);
  const error = {};
  if (errorAddress) error.address = errorAddress;
  if (errorProvince) error.province = errorProvince;
  if (errorDistrict) error.district = errorDistrict;
  if (errorSubdistrict) error.subdistrict = errorSubdistrict;
  if (errorZipCode) error.zipcode = errorZipCode;
  if (errorPhonenumber) error.phonenumber = errorPhonenumber;

  return error;
};

const validateProductOption = (value) => {
  const errorSkuId = validateInput('skuId', value.skuId + '');
  const errorRoast = validateInput('roast', value.roast);
  const errorGrind = validateInput('grind', value.grind);
  const errorWeight = validateInput('weight', value.weight);

  const error = {};
  if (errorSkuId) error.skuId = errorSkuId;
  if (errorRoast) error.roast = errorRoast;
  if (errorGrind) error.grind = errorGrind;
  if (errorWeight) error.weight = errorWeight;

  return error;
};

export {
  validateInput,
  validateRegisterObject,
  validateLoginObject,
  validateShipmentObject,
  validateProductOption,
};
