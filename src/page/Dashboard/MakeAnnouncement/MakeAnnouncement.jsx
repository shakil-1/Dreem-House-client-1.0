import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit , reset} = useForm();
  const onSubmit = data => {
  const date = new Date();
  const todyasDate = date.toLocaleDateString();
  const items = {tite:data?.tite, description:data?.description,todyasDate}
    axiosSecure.post('/announcements', items)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
      reset()
    })
  }
 
  
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title?</span>
          </label>
          <input
            type="text"
            name="title"
            {...register("tite")}
            placeholder="title here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            {...register("description")}
            className="textarea textarea-bordered h-24"
            placeholder="description here"
          ></textarea>
        </div>

        <button className="btn mt-4">
          <input type="submit" value="Submit Announcement" />
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
