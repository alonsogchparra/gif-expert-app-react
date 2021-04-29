import { shallow } from "enzyme";
import React from "react";
import GifGridItem from "../../components/GifGridItem";

describe("test on GifGridItem", () => {
  const id = "ADBD3232";
  const title = "a title";
  const url = "https://localhost/anything";

  const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);

  test("should show GifGridItem correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should has h4 the title content", () => {
    expect(wrapper.find("h4").text().trim()).toBe(title);
  });

  test("should have the src equal to url and alt equal to title", () => {
    const image = wrapper.find("img");

    expect(image.prop("src")).toBe(url);
    expect(image.prop("alt")).toBe(title);
  });

  test("should have animate__fadeIn on className", () => {
    const div = wrapper.find("div").at(1);

    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
