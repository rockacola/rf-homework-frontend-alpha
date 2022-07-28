import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTestSuites } from "../endpoints/api";
import { TestSuiteRow } from "./TestSuiteRow";

export const TestSuites = () => {
  // Fetch data
  // Detect if data is ready
  // Render line by line

  const [testSuites, setTestSuites] = useState([]);

  useEffect(() => {
    console.log("TestSuites onmount");

    const act = async () => {
      const res = await getTestSuites();
      setTestSuites(res);
    };
    act();
  }, []);

  // TODO: have a hydrating state
  return (
    <div>
      <div>TestSuites. count: {testSuites.length}</div>
      <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        <Link to="/test_suites/create">[Create New]</Link>
      </div>
      <div>
        <table border="1" cellspacing="0" cellpadding="0">
          <thead>
            <th style={{ width: "50px" }}></th>
            <th style={{ width: "250px" }}>Name</th>
            <th style={{ width: "450px" }}>Count</th>
            <th></th>
          </thead>
          <tbody>
            {testSuites.map((ts) => (
              <TestSuiteRow testSuite={ts} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
