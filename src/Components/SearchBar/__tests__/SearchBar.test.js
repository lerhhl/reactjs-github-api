import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import toJson from "enzyme-to-json";
import { SearchBar } from "../SearchBar";
import {
  Button,
  TextField,
} from "@material-ui/core";

jest.mock("axios");
let wrapper;

describe("SearchBar", () => {
  beforeEach(() => {
    wrapper = shallow(<SearchBar updateUserRepos={jest.fn()} updateUserOrgs={jest.fn()}/>)
  });

  describe("form", () => {
    it("should render successfully", () => {
      expect(wrapper.find("form").length).toBe(1);
    });
  });

  describe("input field", () => {
    it("should render successfully", () => {
      const textField = wrapper.find(TextField)
      expect(textField.length).toBe(1);
      expect(textField.props().id).toBe("username-textfield");
    });
  })
  
  describe("search button", () => {
    it("should render successfully", () => {
      const button = wrapper.find(Button)
      expect(button.length).toBe(1);
      expect(button.children().text()).toBe("Search");
      expect(button.props().disabled).toBe(true);
    });
    it("should call upon endpoint when click search btn", () => {
      wrapper
        .find(TextField)
        .simulate("change", { target: { value: "username" }});
      wrapper
        .find("form")
        .simulate("submit", { preventDefault: jest.fn() });
      expect(axios.get).toHaveBeenCalledTimes(2);
      expect(axios.get).toHaveBeenCalledWith("https://api.github.com/users/username/repos");
      expect(axios.get).toHaveBeenCalledWith("https://api.github.com/users/username/orgs");
    });
  });
});