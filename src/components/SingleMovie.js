import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_url } from "../context";
import { useState, useEffect } from "react";

const SingleMovie = () => {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);

        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      getMovies(`${API_url}&i=${movieId}`);
    }, 500);
    return () => clearTimeout(timeout);
  }, [movieId]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="IMDB Poster" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">Go Back</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
