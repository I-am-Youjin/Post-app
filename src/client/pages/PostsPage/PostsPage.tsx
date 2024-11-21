import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setUsers, sortPosts } from "../../store/slices/postsSlice";
import { fetchUsers } from "../../store/slices/usersSlice";
import { IPost } from "../../types/types";
import { StyledPage } from "./styles";
import store from "../../store/index";
import { fetchComments } from "../../store/slices/commetsSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.allPosts);
  const users = useSelector((state: any) => state.users.allUsers);
  const [radioValue, setRadioValue] = useState("default");

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
    store.dispatch(sortPosts(radioValue));
  };

  useEffect(() => {
    if (!posts.length || !users.length) {
      dispatch(fetchPosts() as any);
      dispatch(fetchUsers() as any);
      dispatch(fetchComments() as any);
      store.dispatch(sortPosts("default"));
    }
  }, []);

  useEffect(() => {
    if (users.length && posts.length && !posts[0].user) {
      store.dispatch(setUsers(users));
    }
  }, [users.length, posts.length]);
  return (
    <StyledPage>
      <FormControl>
        <FormLabel id="radio">Sort</FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio"
          name="row-radio-buttons-group"
          value={radioValue}
          onChange={(event) => handleChangeValue(event)}
        >
          <FormControlLabel
            value="default"
            control={<Radio />}
            label="Default"
          />
          <FormControlLabel value="author" control={<Radio />} label="Author" />
        </RadioGroup>
      </FormControl>
      {posts &&
        posts.map((post: IPost) => {
          return (
            <PostCard
              user={post.user}
              id={post.id}
              title={post.title}
              description={post.body}
              date={post.date}
              img={post.img}
            ></PostCard>
          );
        })}
    </StyledPage>
  );
};

export default PostsPage;
