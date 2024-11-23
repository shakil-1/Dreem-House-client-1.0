import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Google from "../../share/Google";


const Register = () => {const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, profileUpdate } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });


    if (res.data.success) {
      createUser(data.email, data.password)
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
        profileUpdate(data.name, res.data.data.display_url)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/")
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            Swal.fire({
              title: "Oops...",
              text: "The email address is already associated with an existing account!",
              icon: "error",
            });
          } else {
            console.log(error);
          }
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="md:text-3xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 p-4 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full max-w-xs"
                />
              </div>
              <div className="form-control ">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>
            <div className=" mb-2">
              <p className="text-center ">
                already have an account please?{" "}
                <Link className="font-bold text-blue-600" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <Google></Google>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
