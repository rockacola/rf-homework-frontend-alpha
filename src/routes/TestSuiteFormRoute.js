import React from "react";
import { Link, useParams } from "react-router-dom";
import { TestSuiteForm } from "../components/TestSuiteForm";
import { useTestSuite } from "../hooks/useTestSuite";

export const TestSuiteFormRoute = () => {
  const params = useParams();
  const testSuiteId = parseInt(params.id, 10);
  const targetTestSuite = useTestSuite(testSuiteId);

  return (
    <div>
      <Link to="/">[Go Back]</Link>
      <TestSuiteForm testSuite={targetTestSuite} />
    </div>
  );
};
