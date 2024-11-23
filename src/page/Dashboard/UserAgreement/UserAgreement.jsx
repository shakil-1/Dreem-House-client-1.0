
import useAgreements from "../../../hooks/useAgreements";
const UserAgreement = () => {
 const [agreements]= useAgreements()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {
                agreements.map(item =>
                 <div className="border p-4" key={item._id}>
                <h2>{item.apartmentName}</h2>
                <h2>{item.blockName}</h2>
                <h2>{item.email}</h2>
                <h2>{item.florNo}</h2>
                <h2>{item.name}</h2>
                <h2>{item.rent}</h2>
                <h2>{item.status}</h2>
                </div>)
            }
        </div>
    );
};

export default UserAgreement;