import React from "react";
import { shallow } from "enzyme";
import { SearchBar } from "../SearchBar";

describe("Search Bar", () => {
  it("should have a search button", () => {
    let wrapper = shallow(
      <SearchBar/>,
    );
    expect(wrapper.find("#search-button").length).toBe(1);
    expect(wrapper.find("#search-button").text()).toBe("Search");
  })
})