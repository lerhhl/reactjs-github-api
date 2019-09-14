import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ReposSection } from "../ReposSection";
import {
  Paper,
  ListItem,
  ListItemText,
} from "@material-ui/core";

let wrapper;

describe("ReposSection", () => {
  it("should show empty list of user repos", () => {
    const reposList = [];
    wrapper = shallow(<ReposSection repos={reposList}/>)
    const paper = wrapper.find(Paper);
    const ListItems = paper.find(ListItem);
    expect(ListItems.length).toBe(0);
    expect(paper.children().at(1).text()).toBe("No repos")
  })

  it("should show list of user repos", () => {
    const reposList = [
      {
        name: "repo1",
        html_url: "repo1_html_url"
      },
      {
        name: "repo2",
        html_url: "repo2_html_url"
      },
    ];
    wrapper = shallow(<ReposSection repos={reposList}/>)
    const ListItems = wrapper.find(Paper).find(ListItem);
    expect(ListItems.length).toBe(2);
    expect(ListItems.find(ListItemText).at(0).props().primary).toBe(`1 ${reposList[0].name}`);
    expect(ListItems.find(ListItemText).at(1).props().primary).toBe(`2 ${reposList[1].name}`);
  });
})