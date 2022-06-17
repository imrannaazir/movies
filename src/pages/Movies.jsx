import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../shared/Loading";
import Movie from "./Movie";

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6d05b475b7mshb6fd179119265b1p1dc43ajsn4d12dba0c52e",
          "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
    setLoading(false);
  }, []);
  if (loading) <Loading />;
  return (
    <div className="grid grid-cols-4 gap-6 my-8 mx-8">
      {movies?.results?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
