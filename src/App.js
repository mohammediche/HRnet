import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import EmployeeList from "./pages/EmployeeList/EmployeeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<CreateEmployee />}></Route>
          <Route path="/employee-list" element={<EmployeeList />}></Route>
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
