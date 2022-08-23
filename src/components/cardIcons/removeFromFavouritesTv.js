import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { TvsContext } from "../../contexts/tvsContext";

const RemoveFromFavouritesTvIcon = ({ tv }) => {
  const context = useContext(TvsContext);

  const handleRemoveFromFavouritesTv = (e) => {
    e.preventDefault();
    context.removeFromFavourites(tv);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavouritesTv}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouritesTvIcon;