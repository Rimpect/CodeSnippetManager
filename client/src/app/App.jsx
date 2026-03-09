import DashboardPage from "../pages/DashboardPage/DashboardPage";
import CodeEditor from "../widgetes/CodeEditor/CodeEditor";
import "./styles/style.scss";
import LayoutWithNavigate from "./LayoutWithNavigate";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route element={<LayoutWithNavigate />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/editor/:id" element={<CodeEditor />} />
      </Route>
    </Routes>
  );
}

export default App;
CodeEditor;
