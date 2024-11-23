import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAgreements = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    },
  });
  return [agreements, refetch];
};

export default useAgreements;
