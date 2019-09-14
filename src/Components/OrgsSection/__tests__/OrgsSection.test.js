import React from "react";
import { shallow } from "enzyme";
import { OrgsSection } from "../OrgsSection";
import {
  Paper,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  org1,
  org2,
} from "../../../__mocks__/responses";

let wrapper;

describe("OrgsSection", () => {
  it("should show empty list of user's organisation", () => {
    const orgsList = [];
    wrapper = shallow(<OrgsSection orgs={orgsList}/>)
    const paper = wrapper.find(Paper);
    const ListItems = paper.find(ListItem);
    expect(ListItems.length).toBe(0);
    expect(paper.children().at(1).text()).toBe("No organisation");
  });

  it("should show list of user's organisations", () => {
    const orgsList = [org1, org2];
    wrapper = shallow(<OrgsSection orgs={orgsList}/>)
    const ListItems = wrapper.find(Paper).find(ListItem);
    expect(ListItems.length).toBe(2);
    expect(ListItems.find(ListItemText).at(0).props().primary).toBe(`1 ${org1.name}`);
    expect(ListItems.find(ListItemText).at(1).props().primary).toBe(`2 ${org2.name}`);
  });
});