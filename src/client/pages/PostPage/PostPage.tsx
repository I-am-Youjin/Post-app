import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IComment, IPost } from "../../types/types";
import {
  StyledActionsBox,
  StyledCount,
  StyledSecondaryInformation,
  StyledPage,
  StyledPostInformationBox,
  StyledDescription,
  StyledThubsBox,
  StyledTitle,
  StyledCommentBox,
  StyledCommentBoxTitle,
} from "./styles";
import { IconButton } from "@mui/material";
import { ThumbUp, ThumbDown, Bookmark, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import store from "../../store";
import {
  likePost,
  dislikePost,
  removeFromFavorite,
  addToFavorite,
  zeroReaction,
  deletePost,
} from "../../store/slices/postsSlice";
import Comment from "../../components/Comment/Comment";
import CustomTextArea from "../../components/CustomTextarea/CustomTextArea";
import CustomInput from "../../components/CustomInput/CustomInput";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { setComment } from "../../store/slices/commetsSlice";

const PostPage = () => {
  const initialState = {
    title: "",
    textarea: "",
  };
  const { id } = useParams();
  const allPosts = useSelector((state: any) => state.posts.allPosts);
  const allComments = useSelector((state: any) => state.comments.allComments);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);
  const currentUser = useSelector((state: any) => state.users.currentUser);
  const [error, setError] = useState(false);
  const [errorMessege, setErrorMessege] = useState("");
  const [commentState, setCommentState] = useState(initialState);
  const navigate = useNavigate();

  const AlertFn = () => {
    setError(true);
    setTimeout(() => setError(false), 5000);
  };

  const handleChangeValue = (
    fieldName: keyof typeof initialState,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentState((prevData: typeof initialState) => {
      return { ...prevData, [fieldName]: event.target.value };
    });
  };

  const addComment = () => {
    if (currentUser) {
      const date = new Date();
      store.dispatch(
        setComment({
          postId: Number(id),
          id: Date.now(),
          name: commentState.title,
          email: currentUser.email,
          body: commentState.textarea,
          date: `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`,
        })
      );
    } else {
      setErrorMessege("Sign up or Sign in for the action!");
      AlertFn();
    }
  };

  useEffect(() => {
    setCurrentPost(
      allPosts.find((post: IPost) => JSON.stringify(post.id) === id)
    );
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
  }, [dislikeCount, dislikeCount, currentPost, currentUser]);

  const thumbUpFn = () => {
    if (currentUser) {
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
    } else {
      setErrorMessege("Sign up or Sign in for the action!");
      AlertFn();
    }
  };
  const thumbDownFn = () => {
    if (currentUser) {
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
    } else {
      setErrorMessege("Sign up or Sign in for the action!");
      AlertFn();
    }
  };

  const toogleFavoite = () => {
    if (currentUser) {
      setFavorite(!favorite);
      if (favorite) {
        store.dispatch(removeFromFavorite(id));
      } else {
        store.dispatch(addToFavorite(id));
      }
    } else {
      setErrorMessege("Sign up or Sign in for the action!");
      AlertFn();
    }
  };

  const handleDeletePost = () => {
    store.dispatch(deletePost(currentPost));
    navigate("/");
  };

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
          <div>
            {currentUser && currentUser.id === currentPost.userId && (
              <IconButton onClick={handleDeletePost}>
                <Delete htmlColor={"#bcbcbc"} fontSize="medium"></Delete>
              </IconButton>
            )}
            <IconButton onClick={toogleFavoite}>
              <Bookmark
                htmlColor={favorite ? "#6669E7" : "#bcbcbc"}
                fontSize="medium"
              />
            </IconButton>
          </div>
        </StyledActionsBox>
        <StyledCommentBox>
          <CustomInput
            placeholder="Title"
            type="text"
            onChange={(event) => handleChangeValue("title", event)}
            value={commentState.title}
          />
          <CustomTextArea
            value={commentState.textarea}
            onChange={(event) => handleChangeValue("textarea", event)}
            placeholder="Leave your comment..."
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6669E7",
              fontFamily: "Poppins",
              borderRadius: "20px",
              maxWidth: "120px",
            }}
            onClick={addComment}
          >
            Send
          </Button>
          <StyledCommentBoxTitle>Comments:</StyledCommentBoxTitle>
          {allComments.map((comment: IComment) => {
            if (
              JSON.stringify(comment.postId) === JSON.stringify(currentPost.id)
            ) {
              return (
                <Comment
                  id={comment.id}
                  postId={comment.postId}
                  name={comment.name}
                  body={comment.body}
                  email={comment.email}
                  date={comment.date}
                />
              );
            }
          })}
        </StyledCommentBox>
        <Stack
          sx={{
            width: "96%",
            position: "absolute",
            left: "2%",
            bottom: "4%",
            opacity: error ? "1" : "0",
            zIndex: "10",
            height: "200px",
          }}
          spacing={2}
        >
          <Alert variant="filled" severity="error">
            {errorMessege}
          </Alert>
        </Stack>
      </StyledPage>
    )
  );
};

export default PostPage;
