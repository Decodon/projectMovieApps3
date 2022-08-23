import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getSimilarMovies } from "../api/tmdb-api";

const SimilarMoviesPage = (props) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["similar", { id: id }],
    getSimilarMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;
  console.log(movies);

  // These three lines are redundant; we will replace them laterg.
  const favourites = movies.filter((m) => m.favouurite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  return (
    <PageTemplate
      title="Browse Similar Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />;
      }}
    />
  );
};

export default SimilarMoviesPage;
