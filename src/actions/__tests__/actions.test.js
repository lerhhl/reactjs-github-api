import * as types from "../types";
import * as actions from "../UserActions";
import {
  repo1,
  repo2,
  org1,
  org2
} from "../../__mocks__/responses"

describe("actions", () => {
  describe("user", () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    describe("UPDATE_USER_REPOS", () => {
      it("should create an action to update user repos", () => {
        const payload = [repo1, repo2];
        const expectedAction = {
          type: types.UPDATE_USER_REPOS,
          payload,
        };
        actions.updateUserRepos(payload)(dispatch);
        expect(dispatch.mock.calls.length).toBe(1);
        expect(dispatch.mock.calls[0]).toContainEqual(expectedAction);
      });
    });

    describe("UPDATE_USER_ORGS", () => {
      it("should create an action to update user orgs", () => {
        const payload = [org1, org2];
        const expectedAction = {
          type: types.UPDATE_USER_ORGS,
          payload,
        };
        actions.updateUserOrgs(payload)(dispatch);
        expect(dispatch.mock.calls.length).toBe(1);
        expect(dispatch.mock.calls[0]).toContainEqual(expectedAction);
      });
    });
  });
});