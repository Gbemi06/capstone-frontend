import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationInterface } from "../types/RegistrationInterface";
import MyNavBar from "./MyNavBar";
import PostCourse from "./PostCourse";

function AdminHomePage() {
  const navigate = useNavigate();
  // const [select, setSelect] = useState(false);

  const [currentUser, setCurrentUser] = useState<RegistrationInterface | null>(
    null
  );

  useEffect(() => {
    fetchUserData();
  }, []);
  // ==================FETCH========================
  const fetchUserData = async () => {
    const response = await fetch("http://localhost:4002/users/register/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    });

    if (response.ok) {
      const data = (await response.json()) as RegistrationInterface;
      console.log(data);
      setCurrentUser(data);
    }
  };
  return (
    <div>
      AdminHomePage
      <MyNavBar currentUser={currentUser} />
      <div>You are logged in as a {currentUser?.role}</div>
    </div>
  );
}

export default AdminHomePage;
