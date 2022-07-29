import { useEffect, useState } from "react";
import { getTestSuites } from "../endpoints/api";

export const useTestSuites = () => {
  const [testSuites, setTestSuites] = useState([]);

  useEffect(() => {
    const act = async () => {
      const res = await getTestSuites();
      setTestSuites(res);
    };
    act();
  }, []);

  return testSuites;
};
