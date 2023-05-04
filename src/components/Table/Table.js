import React from "react";
import Limit from "./Limit";
import Pagination from "./Pagination";
import Search from "./Search";
import Sort from "./Sort";
import {  useSelector } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";



function Table(props) {
  const tableManagement = useSelector((state) => state.dataManagement);
  let headings = [];
  const userDetails = props.users[0];
  for (let item in userDetails) {
    headings.push(item);
  }
  const tableData = props.users?.map((item, i) => {
    return (
      <tr key={i}>
        {headings.map((element) => {
          return <td className=" border-b text-center p-3">{item[element]}</td>;
        })}
      </tr>
    );
  });
  return (
    <>
    {
      tableManagement.loading?  <div className="w-full h-screen flex justify-center items-center">
        <div>

    
<MoonLoader 
color="#ffff"
size={70} />
        </div>
        
         </div> 
     :
    <section className="container mx-auto p-6 font-mono">
      {props?.btn?.btn}
      {props.items ? (
        ""
      ) : (
        <div className="flex justify-between ">
          <div className=" w-full">
            <Search />
          </div>
          <div className="mb-1 pb-1 ">
            <Limit />
          </div>
        </div>
      )}
      {props?.nodatamsg ? (
        props.nodatamsg
      ) : props?.styles ? (
        <div className=" overflow-auto h-[530px]  mb-8  rounded-lg  ">
          <div className="w-full           ">
            <table className="w-full">
              <thead>
                <tr className="text-md  tracking-wide text-center  bg-boxColor uppercase border-b ">
                  {headings.map((item, index) => (
                    <>
                      <th key={index} className="px-4 py-3">
                        <span className="flex-col">
                          {item} {props.items ? "" : <Sort props={item} />}{" "}
                        </span>{" "}
                      </th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-boxColor  ">{tableData}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className=" overflow-auto   mb-8  rounded-lg shadow-lg ">
      
          <div className="w-full           ">
            
             
            <table className="w-full">
              <thead>
                <tr className="text-md  tracking-wide text-center  bg-boxColor uppercase border-b ">
                  {headings.map((item, index) => (
                    <>
                      <th key={index} className="px-4 py-3">
                        <span className="flex-col">
                          {item} {props.items ? "" : <Sort props={item} />}{" "}
                        </span>{" "}
                      </th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-boxColor  ">{tableData}</tbody>
            </table>
            
          </div>
        </div>
      )}
      {props.items ? " " : <Pagination />}
    </section>
        }

      </>
  );
}

export default Table;
