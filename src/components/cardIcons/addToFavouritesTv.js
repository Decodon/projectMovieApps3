import React, { useContext } from "react";
import { TvsContext } from "../../contexts/tvsContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";


const AddToFavouritesTvIcon = ({ tv }) => {
  const context = useContext(TvsContext);

  const handleAddToFavouritesTv = (e) => {
    e.preventDefault();
    context.addToFavouritesTv(tv);
    console.log(tv);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavouritesTv}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesTvIcon;