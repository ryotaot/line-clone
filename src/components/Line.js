import React, { use, useEffect, useState } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase.js";
import SendMessage from "./SendMessage";

const Line = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoULR, uid }) => (
          <div>
            <div key={id}>
              <img src={photoULR} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default Line;
