import useAuth from "../../../hooks/useAuth";
import bg from '../../../assets/background.jpg'
import useAdmin from "../../../hooks/useAdmin";
import useAgreements from "../../../hooks/useAgreements";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const UserHome = () => {
const {user} = useAuth();
const [admins, ,] = useAdmin();
const [agreements] = useAgreements()
const [percentageAvailable, setPercentageAvailable] = useState(0);
const [percentageUnavailable, setPercentageUnavailable] = useState(0);

const [filteredUsers] = agreements.filter(user => user.status === 'checked');
const axiosSecure = useAxiosSecure();
const {data:apainment=[]}= useQuery({
  queryKey:['apainment'],
  queryFn:async()=>{
    const res = await axiosSecure.get('/apainment')
    return res.data;
  }
})
const {data:unable=[]}= useQuery({
  queryKey:['unable'],
  queryFn:async()=>{
    const res = await axiosSecure.get(`/apainment?available_room=${false}`)
    return res.data;
  }
})

const [admin] = useAdmin();
const { data: users = [], } = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  },
});
const member = users.filter(user => user.roles === 'member');
const userss = users.filter(user => user.roles !== 'member');


useEffect(() => {
  const availableRooms = apainment?.total - unable?.result?.length;
  const percentage = (availableRooms / apainment?.total) * 100;
  setPercentageAvailable(percentage);

  const unavailableRooms = unable?.result?.length;
  const unavailablePercentage = (unavailableRooms / apainment?.total) * 100;
  setPercentageUnavailable(unavailablePercentage);
}, [apainment?.total, unable?.result?.length]);
const percentij = parseInt(percentageAvailable)
const unavailablePers = parseInt (percentageUnavailable)


return (
<div className="bg-white md:mx-auto rounded w-full overflow-hidden">
  <div className="h-[200px] bg-cover bg-no-repeat" style={{backgroundImage:`url(${bg})`}}></div>
  <div className="px-5 py-2 flex flex-col gap-3 pb-6">
    <div className="h-[130px] shadow-md w-[130px] mx-auto rounded-full border-4 overflow-hidden -mt-16 border-white"><img src={user?.photoURL} className="w-full h-full rounded-full object-center object-cover" /></div>
  {
    admins?.admin ? 
    <div className="text-center">
    <h3 className="text-xl text-slate-900 relative font-bold leading-6">Name : {user?.displayName} </h3>
    <h3 className="text-xl text-slate-900 relative font-bold leading-6">Email : {user?.email}</h3>
    <h3 className="text-xl text-slate-900 relative font-bold leading-6">Total rooms : {apainment?.total}</h3>
    <h3 className="text-xl text-slate-900 relative font-bold leading-6">Available rooms i : {percentij}%</h3>
    <h3 className="text-xl text-slate-900 relative font-bold leading-6">Unavailable rooms: {unavailablePers}%</h3>
    <h3 className="text-xl text-slate-900 relative font-bold leading-6"> Users : {userss?.length}</h3>
    <h3 className="text-xl text-slate-900 relative font-bold leading-6"> Members : {member?.length}</h3>
  </div>
  :<>
  {
    admins?.member ? 
    <div className="text-center">
    <h3 className="text-xl text-slate-900 relative font-bold leading-6">Name : {user?.displayName} </h3>
    <h3 className="text-xl text-slate-900 relative font-bold leading-6">Email : {user?.email}</h3>
    <h3 className="text-xl relative font-bold ">Accept Date : {filteredUsers?.date}</h3>
    <p className="text-xl  relative font-bold ">Floor : {filteredUsers?.florNo}</p>
    <p className="text-xl relative font-bold ">Block :{filteredUsers?.blockName}</p>
    <p className="text-xl relative font-bold ">Roon Number : {filteredUsers?.roomNumber}</p>
  </div>
  :
  <div className="text-center">
  <h3 className="text-xl text-slate-900 relative font-bold leading-6">Name : {user?.displayName} </h3>
  <h3 className="text-xl text-slate-900 relative font-bold leading-6">Email : {user?.email}</h3>
  <h3 className="text-xl relative font-bold ">Accept Date : none</h3>
  <p className="text-xl  relative font-bold ">Floor : none</p>
  <p className="text-xl relative font-bold ">Block :none</p>
  <p className="text-xl relative font-bold ">Roon Number : none</p>
  </div>
  }
  </>
  }
</div>

</div>    
);
};
export default UserHome;