import React from "react";
import { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    const { photoURL, uid } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            placeholder="メッセージを入力"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
