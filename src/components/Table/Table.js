
import React from 'react'
import Limit from './Limit';
import Pagination from './Pagination';
import Search from './Search';
import Sort from './Sort';



function Table(props) {
  let headings = []
  const userDetails = props.users[0]
  for (let item in userDetails) {
    headings.push(item)
  }
  const tableData = props.users.map((item, i) => {
    return (
      <tr >
        {headings.map(element => {
          return (
            <td className=' border-b text-center p-3'>{item[element]}</td>
          )
        })}
      </tr>
    )
  })
  return (
    <section className="container mx-auto p-6 font-mono           ">
       {props?.btn?.btn}
      <div className='flex justify-between   '>
 <Search/>
 <Limit/>
      </div>
      { props?.nodatamsg?props.nodatamsg: <div className="w-full mb-8  rounded-lg shadow-lg     ">
        <div className="w-full           ">
          <table className="w-full">
            <thead>
              <tr className="text-md  tracking-wide text-center  bg-boxColor uppercase border-b ">
                {
                  headings.map((item, index) => (
                    <>
                    <th key={index} className="px-4 py-3"><span className='flex-col' >{item} <Sort props={item}/> </span>  </th>
                    </>
                  ))
                }
              </tr>
            </thead>
            <tbody className="bg-boxColor  ">
              {tableData}
            </tbody>
          </table>
        </div>
      </div>}
      <Pagination/>
    </section>
  )
}

export default Table


