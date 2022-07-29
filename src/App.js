import { Route, Routes } from "react-router-dom";
import { TestSuiteFormRoute } from "./routes/TestSuiteFormRoute";
import { TestSuitesRoute } from "./routes/TestSuitesRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TestSuitesRoute />} />
        <Route path="/test_suites/create" element={<TestSuiteFormRoute />} />
        <Route path="/test_suites/:id/edit" element={<TestSuiteFormRoute />} />
      </Routes>
    </div>
  );
}

export default App;
