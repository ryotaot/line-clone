import React from "react";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <form>
        <div className="sendMsg">
          <input placeholder="メッセージを入力" type="text" />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
