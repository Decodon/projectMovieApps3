import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getActorImages } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const ActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "actors",
    getActors,
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actor = data.results;

  // These three lines are redundant; we will replace them laterg.
  //const favourites = movies.filter((m) => m.favouurite);
 // localStorage.setItem("favourites", JSON.stringify(favourites));

  console.log("List of actors", actor);
  return (
    <PageTemplate
      title="Discover Actors"
      actor={actor}
      action={(actor) => {
        return <AddToFavouritesIcon actors={actor} />;
      }}
    />
  );
};
export default ActorsPage;
