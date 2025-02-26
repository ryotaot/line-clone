import React, { use, useEffect, useState } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../firebase.js";
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
        {messages.map(({ id, text, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              {" "}
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage style={{ color: "#7AC2FF", marginLeft: "20px" }} />
    </div>
  );
};

export default Line;
