import {useNavigate} from "react-router-dom";


export const useLogin = () =>{
    const navigate = useNavigate()

    const handleSubmit = async evt=>{
        evt.preventDefault()
        navigate("/resources")
    }

    return {handleSubmit}

}