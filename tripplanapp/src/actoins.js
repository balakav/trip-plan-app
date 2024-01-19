// actions.js
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = (formData) => {
  return {
    type: SUBMIT_FORM,
    payload: formData,
  };
};
