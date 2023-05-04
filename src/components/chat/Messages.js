import React from "react";
import { format } from "timeago.js";

function Messages({ own, Messages }) {
  const userData = localStorage.getItem("userData");
  const data = JSON.parse(userData);
  return (
    <div className={own ? " flex justify-end  " : "flex "}>
      {
        <div className="bg-bgColor m-5 rounded-2xl w-1/2 md:w-1/3 p-1">
          <div className="flex flex-col md:flex-row w-fit pr-1 md:pt-2 md:pl-2">
            {own ? (
              <div className="min-w-fit">
                <img
                  className="rounded-full mt-1 w-6 h-6 md:w-10 md:h-10 "
                  src={data.image}
                  alt="user Img"
                />
              </div>
            ) : (
              <img
                className="rounded-full mt-1 w-6 h-6 md:w-10 md:h-10 "
                src={
                  "https://res.cloudinary.com/dczou8g32/image/upload/v1683224197/project2/logo2_aspi2m.png"
                }
                alt="user Img"
              />
            )}
            <p className="bg-boxColor m-1 py-1 pl-2 pr-1 rounded-xl break-words md:text-lg  text-xs">
              {Messages?.text}{" "}
            </p>
          </div>
          <p className=" md:pl-6 pl-1 md:p-2 md:text-sm  text-xs">
            {format(Messages?.createdAt)}{" "}
          </p>
        </div>
      }
    </div>
  );
}

export default Messages;
