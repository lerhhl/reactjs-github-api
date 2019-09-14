import {
  UPDATE_USER_REPOS,
  UPDATE_USER_ORGS,
} from "../actions/types";

const INITIAL_STATE = {
  repos: [],
  orgs: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_USER_REPOS:
    return {
      ...state,
      repos: action.payload,
    };
  case UPDATE_USER_ORGS:
    return {
      ...state,
      orgs: action.payload,
    };
  default:
    return state;
  }
};