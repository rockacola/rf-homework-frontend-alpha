import React from "react";
import { TestSuiteRow } from "./TestSuiteRow";

export const TestSuites = ({ testSuites }) => {
  // TODO: have a hydrating state
  return (
    <table border="1" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th style={{ width: "50px" }}></th>
          <th style={{ width: "250px" }}>Name</th>
          <th style={{ width: "450px" }}>Count</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {testSuites.map((ts) => (
          <TestSuiteRow key={ts.id} testSuite={ts} />
        ))}
      </tbody>
    </table>
  );
};
