import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCoupons = () => {
   const axiosSecure = useAxiosSecure();
   const {data:copuns=[], isLoading} = useQuery({
    queryKey:['coupon'],
    queryFn:async() => {
        const res = await axiosSecure.get('/coupons')
        return res.data
    }
   })
return [copuns, isLoading]
}

export default useCoupons;