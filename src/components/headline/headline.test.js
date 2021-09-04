import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";
import { findByDataTest } from "../../Utils";

const setup = (props = {}) => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};

describe("HeadLine Component", () => {
  describe("have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setup(props);
    });
    it('Should render without errors!', () => {
        const component = findByDataTest(wrapper, "headline-component")
        expect(component.length).toBe(1)
    })
    it('Should render a H1', () => {
        const h1 = findByDataTest(wrapper, "header")
        expect(h1.length).toBe(1)
    })
    it('Should render a DESC', () => {
        const desc = findByDataTest(wrapper, "desc")
        expect(desc.length).toBe(1)
    })
  });
  describe("have NO props", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = setup()
      });
      it('Should not render', () => {
        const component = findByDataTest(wrapper, "headline-component")
        expect(component.length).toBe(0)
      })
  });
});
