import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";




import axios from '../instance/axios'
import { useDispatch } from 'react-redux';
import { tokenVerified,token } from '../redux/features/adminAuthSlice'

function useAdminToken() {
    const [adminToken, setAdminToken] = useState('');
    const navigate = useNavigate();
    const atoken = localStorage.getItem('admin');
    const dispatch = useDispatch();
    const location = useLocation()




    useEffect(() => {
        axios.get('/token/tokenVerify',{
            headers: {
                'Authorization': `Bearer ${atoken}`,
                'Content-Type': 'application/json'
            }
        }).then((data) => {

            dispatch(tokenVerified(data.status))
            dispatch(token(atoken))
            
                setAdminToken(atoken);
                if(location.pathname === "/admin/login"){
                    navigate('/admin/user');
                }
      
        }).catch((err)=>{
            navigate('/admin/login');
        })
        
    }, [])
    return adminToken;


}

export default useAdminToken






