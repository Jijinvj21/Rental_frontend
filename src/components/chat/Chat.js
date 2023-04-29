import React, { useEffect, useRef, useState } from 'react'
import axios from '../../instance/axios'


import Conversation from './Conversation'
import Search from '../Table/Search'
import Limit from '../Table/Limit'
import Pagination from '../Table/Pagination'
import Clear from '../Table/Clear'
import Modal from '../Table/Modal'
import Messages from './Messages'

function Chat() {
    const [conversationId ,setConversationId]=useState()
    const [users, setUsers] = useState([])
    const [close, setClose] = useState()
    const [currentChat, setCurrentChat] = useState({
        userChat: null,
        userId: null,
    })
    const [newMessage, setNewMessage] = useState()
    const scrollRef = useRef(null);
    useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [currentChat]);

    users.map((data) => {
        return (
            <>
                <Conversation close={modalClose} userList={data[0]} />
            </>
        );
    });

    const handleUsers = (() => {
        axios.post('/chat/getusers', { adminId: '63a1e1dd25d76e188ff8c157' })
            .then((response) => {
                setUsers(() => response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    })


    function modalClose(id, closeModal) {
        setClose(() => closeModal)

        axios.post('chat/newConversation', {
            userId:id ? id : currentChat.userId,
            adminId:"63a1e1dd25d76e188ff8c157",
            
        })
            .then((response) => {
              console.log(response);
              setConversationId(response.data.conversationId)
                axios.post('chat/getMessage', {
                    conversationId: response.data.conversationId,
                    userId: id ? id : currentChat.userId,
                    admin:'63a1e1dd25d76e188ff8c157'
                })
                    .then((response) => {
                        setCurrentChat({ ...currentChat, userChat: response.data, userId: id ? id : currentChat.userId })
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
        return (
            <button onClick={handleUsers} className='bg-bgColor mx-auto pl-2 pr-2 w-1/2 md:w-1/5  md:h-12 rounded-full'>
                User's
            </button>
        )
    }

    function user() {
        return (
            <div className=' md:-mt-10  md:overflow-hidden scrollbar scrollbar-thumb-boxColor scrollbar-thumb-rounded-full scrollbar-w-3  '>
                <div className='  rounded-2xl     '>
                    <div className=' flex md:flex-row flex-col w-full md:p-2 items-center justify-center'>
                        <Search color={'bgColor'} />
                        <div className='md:pt-5 -pt-5 '>
                            <Limit color={'bgColor'} />
                        </div>
                        <Clear style={{ style: 'text-xs md:text-md bg-bgColor md:mt-10 -mt-10 text-center  opacity-70  m-5 h-10  w-20 rounded-lg  focus:outline-none ' }} />
                    </div>

                    <div className='overflow-auto h-[500px] md:h-[500px] lg:h-[540px]   scrollbar scrollbar-thumb-bgColor scrollbar-thumb-rounded-full scrollbar-w-3 '>
                        {users?.map((data) => {
                            return (
                                <>
                                    <Conversation close={modalClose} userList={data[0]} />
                                </>
                            )
                        })
                        }
                    </div>
                    <div className='mt-2'>
                        <Pagination />
                    </div >
                </div>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/chat/addMessage', {
            conversationId: conversationId,
            sender: currentChat.userId,
            admin:'63a1e1dd25d76e188ff8c157',
            text: newMessage
        })
            .then((response) => {
                setUsers(() => [response.data])
                modalClose()
            })
            .catch((error) => {
                console.error(error);
            });
    }



    return (
        <div className='flex justify-center items-center mx-auto'>

            <div className={currentChat.userChat ? 'w-full bg-boxColor m-5 rounded-3xl overflow-auto h-[800px]  lg:h-[830px]' : 'w-full bg-boxColor m-5 rounded-3xl overflow-auto h-[200px]  lg:h-[230px]'}>
                <div className='m-5'>
                    <Modal close={close} modal={user()} button={userList()} />
                </div>
                {currentChat.userChat ?
                    <>
                        <div className='overflow-auto h-[600px]  lg:h-[620px]  m-5  scrollbar scrollbar-thumb-bgColor scrollbar-thumb-rounded-full scrollbar-w-3 '>
                            {
                                currentChat ? currentChat?.userChat?.map((data) => {
                                    console.log(data);
                                    return (
                                        <div ref={scrollRef}>
                                        <Messages Messages={data} userData={'chatUserData'} own={data.admin} />
                                        {/* data.sender === currentChat.userId || data.sender === currentChat.userId */}
                                        </div>
                                    )
                                }) : ''
                            }
                        </div>
                        <div className='flex justify-center'>
                            <textarea onChange={(e) => setNewMessage(e.target.value)} className="h-20 w-1/2  resize-none outline-none text-xs md:text-sm    bg-bgColor rounded-xl p-2 scrollbar scrollbar-thumb-boxColor scrollbar-thumb-rounded-full scrollbar-w-3 " placeholder='Write something...' type='text' />
                            <button onClick={handleSubmit} className='bg-bgColor rounded-xl m-1 px-1  md:pt-1 md:m-2 md:px-3    text-xs md:text-sm '  >SUBMIT</button>
                        </div>
                    </>
                    : <div className='flex justify-center items-center  '> <h1 className='text-center text-2xl md:text-3xl m-3'>Open a conversation to start a chat</h1> </div>}
            </div>
        </div>
    )
}

export default Chat