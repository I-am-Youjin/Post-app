import React from "react";
import { StyledPage } from "./styles";
import PostCard from "../../components/PostCard/PostCard";
import { useSelector } from "react-redux";
import { IPost } from "../../types/types";

const FavoritePostsPage = () => {
  const favoritePosts = useSelector((state: any) => state.posts.favoritePosts);
  return (
    <StyledPage>
      {favoritePosts &&
        favoritePosts.map((post: IPost) => {
          return (
            <PostCard
              id={post.id}
              user={post.user}
              title={post.title}
              description={post.body}
            />
          );
        })}
    </StyledPage>
  );
};

export default FavoritePostsPage;
