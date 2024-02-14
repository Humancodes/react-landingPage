import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import AddNew from "./pages/AddNew/AddNew";
import JoinIn from "./pages/JoinIn/JoinIn";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<JoinIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<JoinIn />} />
            <Route path="/add-new" element={<AddNew />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
