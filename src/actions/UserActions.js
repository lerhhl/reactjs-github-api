import { UPDATE_USER_REPOS } from "./types";

export const updateUserRepos = repos => (dispatch) => {
  dispatch({
    type: UPDATE_USER_REPOS,
    payload: repos,
  });
};