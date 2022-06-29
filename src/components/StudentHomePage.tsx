import React, { useState, useEffect } from "react";
import MyCarousel from "./MyCarousel";
import MyNavBar from "./MyNavBar";
import { useNavigate } from "react-router-dom";
import { RegistrationInterface } from "../types/RegistrationInterface";

function StudentHomePage() {
  const navigate = useNavigate();
  // const [select, setSelect] = useState(false);

  const [currentUser, setCurrentUser] = useState<RegistrationInterface | null>(
    null
  );
  // const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  // ==========================================
  // useEffect(() => {
  //   if (!localStorage.getItem("jwtToken")) {
  //     navigate("/");
  //   } else {
  //     setIsLoaded(true);
  //   }
  // }, []);

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

  // ==========================================
  // const handleChatChange = (chat) => {
  //   setCurrentChat(chat);
  // };
  return (
    <div>
      <MyNavBar data={currentUser} />
      <MyCarousel />
    </div>
  );
}

export default StudentHomePage;
