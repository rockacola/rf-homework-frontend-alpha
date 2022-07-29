import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { TestSuiteRow } from "../TestSuiteRow";

describe("TestSuiteRow", () => {
  let comp, props;

  beforeEach(() => {
    props = {
      testSuite: {
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
    };
    comp = renderer.create(
      <MemoryRouter>
        <TestSuiteRow {...props} />
      </MemoryRouter>
    );
  });

  it("renders", () => {
    expect(comp).toMatchSnapshot();
  });
});
