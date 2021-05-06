import { DECREMENT, RESET, INCREMENT } from "../actions/counterReducer";

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
