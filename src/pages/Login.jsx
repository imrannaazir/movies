import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import Loading from "../shared/Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const bannerIMG = "https://wallpaperaccess.com/full/13453.jpg";
  // useCreateWith email and pass
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  //hook form
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: onchange });

  // watch pass

  // form handle
  const onSubmit = async (data) => {
    console.log(data);
    signInWithEmailAndPassword(data?.email, data?.password);
    reset();
    toast.success("Successfully Logged in!");
  };

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
  }

  if (user) {
    console.log(user);
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
          <h1 className="text-5xl font-bold">Login to Awetech Movies!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* card body */}
          <div className="card-body ">
            <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
              <p className="text-center text-lg text-primary font-bold mb-10">
                Login
              </p>

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

              <div className="form-control mt-6">
                <button className="btn btn-primary w-full max-w-xs">
                  Register
                </button>

                <Link className="text-primary  block" to="/register">
                  Please register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
