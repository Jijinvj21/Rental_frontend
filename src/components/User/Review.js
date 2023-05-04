import React, { Fragment, useEffect, useState } from "react";
import axios from "../../instance/axios";
import Modal from "../Table/Modal";
import ReactStar from "react-rating-stars-component";
import { toast } from "react-toastify";



function Review() {
  const [userReview, setUserReview] = useState();
  const [data, setData] = useState();
  const [star, setStar] = useState();
  const [id, setId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(true);
  };

  const review = () => {
    axios
      .post(`/review/getReviewOfUser`, {
        token: localStorage.getItem("user"),
      })
      .then((data) => {
        setUserReview(data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    review();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let rating = {
      starRating: star,
      review: data,
      id: id,
    };

    axios
      .post(`/review/editReview`, {
        rating,
      })
      .then((data) => {
        console.log(data);
        
        toast(`REVIEW EDITED`);
        

        review();
      })
      .catch((err) => {
        toast(`${err.response}`);

      });
  };

 
  const EditUserReview = (setdatafunction) => {
    return (
      <Fragment>
        <form
          onSubmit={handleSubmit}
          className="bg-boxColor flex flex-col w-full  justify-center items-center"
        >
          <h1 className="text-center -pt-10">POST YOUR REVIEW</h1>
          <div className="flex justify-center p-5">
            <ReactStar
              activeColor="#ffbe0c"
              value={star}
              size={40}
              count={5}
              onChange={(e) => setStar(e)}
            />
          </div>
          <h1 className=" -pt-10">Share more about your Expreance</h1>{" "}
          <textarea
            type="text"
            placeholder="Review"
            className=" w=full m-5 bg-bgColor p-2 rounded-lg"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button onClick={closeModal}  className="text-white      rounded-lg  shadow-lg      mt-6   bg-bgColor hover:bg-bgColor focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center  dark:bg-bgColor dark:hover:bg-[#30444a] dark:focus:ring-bgColor inline-flex items-center">
            SUBMIT
          </button>
        </form>
      </Fragment>
    );
  };
  return (
    <div className="container mx-auto p-6 font-mono  pt-20 rounded-lg ">
      <h1 className="text-center text-lg md:text-3xl">REVIEWS</h1>
      <div className="w-full mb-8  rounded-lg     ">

        {!userReview?
           <div className="flex  min-h-[600px]   justify-center items-center">
           <p className=" text-center "> NO DATA ARE AVAILABLE</p>
         </div>:
          <div className="w-full   overflow-auto    rounded-xl    ">
          <table className="w-full">
            <thead>
              <tr className="text-md  tracking-wide text-center  bg-boxColor uppercase border-b ">
                <th className="px-4 py-3">NAME </th>
                <th className="px-4 py-3">STAR </th>
                <th className="px-4 py-3">MESSAGE </th>
                <th className="px-4 py-3">EDIT </th>
                <th className="px-4 py-3">STATUS </th>
              </tr>
            </thead>
            {userReview?.map((data) => {
              const setdatafunction = () => {
                setData(data.message);
                setStar(data.stars);
                setId(data._id);
              };
              return (
                <tbody className="bg-boxColor border-b  ">
                  <td className=" text-center p-3">{data.product.name}</td>
                  <td className=" text-center p-3 ">
                    <div className="flex justify-center">
                      {Array.from({ length: data.stars }).map((_, index) => (
                        <svg
                          key={index}
                          className="h-3 w-3 ml-1 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </td>
                  <td className=" text-center p-3">{data.message}</td>
                  <td className=" text-center flex justify-center pt-3">
                    <Modal
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                      modal={EditUserReview(setdatafunction)}
                      button={
                        <button
                          onClick={() => setdatafunction()}
                          className=" bg-bgColor hover:bg-[#558081]/90  focus:outline-none focus:ring-[#558081]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#558081]/30 mr-2 mb-2 "
                        >
                          Edit
                        </button>
                      }
                    />
                  </td>
                  <td className=" text-center p-3">
                    <button
                      className=" focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2 "
                      onClick={() => {
                        axios
                          .post(`/review/deleteReview`, { id: data._id })
                          .then((responce) => {
                            review();
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      }}
                    >
                      {/* {data.status ? "Block" : "Unblock"} */}
                      <svg className="   h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                    </button>
                  </td>
                </tbody>
              );
            })}
          </table>
        </div>
        }
        
      </div>
    </div>
  );
}

export default Review;
