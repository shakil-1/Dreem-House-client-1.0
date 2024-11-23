import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });
  const { data:users = [], isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
        const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


if(isLoading){
  return <p>loading</p>
}

  // reject check 
  const rejectdata = (id) =>{
    axiosSecure.patch(`/bookings/${id}`,{status:'checked'})
    .then(res =>{
      refetch()
      if(res.data.modifiedCount > 0){
        console.log(res.data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: 'Data Check Successful, User role not change',
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: 'Data already check',
          showConfirmButton: false,
          timer: 1500
        });
      } 
    })
  }

  const handelCheckeduserRoolMember = (email, id) =>{
  // member 
  const [filteredUsers] = users.filter(user => user.email === email);
  if(filteredUsers){
    axiosPublic.patch(`/users/admin/${filteredUsers?._id}`)
    .then(res =>{
      console.log(res.data);
    })  
  }
 // checked 
 axiosPublic.patch(`/bookings/${id}`,{status:'checked'})
 .then(res =>{
   refetch();
   if(res.data.modifiedCount > 0){
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: 'Data Check Successful, User role change member',
      showConfirmButton: false,
      timer: 1500
    });
   }else{
     Swal.fire({
       position: "top-center",
       icon: "error",
       title: 'Data already check',
       showConfirmButton: false,
       timer: 1500
     });
   } 
 })


  }
  refetch()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {bookings.map((booking) => (
          <div key={booking?._id}>
            <div className="card  bg-base-100 shadow-sm rounded-none border">
              <div className="card-body bg-orange-50">
                <p><span className="font-bold">User name:</span> {booking?.name}</p>
                <p><span className="font-bold">User email:</span> {booking?.email}</p>
                <p><span className="font-bold">Floor no:</span> {booking?.florNo}</p>
                <p><span className="font-bold">Block name:</span> {booking?.blockName}</p>
                <p><span className="font-bold">Room no:</span> {booking?.roomNumber}</p>
                <p><span className="font-bold">Rent:</span> {booking?.rent}</p>
                <p><span className="font-bold">Date</span> {booking?.date}</p>
                <p><span className="font-bold ">Status:</span> <span className={`${booking?.status == 'pending' ? 'bg-orange-300 text-[#FFF]' : 'bg-red-300'} px-2 rounded-md py-1 font-medium `}>{booking?.status}</span></p>
                <div className=" flex gap-3 ">
                <button onClick={() => handelCheckeduserRoolMember(booking?.email, booking?._id)} className="btn btn-sm hover:text-[#FFF] bg-green-200 hover:bg-green-300 w-1/2">Accept</button>
                <button onClick={()=>rejectdata(booking?._id)} className="btn btn-sm hover:text-[#FFF] bg-red-200 hover:bg-red-300 w-1/2">Reject</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgreementRequests;
