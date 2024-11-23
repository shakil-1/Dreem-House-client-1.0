import { useForm } from "react-hook-form";
import b2 from "../../../assets/b2.jpg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ApartmentCreate = () => {
  const {
    register,
    handleSubmit,reset
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const apaintmentItem = {
        florNo: parseInt(data.florNo),
        blockName: data.blockName,
        apartmentName: data.apartmentName,
        roomNumber: (data.roomNumber),
        rent: parseInt(data.rent),
        available_room:'true',
        image: res.data.data.display_url,
      };
      console.log('apaintmentItem', apaintmentItem)
      console.log('res.data',res.data)

      axiosSecure.post("/apainment", apaintmentItem)
      .then((res) => {
        if(res.data.insertedId){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: 'Apartment Create successfully',
            showConfirmButton: false,
            timer: 1500
          });
          // reset() 
        }
      });
    }
  };
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${b2})` }}
    >
      <div className=" lg:px-20  w-11/12 min-h-screen mx-auto">
        <div className="border-2 bg-green-200 h-screen ">
          <h3 className="text-3xl font-bold text-center">Create Apartment </h3>
          <form onSubmit={handleSubmit(onSubmit)} className=" px-4  p-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Floor no?</span>
              </label>
              <input
                type="text"
                name="florNo"
                {...register("florNo")}
                placeholder="Floor no"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Block name?</span>
              </label>
              <input
                type="text"
                name="blockName"
                {...register("blockName")}
                placeholder="Block name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Room Number?</span>
              </label>
              <input
                type="text"
                name="roomNumber"
                {...register("roomNumber")}
                placeholder="Room Number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Apartment no?</span>
              </label>
              <input
                type="text"
                name="apartmentName"
                {...register("apartmentName")}
                placeholder="Apartment no"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Rent?</span>
              </label>
              <input
                type="text"
                name="rent"
                {...register("rent")}
                placeholder="Rent"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <button className="w-full bg-orange-200 mt-4 p-3 rounded-md cursor-pointer	">
              <input type="submit" value="Add Item" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCreate;
