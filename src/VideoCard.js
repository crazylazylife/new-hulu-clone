import React, { forwardRef } from "react";
import "./VideoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TextTruncate from "react-text-truncate";
const VideoCard = forwardRef(({ movie }, ref) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.original_title || movie.original_name}</h2>
      <p className="videoCard__stats">
        <ThumbUpIcon />
        &nbsp;&nbsp;
        {movie.vote_count} | {movie.release_date || movie.first_air_date}
      </p>
    </div>
  );
});

export default VideoCard;
