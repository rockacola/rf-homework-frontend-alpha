import { Route, Routes } from "react-router-dom";
import { TestSuiteForm } from "./components/TestSuiteForm";
import { TestSuites } from "./components/TestSuites";

function App() {
  /**
   * TODO: Have the loading of the test suites here.
   * Going forward, there should be a routes component for `/test_suites/*` to handle data loading.
   */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TestSuites />} />
        <Route path="/test_suites/create" element={<TestSuiteForm />} />
        <Route path="/test_suites/:id/edit" element={<TestSuiteForm />} />
      </Routes>
    </div>
  );
}

export default App;
