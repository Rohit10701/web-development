"use client";
import database from "@/utils/firebaseConfig";
import { onValue, push, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";



const ChatApp = () => {
  const patientId = localStorage.getItem("patientId");
  const [recentChatData, setRecentChatData] = useState(null);
  function writeUserData() {
    const update = {
      ...recentChatData, 
      "65a0306bccc161964528234e" : {
        id : "65a0306bccc161964528234e"
      }
    }
    set(
      ref(database, "recentchat/" + patientId),
      update
    );
  }
  const handleMoifyData = (e) => {
    e.preventDefault();
    writeUserData();
  };

  useEffect(() => {
    const recentChatRef = ref(database, "recentchat/" + patientId);
    onValue(recentChatRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setRecentChatData(data);
    });
  }, [patientId]);

  return <button onClick={(e) => handleMoifyData(e)}>Click Me</button>;
};

export default ChatApp;
