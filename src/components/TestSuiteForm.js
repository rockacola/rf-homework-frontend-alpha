import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TestSuiteForm = () => {
  const params = useParams();
  const testSuiteId = params.id;
  const heading = !!testSuiteId ? "Edit Test Suite" : "Create Test Suite";
  const submitButtonLabel = !!testSuiteId ? "Submit Change" : "Create";

  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log("foo. testSuiteId:", testSuiteId);
  }, [testSuiteId]);

  const onChange = (e) => {
    console.log("onChange triggered. e:", e);
    // const mutatedFormData = {
    //   ...formData,
    //   test_suite_name: e.target.test_suite_name,
    // };
    const mutatedFormData = {
      ...e.target,
    };
    setFormData(mutatedFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit triggered. e:", e);

    // TODO: sanitize
    // TODO: validate
    // TODO: submission
  };

  return (
    <div>
      <h1>{heading}</h1>
      <form onSubmit={onSubmit}>
        {!!testSuiteId && <div>ID: {testSuiteId}</div>}
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label for="test_suite_name">Name: </label>
          <input
            type="text"
            id="test_suite_name"
            name="test_suite_name"
            value={formData.test_suite_name}
            onChange={onChange}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <input type="submit" value={submitButtonLabel} />
        </div>
      </form>
    </div>
  );
};
