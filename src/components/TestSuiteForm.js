import React, { useEffect, useState } from "react";

export const TestSuiteForm = ({ testSuite }) => {
  console.log("testSuite:", testSuite);
  const heading = !!testSuite ? "Edit Test Suite" : "Create Test Suite";
  const submitButtonLabel = !!testSuite ? "Submit Change" : "Create";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!!testSuite) {
      setFormData(testSuite);
    }
  }, [testSuite]);

  const onChange = (e) => {
    const mutatedFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(mutatedFormData);
  };

  const onTestPlanChange = (index, mutatedTestPlan) => {
    let mutatedTestPlans = [];
    if (mutatedTestPlan === null) {
      // Remove item
      mutatedTestPlans = formData.test_plans.filter((tp, i) => i !== index);
    } else {
      // Modify item
      mutatedTestPlans = formData.test_plans.map((tp, i) =>
        i === index ? mutatedTestPlan : tp
      );
    }

    const mutatedFormData = {
      ...formData,
      test_plans: mutatedTestPlans,
    };
    setFormData(mutatedFormData);
  };

  const onTestPlanCreate = () => {
    const mutatedFormData = {
      ...formData,
      test_plans: [
        ...formData.test_plans,
        // TODO: should I give it default values like that?
        {
          test_name: "",
          browser: "firefox",
          instruction_count: 0,
        },
      ],
    };
    setFormData(mutatedFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: validate & error message support
    setIsSubmitting(true);
  };

  if (isSubmitting) {
    console.log("Submitting:");
    console.log(JSON.stringify(formData));
    return <pre>{JSON.stringify(formData, null, 2)}</pre>;
  }

  return (
    <div>
      <h1>{heading}</h1>
      <form onSubmit={onSubmit}>
        {!!testSuite && <div>ID: {testSuite.id}</div>}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="test_suite_name">Name: </label>
          <input
            type="text"
            id="test_suite_name"
            name="test_suite_name"
            value={formData.test_suite_name}
            onChange={onChange}
            style={{ width: "300px" }}
          />
        </div>

        <h4>Test Plans</h4>
        <div style={{ marginLeft: "10px" }}>
          {!!formData.test_plans &&
            formData.test_plans.map((tp, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "20px",
                  border: "solid 1px #aaa",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <label>Name: </label>
                  <input
                    type="text"
                    value={tp.test_name}
                    onChange={(e) =>
                      onTestPlanChange(index, {
                        ...tp,
                        test_name: e.target.value,
                      })
                    }
                    style={{ width: "200px" }}
                  />
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label>Browser: </label>
                  <select
                    onChange={(e) =>
                      onTestPlanChange(index, {
                        ...tp,
                        browser: e.target.value,
                      })
                    }
                  >
                    <option
                      value="firefox"
                      selected={tp.browser === "firefox" ? "selected" : false}
                    >
                      Firefox
                    </option>
                    <option
                      value="chrome"
                      selected={tp.browser === "chrome" ? "selected" : false}
                    >
                      Chrome
                    </option>
                    <option
                      value="safari"
                      selected={tp.browser === "safari" ? "selected" : false}
                    >
                      Safari
                    </option>
                    <option
                      value="edge"
                      selected={tp.browser === "edge" ? "selected" : false}
                    >
                      Edge
                    </option>
                  </select>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <label>Instruction Count: </label>
                  <input
                    type="text"
                    value={tp.instruction_count}
                    onChange={(e) =>
                      onTestPlanChange(index, {
                        ...tp,
                        // TODO: prefer to validating it rather than auto sanitizing it
                        instruction_count: parseInt(e.target.value, 10),
                      })
                    }
                    style={{ width: "200px" }}
                  />
                </div>

                <div>
                  <div
                    onClick={() => onTestPlanChange(index, null)}
                    style={{
                      display: "inline-block",
                      cursor: "pointer",
                      color: "crimson",
                    }}
                  >
                    [Remove]
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div style={{ marginLeft: "12px" }}>
          <div
            onClick={() => onTestPlanCreate()}
            style={{
              display: "inline-block",
              cursor: "pointer",
              color: "blue",
            }}
          >
            [Add Test Plan]
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: "#f1f1f1",
          }}
        >
          <input type="submit" value={submitButtonLabel} />
        </div>
      </form>
    </div>
  );
};
