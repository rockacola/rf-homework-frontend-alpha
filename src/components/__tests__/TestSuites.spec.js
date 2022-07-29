import React from "react";
import renderer from "react-test-renderer";
import { TestSuites } from "../TestSuites";

describe("TestSuites", () => {
  let comp, props;

  describe("when empty", () => {
    beforeEach(() => {
      props = { testSuites: [] };
      comp = renderer.create(<TestSuites {...props} />);
    });

    it("renders", () => {
      expect(comp).toMatchSnapshot();
    });
  });
});
