import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivetRouter = ({ childrn }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>Loading..</p>;
  }
  if (user) {
    childrn;
  }
  <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRouter;
