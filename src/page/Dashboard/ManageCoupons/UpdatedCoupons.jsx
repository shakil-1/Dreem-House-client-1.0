import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const UpdatedCoupons = () => {
    const loadedCoupons = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const { _id,coupon, parcentage, description } = loadedCoupons;



    const onSubmit = (data) => {
        const coupons = {coupon:data.coupon, parcentage:data.parcentage, description:data.description}
        console.log(_id)
        axiosPublic.patch(`/coupons/${_id}`,coupons)
        .then(res => {
            if(res.data.matchedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Coupon update successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
           navigate('/dashboard/manageCoupons')
        })
    }
    return (
        <div>
             
             <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Update coupon code?</span>
                </label>
                <input
                  type="text"
                  name="coupon"
                  {...register("coupon")}
                defaultValue={coupon}
                  placeholder="Type here coupon code"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Update discount percentage?</span>
                </label>
                <input
                  type="number"
                  name="parcentage"
                  {...register("parcentage")}
                  defaultValue={parcentage}
                  placeholder="Type here discount percentage"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Update coupon description?</span>
                </label>
                <input
                  type="text"
                  name="description"
                  {...register("description")}
                  defaultValue={description}
                  placeholder="Type here description"
                  className="input input-bordered w-full"
                />
              </div>

              <input className="btn w-full mt-2" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UpdatedCoupons;