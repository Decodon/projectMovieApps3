import React, { useState } from "react";

export const TvsContext = React.createContext(null);

const TvsContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [tvfavourites, setFavourites] = useState([]);
  const [mustWatch,   setMustWatch] = useState([]);

  const addToFavourites = (tv) => {
    if (!tvfavourites.includes(tv.id)) {
      let newFavourites = [...tvfavourites, tv.id];
      setFavourites(newFavourites);
      console.log(tvfavourites);
    }
  };

  const addToMustWatch = (tv) => {
    if (!mustWatch.includes(tv.id)) {
      let newMustWatch = [...mustWatch, tv.id];
      setMustWatch(newMustWatch);
      console.log(mustWatch);
    }
  };

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites(tvfavourites.filter((tId) => tId !== tv.id));
  };

  const addReview = (tv, review) => {
    setMyReviews({ ...myReviews, [tv.id]: review });
  };

  return (
    <TvsContext.Provider
      value={{
        tvfavourites,
        mustWatch,
        addToFavourites,
        addToMustWatch,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider;
