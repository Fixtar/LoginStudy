import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./routers/firstpage";
import Login from "./routers/login";
import Main from "./routers/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
