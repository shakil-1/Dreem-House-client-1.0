import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: paymentsHis = [], refetch } = useQuery({
    queryKey: ["history"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  refetch();
  return (
    <div>
      
       <div className="mb-2">
        <input type="text" placeholder="search" className="input  input-bordered input-primary w-full max-w-xs" />
        </div>
     
      <div className="overflow-x-auto">
        <table className="table ">
          <thead >
            <tr className=" bg-sky-200 text-white text-2xl ">
              <th></th>
              <th>Email</th>
              <th>TransactionId</th>
              <th>Date</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {paymentsHis.map((item, index) => (
                <tr className="hover:bg-gray-100" key={item?._id}>
                <th>{index + 1}</th>
                <td>{item?.email}</td>
                <td>{item?.transactionId}</td>
                <td>{item?.data}</td>
                <td className="font-bold">${item?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
