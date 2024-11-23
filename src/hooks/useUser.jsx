import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data:users={}} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axiosSecure('/users')
            return res.data;
        }
    })
    return{users}
};

export default useUser;