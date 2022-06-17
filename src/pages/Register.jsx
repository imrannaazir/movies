import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import Loading from "../shared/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const bannerIMG = "https://wallpaperaccess.com/full/13453.jpg";
  // useCreateWith email and pass
  const [createUserWithEmailAndPassword, eUser, loading, Error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  // profile update
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  //hook form
  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // watch pass
  const password = watch("password");

  // form handle
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ phoneNumber: data?.phone });
    reset();
    toast.success("successfully Registered!");
  };
  //if loading
  if (loading || updating) {
    return <Loading />;
  }
  //errors
  if (updateError || Error) {
    console.log(updateError || Error);
    toast.error("Something is wrong!");
  }
  if (eUser) {
    console.log(eUser);
    navigate("/");
  }
  return (
    <div
      style={{ backgroundImage: `url(${bannerIMG})` }}
      className="hero bg-cover h-screen gap-10 bg-fixed"
    >
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content  lg:flex-row-reverse">
        <div className="text-center lg:text-left hidden lg:block">
          <h1 className="text-5xl font-bold">Register Awetech Movies</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* card body */}
          <div className="card-body ">
            {/* form */}
            <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
              <p className="text-center text-lg text-primary font-bold">
                Register
              </p>

              {/* email field */}
              <div className="form-control ">
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "phone number is required",
                    },
                  })}
                  type="text"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full max-w-xs lg:w-[350px]"
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              {/* email field */}
              <div className="form-control">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "invalid email",
                    },
                  })}
                  type="text"
                  placeholder="Enter email"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password field */}
              <div className="form-control">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "password must have at least 6 characters!",
                    },
                  })}
                  type="password"
                  placeholder="Create password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {/*confirm password field */}
              <div className="form-control">
                <input
                  {...register("confirm_password", {
                    required: {
                      value: true,
                      message: "confirm password is required",
                    },
                    validate: (value) =>
                      value === password || "passwords do not match!",
                  })}
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.confirm_password?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.confirm_password.message}
                    </span>
                  )}
                  {errors.confirm_password?.type === "validate" && (
                    <span className="label-text-alt text-error">
                      {errors.confirm_password.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary w-full max-w-xs">
                  Register
                </button>

                <Link className="text-primary  block" to="/login">
                  Please log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
