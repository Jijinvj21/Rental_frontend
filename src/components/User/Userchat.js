import React, { useEffect, useRef, useState } from "react";
import Modal from "../Table/Modal";
import axios from "../../instance/axios";
import Messages from "../chat/Messages";
import { io } from "socket.io-client";

function Userchat() {
  const [message, setMessage] = useState();
  const [conversationId, setConversationId] = useState();
  const [newMessage, setNewMessage] = useState();
  const scrollRef = useRef(null);
  const socket = useRef();
  const [arrivalMsg, setArrivelMsg] = useState(null);
  const userData = localStorage.getItem("userData");
  const data = JSON.parse(userData);

  useEffect(() => {
    socket.current = io('ws://localhost:9000');
    socket.current.on("getMessage", ({ senderId, message, sender }) => {
      setArrivelMsg({
        senderId,
        message,
        sender,
        date: Date.now(),
      });
    });
  }, []);
  
  useEffect(() => {
    if (arrivalMsg) {
      setMessage((prev) => {
        if (Array.isArray(prev)) {
          return [
            ...prev,
            { sender: arrivalMsg.sender, text: arrivalMsg.message },
          ];
        } else {
          return [{ sender: arrivalMsg.sender, text: arrivalMsg.message }];
        }
      });
    }
  }, [arrivalMsg]);
  

  useEffect(() => {
    socket.current.emit("addUser", { userId: data?._id, role: "user" });
  
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  const handleChat = () => {
    axios
      .post("/chat/newConversation", {
        userId: data?._id,
        adminId: "63a1e1dd25d76e188ff8c157",
      })
      .then((response) => {
        setConversationId(() => response.data.conversationId);

        if (response.data.conversationId) {
          axios
            .post("/chat/getMessage", {
              conversationId: response.data.conversationId,
              userId: data?._id,
            })
            .then((response) => {
              setMessage(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //socket
    socket.current.emit("send-message", {
      
      userId: data?._id,
      message: newMessage,
      sender: "user",
    });

    axios
      .post("/chat/addMessage", {
        conversationId: conversationId,
        sender: data?._id,
        text: newMessage,
      })
      .then((response) => {
        axios
          .post("/chat/getMessage", {
            conversationId: conversationId,
            userId: data?._id,
          })
          .then((response) => {
            setMessage(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const chatButton = () => {
    return (
      <div
        onClick={handleChat}
        className=" flex justify-center items-center z-30 fixed bottom-20 right-10 rounded-full   shadow shadow-[#182124] bg-boxColor w-10 h-10 md:w-20 md:h-20 text-center "
      >
        <svg
          className="md:h-12 md:w-12 h-6 w-6 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth=".5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />{" "}
          <line x1="8" y1="9" x2="16" y2="9" />{" "}
          <line x1="8" y1="13" x2="14" y2="13" />
        </svg>
      </div>
    );
  };

  const messages = () => {
    return (
      <div className="w-full">
        <div className="overflow-auto h-[500px]  md:h-[500px] m-5  scrollbar scrollbar-thumb-bgColor scrollbar-thumb-rounded-full scrollbar-w-3 ">
          {message
            ? message.map((data) => {
                return (
                  <div ref={scrollRef}>
                    <Messages Messages={data} own={!data.admin} />
                  </div>
                );
              })
            : ""}
        </div>

        <div className="flex justify-center">
          <textarea
            onChange={(e) => setNewMessage(e.target.value)}
            className="h-14 w-1/2  resize-none outline-none text-xs md:text-sm    bg-bgColor rounded-xl p-2 scrollbar scrollbar-thumb-boxColor scrollbar-thumb-rounded-full scrollbar-w-3 "
            placeholder="Write something..."
            type="text"
          />
          <button
            onClick={handleSubmit}
            className="bg-bgColor rounded-xl my-2 px-2 mx-1  md:pt-1 md:m-2 md:px-3    text-xs md:text-sm "
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Modal modal={messages()} close={false} button={chatButton()} />
    </div>
  );
}

export default Userchat;




