import React, { useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/slices/postsSlice";
import { IPost } from "../../types/types";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts.allPosts);
  useEffect(() => {
    dispatch(fetchPosts() as any);
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post: IPost) => {
        return (
          <PostCard
            id={post.id}
            user="Varya"
            title={post.title}
            description={post.body}
          ></PostCard>
        );
      })}
    </div>
  );
};

export default PostsPage;
