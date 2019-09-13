import * as types from "../types";
import * as actions from "../UserActions";

describe("actions", () => {
  describe("user", () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    describe("UPDATE_USER_REPOS", () => {
      it("should create an action to update user repos", () => {
        const payload = [
          {
            name: "repo1",
            html_url: "repo1_html_url",
          },
          {
            name: "repo2",
            html_url: "repo2_html_url",
          },
        ];
        const expectedAction = {
          type: types.UPDATE_USER_REPOS,
          payload,
        };
        actions.updateUserRepos(payload)(dispatch);
        expect(dispatch.mock.calls.length).toBe(1);
        expect(dispatch.mock.calls[0]).toContainEqual(expectedAction);
      });
    });
  });
});