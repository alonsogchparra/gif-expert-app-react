import { shallow } from "enzyme";
import React from "react";
import App from "../App";

describe("Test on App", () => {
  let wrapper = shallow(<App />);

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("should show App correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a list of categories", () => {
    const categories = ["breaking bad", "better call saul"];
    wrapper = shallow(<App defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });

  test("should check if AddCategory component exist", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("AddCategory").exists()).toBe(true);
  });
});
