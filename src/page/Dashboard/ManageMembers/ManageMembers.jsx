import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAdmin from "../../../hooks/useAdmin";
import Swal from "sweetalert2";
const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();
  const [admin] = useAdmin();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handelMemberManage = user => {
    axiosSecure.patch(`/users/admin/user/${user._id}`)
    .then(res =>{
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: 'Member role change user role Successfully',
          showConfirmButton: false,
          timer: 2500
        });
      }else{
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: 'Already user!!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead className="bg-gray-300">
            <tr>
              <th>Number</th>
              <th>User name</th>
              <th>User email</th>
              <th>Role </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
              <tr className=" text-black  hover:bg-gray-100 " key={user._id}>
                <th className="">{index + 1}</th>
                <td className="">{user?.name}</td>
                <td className="">{user?.email}</td>
                <td className="">{ user?.roles ? user?.roles : 'User'}</td>
              <td className="">
             {
              user?.roles === 'admin' ?  <button disabled className="btn btn-sm" onClick={()=>handelMemberManage(user)}>Revmove</button> :  <button className="btn btn-sm" onClick={()=>handelMemberManage(user)}>Revmove</button>
             }
               </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
