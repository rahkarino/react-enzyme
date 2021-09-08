import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByDataTest } from "../../Utils";
import ListItem from "./index";

describe("ListItem component", () => {
  describe("Checking prop-types", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        title: "sample text",
        desc: "some text",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "sample text",
        desc: "some text",
      };
      component = shallow(<ListItem {...props} />);
    });
    it("Should render without error", () => {
      const listItem = findByDataTest(component, "listItemComponent");
      expect(listItem.length).toBe(1);
    });
    it("Should render a title", () => {
      const title = findByDataTest(component, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a description", () => {
      const desc = findByDataTest(component, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Should NOT render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('Component is NOT rendered', () => {
        const component = findByDataTest(wrapper, 'listItemComponent')
        expect(component.length).toBe(0)
    })
  });
});
