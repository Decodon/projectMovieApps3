import React from "react";
import Cast from "../castMemberCard";
import Grid from "@material-ui/core/Grid";

const CastList = (props) => {
  let castMemberCards = props.cast.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Cast key={m.id} cast={m}/>
    </Grid>
  ));
  return castMemberCards;
};

export default CastList;
