import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";


const AddToUpcomingMoviesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToUpcomingMoviesIcon = (e) => {
    e.preventDefault();
    context.addToUpcomingMoviesIcon(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToUpcomingMoviesIcon}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToUpcomingMoviesIcon;