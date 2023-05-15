import React, { useEffect, useRef, useState } from "react";
import axios from "../../instance/axios";
import { chatSchema } from "../../validation/validation";
import { io } from "socket.io-client";

import Conversation from "./Conversation";
import Modal from "../Table/Modal";
import Messages from "./Messages";
import { toast } from "react-toastify";

function Chat() {
  const admin = localStorage.getItem("admin");

  const [conversationId, setConversationId] = useState();
  const [users, setUsers] = useState([]);
  // const [socket, setSocket] = useState(null)
  const [currentChat, setCurrentChat] = useState({
    userId: null,
  });
  const [newMessage, setNewMessage] = useState();
  const scrollRef = useRef(null);
  const socket = useRef();
  const [arrivalMsg, setArrivelMsg] = useState(null);
  const [msg, setMsg] = useState([]);
  const [userId, setUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, [msg]);
  socket.current?.on("getMessage", ({ senderId, message, sender }) => {
    
    if (senderId === userId ? userId : currentChat.userId)
      setArrivelMsg({
        senderId,
        text: message,
        sender,
        date: Date.now(),
      });
  });

  useEffect(() => {
    // socket.current = io("ws://localhost:9000");
    socket.current = io("https://rental-api.jijinvj.tech");
  }, [userId]);
  useEffect(() => {
    arrivalMsg && setMsg((prev) => [...prev, arrivalMsg]);
  }, [arrivalMsg, conversationId]);

  useEffect(() => {
    socket.current.emit("addUser", { role: "admin" });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [msg]);
  const handleUsers = () => {
    axios
      .post("/chat/getusers", { admin })
      .then((response) => {
        setUsers(() => response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function modalClose(id) {
    setUserId(id);
    axios
      .post("chat/newConversation", {
        userId: id ? id : currentChat.userId,
      })
      .then((response) => {
        setConversationId(response.data.conversationId);
        axios
        .post("chat/getMessage", {
          conversationId: response.data.conversationId,
          userId: id ? id : currentChat.userId,
        })
        .then((response) => {
          setCurrentChat({
            ...currentChat,
            userId: id ? id : currentChat.userId,
          });
          setMsg(response.data);
        })
        .catch((error) => {
          console.error(error);
        });


      })
      .catch((error) => {
        console.error(error);
      });
    
  }

  function userList() {
    return !msg.length ? (
      <button
        onClick={handleUsers}
        className="bg-bgColor mx-auto pl-2 pr-2 w-1/2 md:w-1/5  md:h-12 rounded-full flex justify-center items-center"
      >
        User's{" "}
        <svg
          class="h-6 w-6 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" />
        </svg>
      </button>
    ) : (
      ""
    );
  }

  function user() {
    return (
      <div className=" md:-mt-10 w-full  md:overflow-hidden scrollbar scrollbar-thumb-boxColor scrollbar-thumb-rounded-full scrollbar-w-3  ">
        <div className="  rounded-2xl     ">
          <div className="overflow-auto h-[500px] md:h-[500px] lg:h-[540px]   scrollbar scrollbar-thumb-bgColor scrollbar-thumb-rounded-full scrollbar-w-3 ">
            {users?.map((data) => {
              return (
                <>
                  <Conversation close={modalClose} userList={data} />
                </>
              );
            })}
          </div>
      
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    chatSchema
      .validate({ inputField: newMessage })
      .then(async (data) => {
        //socket
        socket.current.emit("send-message", {
          userId: currentChat.userId,
          message: newMessage,
          sender: "admin",
        });

        axios
          .post("/chat/addMessage", {
            conversationId: conversationId,
            sender: currentChat.userId,
            admin: "63a1e1dd25d76e188ff8c157",
            text: newMessage,
          })
          .then((response) => {
            setUsers(() => [response.data]);
            modalClose();
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        toast(`${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center w-3/4 md:w-1/2 mx-auto my-auto h-screen">
      <div
        className={
          msg
            ? "w-full bg-boxColor m-5 rounded-3xl overflow-auto h-[800px]  lg:h-[830px]"
            : "w-full bg-boxColor m-5 rounded-3xl overflow-auto h-[200px]  lg:h-[230px]"
        }
      >
        <div className="m-5">
          <Modal
            modal={user()}
            button={userList()}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </div>
        {msg.length ? (
          <>
            <div className="overflow-auto h-[600px]  lg:h-[620px]  m-5  scrollbar scrollbar-thumb-bgColor scrollbar-thumb-rounded-full scrollbar-w-3 ">
              {
                msg
                  ? msg?.map((data) => {
                      if (data.sender !== "admin") {
                        return (
                          <div ref={scrollRef}>
                            <Messages
                              Messages={data}
                              userData={"chatUserData"}
                              own={data.admin !== "63a1e1dd25d76e188ff8c157"}
                            />
                          </div>
                        );
                      }

                      return null;
                    })
                  : ""
                // })
              }
            </div>
            <div className="flex justify-center">
              <textarea
                onChange={(e) => setNewMessage(e.target.value)}
                className="h-20 w-1/2  resize-none outline-none text-xs md:text-sm    bg-bgColor rounded-xl p-2 scrollbar scrollbar-thumb-boxColor scrollbar-thumb-rounded-full scrollbar-w-3 "
                placeholder="Write something..."
                type="text"
              />
              <button
                onClick={handleSubmit}
                className="bg-bgColor rounded-xl m-1 px-1  md:pt-1 md:m-2 md:px-3    text-xs md:text-sm "
              >
                SUBMIT
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-3/4 ">
            <h1 className="text-center text-2xl md:text-3xl m-3">
              Open a conversation to start a chat
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
