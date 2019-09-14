import {
  UPDATE_USER_REPOS,
  UPDATE_USER_ORGS,
} from "./types";

export const updateUserRepos = repos => (dispatch) => {
  dispatch({
    type: UPDATE_USER_REPOS,
    payload: repos,
  });
};

export const updateUserOrgs = repos => (dispatch) => {
  dispatch({
    type: UPDATE_USER_ORGS,
    payload: repos,
  });
};