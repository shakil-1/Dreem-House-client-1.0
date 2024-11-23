import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";


const Google = () => {
    const {googleSigninPopUp} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handelGoogle = () =>{
        googleSigninPopUp()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
              };
            axiosPublic.post("/users", userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className="">
            <button className="btn w-full text-2xl  mb-4  btn-primary" onClick={handelGoogle}>Google</button>
        </div>
    );
};

export default Google;