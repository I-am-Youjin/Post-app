import React, { useState } from "react";
import { IPostCard } from "../../types/types";
import {
  StyledPostCard,
  StyledPostInformationBox,
  StyledSecondaryInformation,
  StyledTitle,
  StyledDescription,
  StyledActionsBox,
  StyledThubsBox,
  StyledCount,
} from "./styles";
import { IconButton } from "@mui/material";
import { ThumbUp, ThumbDown, Bookmark } from "@mui/icons-material";

const PostCard: React.FC<IPostCard> = ({
  id,
  user,
  title,
  description,
  date,
  img,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const thumbUpFn = () => {
    switch (true) {
      case !liked && !disliked:
        setLiked(!liked);
        setLikeCount(likeCount + 1);
        break;
      case !liked && disliked:
        setDisliked(!disliked);
        setLiked(!liked);
        setLikeCount(likeCount + 1);
        setDislikeCount(dislikeCount - 1);
        break;
      case liked && !disliked:
        setLiked(!liked);
        setLikeCount(likeCount - 1);
        break;
      default:
        break;
    }
  };
  const thumbDownFn = () => {
    switch (true) {
      case !liked && !disliked:
        setDisliked(!disliked);
        setDislikeCount(dislikeCount + 1);
        break;
      case !liked && disliked:
        setDisliked(!disliked);
        setDislikeCount(dislikeCount - 1);
        break;
      case liked && !disliked:
        setLiked(!liked);
        setDisliked(!disliked);
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);

        break;
      default:
        break;
    }
  };
  const toogleFavoite = () => {
    setFavorite(!favorite);
  };

  return (
    <StyledPostCard>
      <StyledTitle>{title}</StyledTitle>
      {img ? <img src={img}></img> : null}
      <StyledDescription>{description}</StyledDescription>
      <StyledPostInformationBox>
        <StyledSecondaryInformation>{user}</StyledSecondaryInformation>
        <StyledSecondaryInformation>
          {date ? date : "--/--/--"}
        </StyledSecondaryInformation>
      </StyledPostInformationBox>
      <StyledActionsBox>
        <StyledThubsBox>
          <IconButton onClick={thumbUpFn}>
            <ThumbUp htmlColor={liked ? "#6669E7" : "#bcbcbc"} />
          </IconButton>
          <StyledCount>{likeCount}</StyledCount>
          <IconButton onClick={thumbDownFn}>
            <ThumbDown htmlColor={disliked ? "#6669E7" : "#bcbcbc"} />
          </IconButton>
          <StyledCount>{dislikeCount}</StyledCount>
        </StyledThubsBox>
        <IconButton onClick={toogleFavoite}>
          <Bookmark
            htmlColor={favorite ? "#6669E7" : "#bcbcbc"}
            fontSize="medium"
          />
        </IconButton>
      </StyledActionsBox>
    </StyledPostCard>
  );
};

export default PostCard;
