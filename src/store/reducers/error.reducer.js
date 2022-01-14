import { ERROR_CONSTANTS } from "../actionTypes";

const initState = {
  message: "",
  status: "",
  description: "",
  body: {}
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case ERROR_CONSTANTS.ERROR:
        return {
            ...state,
            message: action?.error?.message,
            status: action?.error?.status,
            description: action?.error?.description,
            body: action?.error?.body,
        };
    default:
      return state;
  }
};
export default errorReducer;
