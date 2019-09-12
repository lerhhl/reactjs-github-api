import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { SearchBar } from "../SearchBar";
import {
  Button,
  TextField,
} from "@material-ui/core";

let wrapper;

describe("Search Bar", () => {
  beforeEach(() => {
    wrapper = shallow(<SearchBar/>)
  });

  it("should have a input field", () => {
    const textField = wrapper.find(TextField)
    expect(textField.length).toBe(1);
    expect(textField.props().id).toBe("username-textfield");
  })

  it("should have a search button", () => {
    expect(wrapper.find("#search-button").length).toBe(1);
    expect(wrapper.find("#search-button").text()).toBe("Search");
  })
})