import React from "react";

const Register = () => {
  const bannerIMG = "https://wallpaperaccess.com/full/13453.jpg";
  return (
    <div
      style={{ backgroundImage: `url(${bannerIMG})` }}
      class="hero bg-cover h-screen gap-10 bg-fixed"
    >
      <div class="hero-overlay bg-opacity-75"></div>
      <div class="hero-content text-center text-neutral-content  lg:flex-row-reverse">
        <div class="text-center lg:text-left hidden lg:block">
          <h1 class="text-5xl font-bold">Contact Us!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="message"
                class="input input-bordered h-[100px]"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
