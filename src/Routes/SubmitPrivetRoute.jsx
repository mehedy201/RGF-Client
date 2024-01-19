import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRIVET_CONTEXT } from "../Pages/Home/Home";


const SubmitPrivetRoute = ({children}) => {
    const navigate = useNavigate()
    const {userName, pass } = useContext(PRIVET_CONTEXT);
    if(userName == 'employees' && pass == 'rgvturf@2022'){
        return children;
    }
    return navigate('/submit-data')
};

export default SubmitPrivetRoute;