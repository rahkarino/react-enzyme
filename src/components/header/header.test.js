import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findByDataTest} from '../../Utils'

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it("It should render one header tag", () => {
    const headerComponent = findByDataTest(component, "header-component");
    expect(headerComponent.length).toBe(1); // number of elements with class of header-component should be 1
  });
  it("It should render one logo image", () => {
    const logoImg = findByDataTest(component, "logo");
    expect(logoImg.length).toBe(1); // number of image logo should be 1
  });
});

// describe("Header Component", () => {
//   const component = shallow(<Header />);
//   it("It should render one header tag", () => {
//     const headerComponent = component.find(".header-component");
//     expect(headerComponent.length).toBe(1); // number of elements with class of header-component should be 1
//   });
//   it("It should render one logo image", () => {
//     const logoImg = component.find("img.logo");
//     expect(logoImg.length).toBe(1); // number of image logo should be 1
//   });
// });
