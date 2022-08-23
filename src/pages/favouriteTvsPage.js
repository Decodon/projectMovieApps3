import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvsContext } from "../contexts/tvsContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteTvsPage = () => {
  const { favourites: tvIds } = useContext(TvsContext);

  // Create an array of queries and run in parallel.
  const favouriteTvQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvs = favouriteTvQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="Favourite Tvs"
      tvs={tvs}
      action={(tv) => {
        return (
          <>
            <RemoveFromFavourites tv={tv} />
            <WriteReview tv={tv} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvsPage;