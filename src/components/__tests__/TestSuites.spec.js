import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { TestSuites } from "../TestSuites";

describe("TestSuites", () => {
  let comp, props;

  beforeEach(() => {
    props = {
      testSuites: [
        {
          id: 19,
          test_suite_name: "Suite Coffee Brown Log",
          test_plans: [
            {
              test_name: "Test Plan Forget Beat Tent",
              browser: "firefox",
              instruction_count: 4,
            },
          ],
        },
      ],
    };
    comp = renderer.create(
      <MemoryRouter>
        <TestSuites {...props} />
      </MemoryRouter>
    );
  });

  it("renders", () => {
    expect(comp).toMatchSnapshot();
  });

  describe("when empty", () => {
    beforeEach(() => {
      props = { testSuites: [] };
      comp = renderer.create(
        <MemoryRouter>
          <TestSuites {...props} />
        </MemoryRouter>
      );
    });

    it("renders", () => {
      expect(comp).toMatchSnapshot();
    });
  });
});
