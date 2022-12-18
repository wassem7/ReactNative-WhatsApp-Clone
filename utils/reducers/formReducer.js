export const reducer = (state, action) => {
  const { validationResult, inputId, inputValue } = action;

  const updatedValues = {
    ...state.inputValues,
    [inputId]: inputValue,
  };

  const updatedValidities = {
    ...state.inputValidities,
    [inputId]: validationResult,
  };
  let updatedformisValid = true;

  for (key in updatedValidities) {
    if (updatedValidities[key] !== undefined) {
      updatedformisValid = false;
      break;
    }
  }

  return {
    inputValidities: updatedValidities,
    formisValid: updatedformisValid,
    inputValues: updatedValues,
  };
};
