import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";




import axios from '../instance/axios'
import { useDispatch } from 'react-redux';
import { tokenVerified,token } from '../redux/features/vendorAuthSlice'//jb

function UseUserToken() {

    const location =useLocation()
    const [vendorToken, setVendorToken] = useState('');
    const navigate = useNavigate();
    const utoken = localStorage.getItem('user');
    const dispatch = useDispatch();
    
    useEffect(() => {
        axios.get('/token/usertokenVerify', {
            headers: {
                'Authorization': `Bearer ${utoken}`,
                'Content-Type': 'application/json'
            }
        }).then((data) => {
            dispatch(tokenVerified(data.status))
            dispatch(token(utoken))

            
                setVendorToken(utoken);
if(location.pathname === "/User/login" || location.pathname === "/User/signUp" || location.pathname === '/User/Login/Otp/Verify' || location.pathname ===  '/User/Signup/Otp/Verify'){
    navigate('/');
}

        }).catch((err)=>{
            console.log(err);
            navigate('/user/login');
        })
        
    }, [])
    return vendorToken;


}

export default UseUserToken
