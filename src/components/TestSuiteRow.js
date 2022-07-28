import React, { useState } from "react";
import { Link } from "react-router-dom";

export const TestSuiteRow = ({ testSuite }) => {
  const [showDetails, setShowDetails] = useState(false);

  const onClick = () => {
    setShowDetails(!showDetails);
  };

  const chevron = showDetails ? "▼" : "▶";
  return (
    <>
      <tr
        data-test-suite-id={testSuite.id}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <td>{chevron}</td>
        <td>{testSuite.test_suite_name}</td>
        <td style={{ textAlign: "right" }}>
          {testSuite.test_plans.length} tests
        </td>
        <td style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <Link to={`/test_suites/${testSuite.id}/edit`}>[Edit]</Link>
        </td>
      </tr>

      {showDetails && (
        <tr>
          <td colspan="4">
            <table border="0" cellspacing="0" cellpadding="0">
              <tbody>
                {testSuite.test_plans.map((tp) => {
                  return (
                    <tr>
                      <td style={{ width: "150px" }}></td>
                      <td style={{ width: "350px" }}>{tp.test_name}</td>
                      <td style={{ width: "150px" }}>{tp.browser}</td>
                      <td style={{ width: "50px" }}>{tp.instruction_count}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};
