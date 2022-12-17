export const reducer = (state, action) => {
  const { validationResult, inputId } = action;
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
  };
};
