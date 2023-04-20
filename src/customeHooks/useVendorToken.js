import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";




import axios from '../instance/axios'
import { useDispatch } from 'react-redux';
import { tokenVerified , token } from '../redux/features/vendorAuthSlice'

function UseVendorToken() {
   const location = useLocation()
    const [vendorToken, setVendorToken] = useState('');
    const navigate = useNavigate();
    const vtoken = localStorage.getItem('vendor');
    const dispatch = useDispatch();
    
    useEffect(() => {
        axios.get('/token/vendortokenVerify', {
            headers: {
                'Authorization': `Bearer ${vtoken}`,
                'Content-Type': 'application/json'
            }
        }).then((data) => {
            dispatch(tokenVerified(data.status))
            dispatch(token(vtoken))
            
            if(location.pathname === "/vendor/login"){
                navigate('/Vendor/product_table');
            }
            
                setVendorToken(vtoken);
      
        }).catch((err)=>{
            console.log(err);
            navigate('/vendor/login');
        })
        
    }, [])
    return vendorToken;


}

export default UseVendorToken





