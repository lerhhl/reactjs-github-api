import React from "react";
import { shallow } from "enzyme";
import { OrgsSection } from "../OrgsSection";
import {
  Paper,
  ListItem,
} from "@material-ui/core";

let wrapper;

describe("OrgsSection", () => {
  it("should show empty list of user orgs", () => {
    const orgsList = [];
    wrapper = shallow(<OrgsSection orgs={orgsList}/>)
    const paper = wrapper.find(Paper);
    const ListItems = paper.find(ListItem);
    expect(ListItems.length).toBe(0);
    expect(paper.children().at(1).text()).toBe("No organisation")
  })
})