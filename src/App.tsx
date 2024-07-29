import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
