import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Google from "../../share/Google";

const Login = () => {
  const {register, handleSubmit, formState: { errors },} = useForm()
  const {signInUser} = useAuth()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
    .then(result =>{
        console.log(result.user);
        navigate('/')
    })
    .catch(error =>{
        console.log(error);
    })

  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
      
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
          <h1 className="md:text-3xl text-2xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className=" mb-2">
                <p>dont have account please?<Link className="font-bold text-blue-600" to="/register">register</Link></p>
            </div>
            <Google></Google>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
