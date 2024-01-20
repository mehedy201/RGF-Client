import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRIVET_CONTEXT } from "../Pages/Home/Home";


const SubmitPrivetRoute = ({children}) => {
    const navigate = useNavigate();
    const {userName, pass } = useContext(PRIVET_CONTEXT);
    if(userName.length == 0 || pass.length == 0){
        alert('Please Log In and access This page')
        return navigate('/submit-data')
    }else{
        return children
    }
    
    
};

export default SubmitPrivetRoute;