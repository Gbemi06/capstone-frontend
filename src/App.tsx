import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentHomePage from "./components/StudentHomePage";
import MyNavBar from "./components/MyNavBar";
import TeachersHomePage from "./components/TeachersHomePage";
import AdminHomePage from "./components/AdminHomePage";

function App() {
  return (
    <BrowserRouter>
      {/* <MyNavBar /> */}
      <Routes>
        {/* <Route path="/" element={<MyNavBar />} /> */}
        <Route path="/Admin" element={<AdminHomePage />} />
        <Route path="/Teacher" element={<TeachersHomePage />} />
        <Route path="/Student" element={<StudentHomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
