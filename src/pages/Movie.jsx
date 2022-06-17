import React from "react";

const Movie = ({ movie }) => {
  console.log(movie.title);
  return (
    <div class="card card-side bg-base-100 shadow-xl flex-col max-w-xs">
      <figure>
        <img
          //
          src={movie.imageurl[0]}
          alt="Movie"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{movie?.title}</h2>
        <p>
          {movie?.genre?.map((type) => (
            <span>{type},</span>
          ))}
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
