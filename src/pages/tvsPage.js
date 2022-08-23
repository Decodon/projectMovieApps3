import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTvs } from "../api/tmdb-api";
import AddToFavouritesTvIcon from "../components/cardIcons/addToFavourites";

const TvsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discoverTv", getTvs);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const tvs = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = tvs.filter((m) => m.favouurite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  return (
    <PageTemplate
      title="Discover Tvs"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavouritesTvIcon tv={tv} />;
        
      }}
    />
  );
};

export default TvsPage;
