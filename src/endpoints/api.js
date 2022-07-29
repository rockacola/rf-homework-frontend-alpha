export const getTestSuites = async () => {
  console.log("[API] getTestSuites triggered/");
  const url = "http://localhost:3456/test_suites"; // TODO: dynamic domain based on environment
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
