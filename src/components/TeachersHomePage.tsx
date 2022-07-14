import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationInterface } from "../types/RegistrationInterface";
import MyNavBar from "./MyNavBar";
import PostCourse from "./PostCourse";

function TeachersHomePage() {
  // const navigate = useNavigate;

  const [currentUser, setCurrentUser] = useState<RegistrationInterface | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);

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
      <MyNavBar currentUser={currentUser} />
      <div>You are logged in as a {currentUser?.role}</div>
      TeachersHomePage
      <PostCourse />
    </div>
  );
}

export default TeachersHomePage;
