import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const ManageCoupons = () => {
  const [coupon, setCoupon] = useState("");
  const [parcentag, setPercentage] = useState("");
  const [description, setDescription] = useState("");
  const axiosSecure = useAxiosSecure();


  const handleSubmit = (e) => {
    e.preventDefault();
    const parcentage = parseInt(parcentag);
    axiosSecure
      .post("/coupons", { coupon, parcentage, description })
      .then((res) => {
        if (res.data.insertedId) {
          location.reload();
        }
      });
  };

  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/coupons");
      return res.data;
    },
  });

  return (
    <div>
      <div className="mb-4">
       
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Create New Coupon
        </button>
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle -z-10"
        >
          <div className="modal-box">
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">coupon code?</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Type here coupon code"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">discount percentage?</span>
                </label>
                <input
                  type="number"
                  onChange={(e) => setPercentage(e.target.value)}
                  placeholder="Type here discount percentage"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">coupon description?</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Type here description"
                  className="input input-bordered w-full"
                />
              </div>

              <input className="btn w-full mt-2" type="submit" value="submit" />
            </form>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-blue-100">
                <th></th>
                <th>Coupon</th>
                <th>Parcentage</th>
                <th>Description</th>
                <th>Update Coupon</th>
              </tr>
            </thead>
            <tbody>
            {coupons?.map((coupon, index) => (
               <tr key={coupon._id} className="hover:bg-base-200">
               <td>{index + 1}</td>
               <td>{coupon?.coupon}</td>
                  <td>{coupon?.parcentage}%</td>
                  <td>{coupon?.description}</td>
                  <td>
            <Link to={`/dashboard/updatedCoupons/${coupon?._id}`}>
              <butto className="btn btn-sm bg-gray-400 text-white">Update</butto>
            </Link>
          </td>
        </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCoupons;
