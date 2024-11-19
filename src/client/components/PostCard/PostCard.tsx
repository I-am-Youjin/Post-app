import React, { useEffect, useState } from "react";
import { IPost, IPostCard, IPostState } from "../../types/types";
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
import {
  likePost,
  dislikePost,
  zeroReaction,
  addToFavorite,
  removeFromFavorite,
} from "./../../store/slices/postsSlice";
import store from "../../store";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const PostCard: React.FC<IPostCard> = ({
  id,
  title,
  description,
  date,
  img,
  user,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const allPosts = useSelector((state: any) => state.posts.allPosts);

  useEffect(() => {
    allPosts.find((post: IPost) => {
      if (post.id === id) {
        setLikeCount(post.like);
        setDislikeCount(post.dislike);
        setLiked(!!post.like);
        setDisliked(!!post.dislike);
        setFavorite(post.favorite);
      }
    });
  }, [dislikeCount, dislikeCount, favorite]);

  const thumbUpFn = () => {
    switch (true) {
      case !liked && !disliked:
        setLiked(!liked);
        setLikeCount(likeCount + 1);
        store.dispatch(likePost(id));
        break;
      case !liked && disliked:
        setDisliked(!disliked);
        setLiked(!liked);
        setLikeCount(likeCount + 1);
        setDislikeCount(dislikeCount - 1);
        store.dispatch(zeroReaction(id));
        store.dispatch(likePost(id));
        break;
      case liked && !disliked:
        setLiked(!liked);
        setLikeCount(likeCount - 1);
        store.dispatch(zeroReaction(id));

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
        store.dispatch(dislikePost(id));

        break;
      case !liked && disliked:
        setDisliked(!disliked);
        setDislikeCount(dislikeCount - 1);
        store.dispatch(zeroReaction(id));

        break;
      case liked && !disliked:
        setLiked(!liked);
        setDisliked(!disliked);
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        store.dispatch(zeroReaction(id));
        store.dispatch(dislikePost(id));

        break;
      default:
        break;
    }
  };
  const toogleFavoite = () => {
    setFavorite(!favorite);
    if (favorite) {
      store.dispatch(removeFromFavorite(id));
    } else {
      store.dispatch(addToFavorite(id));
    }
  };

  return (
    <StyledPostCard>
      <NavLink to={`/post/${id}`} style={{ textDecoration: "none" }}>
        <StyledTitle>{title}</StyledTitle>
        {img ? <img src={img}></img> : null}
        <StyledDescription>{description}</StyledDescription>
        <StyledPostInformationBox>
          <StyledSecondaryInformation>{user}</StyledSecondaryInformation>
          <StyledSecondaryInformation>
            {date ? date : "--/--/--"}
          </StyledSecondaryInformation>
        </StyledPostInformationBox>
      </NavLink>
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
