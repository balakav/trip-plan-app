// reducers.js
import { SUBMIT_FORM } from './actions';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmpassword: '',
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        confirmpassword: action.payload.confirmpassword,
      };
    default:
      return state;
  }
};

export default formReducer;
