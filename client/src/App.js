import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import AllPhones from "./pages/allPhones";
import PhoneInfo from "./pages/phoneInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPhones />} />
        <Route path="/:id" element={<PhoneInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
