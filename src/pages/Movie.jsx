import React from "react";

const Movie = ({ movie }) => {
  // console.log(movie.title);
  return (
    <div className="card card-side bg-base-100 shadow-xl flex-col max-w-xs">
      <figure>
        <img
          //
          src={movie.imageurl[0]}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie?.title}</h2>
        <p>
          {movie?.genre?.map((type) => (
            <span>{type},</span>
          ))}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
