export const UPDATED_FORM = "UPDATED_FORM";
const formatEmail =
  /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
const minPasswordLength = 6;

export const validateInput = (name, value) => {
  let hasError = false;
  let error = "";
  switch (name) {
    case "email":
      if (!value) {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (value.trim() === "") {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (!formatEmail.test(value)) {
        hasError = true;
        error = `El ${name} no es válido.`;
      } else {
        hasError = false;
        error = "";
      }
      break;

    case "password":
      if (!value) {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (value.trim() === "") {
        hasError = true;
        error = `El ${name} es requerido.`;
      } else if (value.length < minPasswordLength) {
        hasError = true;
        error = `El ${name} debe tener al menos ${minPasswordLength} caractéres.`;
      } else {
        hasError = false;
        error = "";
      }
      break;

    default:
      break;
  }
  return { hasError, error };
};

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }
  console.log("value onInputChange", value);
  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: false,
      isFormValid,
    },
  });
};

export const onFocusOut = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }
  console.log("value onblur0", value);
  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};
