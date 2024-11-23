import { useForm } from "react-hook-form";
import useAgreements from "../../../hooks/useAgreements";
import { Link } from "react-router-dom";
const MakePayment = () => {
  const { handleSubmit } = useForm();
  const [agreements, refetch] = useAgreements();
  const filteredUsers = agreements.filter(user => user.status === 'checked');
  const totalPrice = filteredUsers.reduce((total, item) => total + item.rent, 0);
  refetch()
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className=" mx-auto">
        <div className=" ">
          <div className="flex justify-between px-7">
            <h3 className="text-3xl font-bold text-center">
              Items : {filteredUsers.length}{" "}
            </h3>
            <h3 className="text-3xl font-bold text-center">
            Total Price : ${totalPrice}
            </h3>
            <h3 className="text-xl font-bold text-center">
              <Link to="/dashboard/payment">
            <button className=" bg-orange-200  p-2 rounded-md">
             Payment pay
            </button>
          </Link>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((item, index) => (
              <div key={item._id}>
                <form onSubmit={handleSubmit(onSubmit)} className=" px-4  p-4">
                  <div className="form-control w-full border-2 bg-green-200 p-4">
                    <span className="md:text-2xl md:font-bold py-1">
                      MY BOOKING NO {index + 1}
                    </span>
                    <div>
                      <input
                        type="text"
                        defaultValue={item?.name}
                        className="input input-bordered w-full "
                        name=""
                        id=""
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        defaultValue={item?.email}
                        className="input input-bordered w-full "
                        name=""
                        id=""
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder=""
                        defaultValue={item?.florNo}
                        className="input input-bordered w-full "
                        name=""
                        id=""
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        defaultValue={item?.blockName}
                        className="input input-bordered w-full "
                        name=""
                        id=""
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        defaultValue={item?.apartmentName}
                        className="input input-bordered w-full "
                        name=""
                        id=""
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        defaultValue={item?.rent}
                        className="input input-bordered w-full "
                        name=""
                        id=""
                        readOnly
                      />
                    </div>
                  </div>
                </form>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
