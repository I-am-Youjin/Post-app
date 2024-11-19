import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IPost } from "../../types/types";
import {
  StyledActionsBox,
  StyledCount,
  StyledSecondaryInformation,
  StyledPage,
  StyledPostInformationBox,
  StyledDescription,
  StyledThubsBox,
  StyledTitle,
} from "./styles";
import { IconButton } from "@mui/material";
import { ThumbUp, ThumbDown, Bookmark } from "@mui/icons-material";
import { useEffect, useState } from "react";
import store from "../../store";
import {
  likePost,
  dislikePost,
  removeFromFavorite,
  addToFavorite,
  zeroReaction,
} from "../../store/slices/postsSlice";

const PostPage = () => {
  const { id } = useParams();
  const allPosts = useSelector((state: any) => state.posts.allPosts);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);

  useEffect(() => {
    setCurrentPost(
      allPosts.find((post: IPost) => JSON.stringify(post.id) === id)
    );
    // console.log(currentPost);
  }, [currentPost]);

  useEffect(() => {
    if (currentPost) {
      allPosts.find((post: IPost) => {
        if (
          JSON.stringify(post.id) === JSON.stringify((currentPost as IPost).id)
        ) {
          setLikeCount(post.like);
          setDislikeCount(post.dislike);
          setLiked(!!post.like);
          setDisliked(!!post.dislike);
          setFavorite(post.favorite);
        }
      });
    }
  }, [dislikeCount, dislikeCount, currentPost]);

  const thumbUpFn = () => {
    switch (true) {
      case !liked && !disliked:
        setLiked(!liked);
        setLikeCount(likeCount + 1);
        store.dispatch(likePost((currentPost as IPost).id));

        if (favorite) {
          store.dispatch(removeFromFavorite((currentPost as IPost).id));
          store.dispatch(addToFavorite((currentPost as IPost).id));
        }
        break;
      case !liked && disliked:
        setDisliked(!disliked);
        setLiked(!liked);
        setLikeCount(likeCount + 1);
        setDislikeCount(dislikeCount - 1);
        store.dispatch(zeroReaction((currentPost as IPost).id));
        store.dispatch(likePost((currentPost as IPost).id));

        if (favorite) {
          store.dispatch(removeFromFavorite((currentPost as IPost).id));
          store.dispatch(addToFavorite((currentPost as IPost).id));
        }

        break;
      case liked && !disliked:
        setLiked(!liked);
        setLikeCount(likeCount - 1);
        store.dispatch(zeroReaction((currentPost as IPost).id));

        if (favorite) {
          store.dispatch(removeFromFavorite((currentPost as IPost).id));
          store.dispatch(addToFavorite((currentPost as IPost).id));
        }

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
        store.dispatch(dislikePost((currentPost as IPost).id));

        if (favorite) {
          store.dispatch(removeFromFavorite((currentPost as IPost).id));
          store.dispatch(addToFavorite((currentPost as IPost).id));
        }
        break;
      case !liked && disliked:
        setDisliked(!disliked);
        setDislikeCount(dislikeCount - 1);
        store.dispatch(zeroReaction((currentPost as IPost).id));

        if (favorite) {
          store.dispatch(removeFromFavorite((currentPost as IPost).id));
          store.dispatch(addToFavorite((currentPost as IPost).id));
        }
        break;
      case liked && !disliked:
        setLiked(!liked);
        setDisliked(!disliked);
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        store.dispatch(zeroReaction((currentPost as IPost).id));
        store.dispatch(dislikePost((currentPost as IPost).id));

        if (favorite) {
          store.dispatch(removeFromFavorite((currentPost as IPost).id));
          store.dispatch(addToFavorite((currentPost as IPost).id));
        }
        break;
      default:
        break;
    }
  };
  const toogleFavoite = () => {
    setFavorite(!favorite);
    if (favorite) {
      store.dispatch(removeFromFavorite((currentPost as IPost).id));
    } else {
      store.dispatch(addToFavorite((currentPost as IPost).id));
    }
  };

  // console.log(currentPost);

  return (
    currentPost && (
      <StyledPage>
        <StyledTitle>{currentPost.title}</StyledTitle>
        {(currentPost as IPost).img ? <img src={currentPost.img}></img> : null}
        <StyledDescription>{(currentPost as IPost).body}</StyledDescription>
        <StyledPostInformationBox>
          <StyledSecondaryInformation>
            {currentPost.user}
          </StyledSecondaryInformation>
          <StyledSecondaryInformation>
            {(currentPost as IPost).date
              ? (currentPost as IPost).date
              : "--/--/--"}
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
      </StyledPage>
    )
  );
};

export default PostPage;
