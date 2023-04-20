import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';





import Admin from './Routes/Admin';
import User from './Routes/user';
import Ventor from './Routes/Ventor';








function App() {
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    toastClassName: "toast-container",
    bodyClassName: "toast-body",
    theme:'dark'
  };


  return (
    <div className="App bg-bgColor text-txtColor font-txtFont text-xl min-h-screen flex flex-col justify-between ">
     
     <ToastContainer {...toastConfig} />
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<User />} />
          <Route path='/Vendor/*' element={<Ventor />} />
          <Route path='/Admin/*' element={<Admin />} />





          {/* <Route path='/adminside' element={<Sidebar/>}/> */}
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;



