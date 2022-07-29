import React from "react";
import { Link } from "react-router-dom";
import { TestSuites } from "../components/TestSuites";
import { useTestSuites } from "../hooks/useTestSuites";

export const TestSuitesRoute = () => {
  const testSuites = useTestSuites();

  return (
    <div>
      <h1>
        List of Test Suites <small>(count: {testSuites.length})</small>
      </h1>
      <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        <Link to="/test_suites/create">[Create New]</Link>
      </div>
      <TestSuites testSuites={testSuites} />
    </div>
  );
};
