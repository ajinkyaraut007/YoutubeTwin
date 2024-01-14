import { useEffect, useRef, useState } from "react";
import { profile_img } from "../Constants";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName } from "../utils/nameGenerator";
import { messageGenerator } from "../utils/messageGenerator";

function LiveChat() {
  const Dispatch = useDispatch();

  const message = useSelector((store) => store.chat.chatMessage);

  const [commentMsg, setCommentMsg] = useState("");

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      Dispatch(
        addMessage({
          name: generateRandomName(),
          text: messageGenerator(),
        })
      );
      scrollToBottom();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function scrollToBottom() {
    // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }

  function handleSend(e) {
    e.preventDefault();
    Dispatch(
      addMessage({
        name: "Ajinkya",
        text: commentMsg,
      })
    );
    setCommentMsg("");
  }

  function handleCommentChange(e) {
    setCommentMsg(e.target.value);
  }

  return (
    <div className="p-4 border m-4 w-auto ">
      <h1 className="border-b mb-2">Live Chat</h1>
      <div
        ref={scrollRef}
        className="overflow-y-auto h-96 border-b mb-4 pb-2 flex flex-col-reverse"
      >
        {message.map((msg, Index) => {
          return <ChatMessage key={Index} name={msg.name} text={msg.text} />;
        })}
      </div>

      <form className="flex" onSubmit={(e) => handleSend(e)}>
        <input
          className="mr-4 w-full border px-2"
          type="text"
          value={commentMsg}
          onChange={(e) => handleCommentChange(e)}
        />
        <button className="bg-gray-200 hover:bg-gray-400 p-1">Send</button>
      </form>
    </div>
  );
}

export default LiveChat;
