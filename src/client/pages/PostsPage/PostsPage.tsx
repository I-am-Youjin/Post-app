import React, { useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setUsers } from "../../store/slices/postsSlice";
import { fetchUsers } from "../../store/slices/usersSlice";
import { IPost } from "../../types/types";
import { StyledPage } from "./styles";
import store from "../../store/index";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.allPosts);
  const users = useSelector((state: any) => state.users.allUsers);

  useEffect(() => {
    if (!posts.length || !users.length) {
      dispatch(fetchPosts() as any);
      dispatch(fetchUsers() as any);
    }
  }, []);

  useEffect(() => {
    if (users.length && posts.length && !posts[0].user) {
      store.dispatch(setUsers(users));
    }
  }, [users.length, posts.length]);

  return (
    <StyledPage>
      {posts &&
        posts.map((post: IPost) => {
          return (
            <PostCard
              user={post.user}
              id={post.id}
              title={post.title}
              description={post.body}
            ></PostCard>
          );
        })}
    </StyledPage>
  );
};

export default PostsPage;
