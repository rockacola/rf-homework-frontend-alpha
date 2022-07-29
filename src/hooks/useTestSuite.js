import { useTestSuites } from "./useTestSuites";

export const useTestSuite = (id) => {
  const testSuites = useTestSuites();
  return testSuites.find((ts) => ts.id === id);
};
