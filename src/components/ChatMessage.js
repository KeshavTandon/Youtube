import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center  p-2">
      <img
        className="h-6"
        alt="user-icon"
        src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
