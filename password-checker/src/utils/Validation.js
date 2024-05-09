export const validatePassword = (password) => {
  const validate = {
    hasLow: false,
    hasCap: false,
    hasNumber: false,
    has8digits: false,
  };

  if (password.match(/\d+/g)) {
    validate.hasNumber = true;
  }
  if (password.match(/[A-Z]+/g)) {
    validate.hasCap = true;
  }
  if (password.match(/[a-z]+/g)) {
    validate.hasLow = true;
  }
  if (password.length > 7) {
    validate.has8digits = true;
  }

  return validate;
};
