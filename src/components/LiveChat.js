import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("Api Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(15),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="ml-2 h-[500px] p-2  border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse  ">
      {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
