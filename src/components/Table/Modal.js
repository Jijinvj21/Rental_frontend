import { useState } from "react";

function Modal(props) {
  
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
 
  return (
    <div className="relative">
      <button
        onClick={()=>openModal()}
        className={props.button?"w-full":" m-5 pl-6  "}
      >
       <span className='flex text-lg    '>
        {props.button?props.button:props?.addCycleBtn()}
        </span>
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-[#182124e3] opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block z-10 align-bottom bg-boxColor rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <button
                          type="button"
                          className="mx-5  mt-5  "
                          onClick={closeModal}
                        >
                          <svg className="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg>
                        </button>
                      <div onClick={()=>{setIsOpen(!props?.close)}} className="flex flex-row text-center p-2 ">
                        {props.modal?props.modal:props.addCycleForm}
                        </div>
                      <div className="bg-boxColor px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          );
        }
        
        export default Modal         