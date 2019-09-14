import { UserReducer } from "../index";
import * as types from "../../actions/types";
import {
  repo1,
  repo2,
  org1,
  org2,
} from "../../__mocks__/responses";

describe("reducers", () => {
  describe("User Reducer", () => {
    describe("DEFAULT", () => {
      it("should return default state", () => {
        expect(UserReducer(undefined, {})).toStrictEqual({
          repos: [],
          orgs: [],
        });
      });
    });

    describe("UPDATE_USER_REPOS", () => {
      it("should update the user state after getting user repos", () => {
        const payload = [repo1, repo2];
        const action = {
          type: types.UPDATE_USER_REPOS,
          payload,
        };
        expect(UserReducer(undefined, action)).toStrictEqual({
          orgs: [],
          repos: [repo1, repo2],
        });
      });
    });

    describe("UPDATE_USER_ORGS", () => {
      it("should update the user state after getting user orgs", () => {
        const payload = [org1, org2];
        const action = {
          type: types.UPDATE_USER_ORGS,
          payload,
        };
        expect(UserReducer(undefined, action)).toStrictEqual({
          orgs: [org1, org2],
          repos: [],
        });
      });
    });
  });
});