import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import { Topbar } from "./components/Topbar";
import { About } from "./components/About ";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="place-items-center grid bg-gray-100">
      <div className="max-w-screen-lg w-full">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
