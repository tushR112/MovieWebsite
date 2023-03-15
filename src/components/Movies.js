import React from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movie.map((currMovie) => {
          const { imdbID, Title, Poster } = currMovie;

          const movieName = Title.substring(0, 15);
          
          return (
            <NavLink to={`/movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {movieName.length >= 15 ? `${movieName}...` : movieName}
                  </h2>
                  <img src={Poster} alt="IMDB POSTER" />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
