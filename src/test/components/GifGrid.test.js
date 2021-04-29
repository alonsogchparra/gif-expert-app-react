import { shallow } from "enzyme";
import React from "react";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test on GifGrid", () => {
  const category = "Breaking Bad";

  test("should show GifGrid correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show items when the images are loaded by useFetchGifs", () => {
    const gifs = [
      {
        id: "Abc",
        url: "https://locahosta/anything.jpg",
        title: "Anything",
      },
      {
        id: "Abc22",
        url: "https://locahosta/anything.jpg",
        title: "Anything",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("GifGridItem").exists()).toBe(true);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
