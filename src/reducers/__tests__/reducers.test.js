import { UserReducer } from "../index";
import * as types from "../../actions/types";

describe("reducers", () => {
  describe("User Reducer", () => {
    describe("DEFAULT", () => {
      it("should return default state", () => {
        expect(UserReducer(undefined, {})).toStrictEqual({
          repos: [],
        });
      });
    });

    describe("UPDATE_USER_REPOS", () => {
      it("should update the user state after getting user repos", () => {
        const payload = [
          {
            name: "repo1",
            html_url: "repo1_html_url"
          },
          {
            name: "repo2",
            html_url: "repo2_html_url"
          },
        ];
        const action = {
          type: types.UPDATE_USER_REPOS,
          payload,
        };
        expect(UserReducer(undefined, action)).toStrictEqual({
          repos: [
            {
              name: "repo1",
              html_url: "repo1_html_url",
            },
            {
              name: "repo2",
              html_url: "repo2_html_url",
            },
          ],
        });
      });
    });
  });
});