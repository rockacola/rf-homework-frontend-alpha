import React, { useEffect, useState } from "react";

export const TestSuiteForm = ({ testSuite }) => {
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

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: sanitize
    // TODO: validate
    // TODO: submission

    setIsSubmitting(true);
  };

  if (isSubmitting) {
    return <pre>{JSON.stringify(formData, null, 2)}</pre>;
  }

  return (
    <div>
      <h1>{heading}</h1>
      <form onSubmit={onSubmit}>
        {!!testSuite && <div>ID: {testSuite.id}</div>}
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
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

        <div style={{ marginTop: "20px" }}>
          <input type="submit" value={submitButtonLabel} />
        </div>
      </form>
    </div>
  );
};
