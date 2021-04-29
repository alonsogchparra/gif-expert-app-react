import { shallow } from "enzyme";
import React from "react";
import AddCategory from "../../components/AddCategory";

describe("Test on AddCategory", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should show AddCategory correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should text box change", () => {
    const input = wrapper.find("input");
    const value = "Hello World";

    input.simulate("change", { target: { value } });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("input").prop("value")).toBe(value);
  });

  test("should not submit when text box is empty", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should submit post and call setCategories", () => {
    const input = wrapper.find("input");
    const value = "El Camino";

    input.simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toBeCalledWith(expect.any(Function));
  });
});
