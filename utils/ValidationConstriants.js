import { validate } from 'validate.js';

export const validateString = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== '') {
    constraints.format = {
      pattern: '[a-z]+',
      flags: 'i',
      message: 'Value can only contain letters',
    };
  }

  const validationResults = validate({ [id]: value }, { [id]: constraints });

  return validationResults && validationResults[id];
};

export const validateEmail = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== '') {
    constraints.email = true;
  }

  const validationResults = validate({ [id]: value }, { [id]: constraints });

  return validationResults && validationResults[id];
};

export const validatePassword = (id, value) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (value !== '') {
    constraints.length = {
      minimum: 6,
      message: 'must be at least 6 characters long',
    };
  }

  const validationResults = validate({ [id]: value }, { [id]: constraints });

  return validationResults && validationResults[id];
};
