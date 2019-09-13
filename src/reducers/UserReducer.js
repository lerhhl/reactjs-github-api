import { UPDATE_USER_REPOS } from "../actions/types";

const INITIAL_STATE = {
  repos: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_USER_REPOS:
    return {
      repos: action.payload,
    };
  default:
    return state;
  }
};