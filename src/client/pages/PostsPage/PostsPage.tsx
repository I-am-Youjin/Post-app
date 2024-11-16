import React from "react";
import PostCard from "../../components/PostCard/PostCard";

const PostsPage = () => {
  return (
    <div>
      <PostCard
        id={1}
        user="Varya"
        title="Darov"
        description="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi doloremque incidunt atque doloribus possimus, accusamus culpa asperiores iste dolore eveniet suscipit odio officiis est cum ab minima? Eaque, doloremque.
"
      ></PostCard>
      <PostCard
        id={1}
        user="Varya"
        title="Darov"
        description="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi doloremque incidunt atque doloribus possimus, accusamus culpa asperiores iste dolore eveniet suscipit odio officiis est cum ab minima? Eaque, doloremque.
"
      ></PostCard>
      <PostCard
        id={1}
        user="Varya"
        title="Darov"
        description="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi doloremque incidunt atque doloribus possimus, accusamus culpa asperiores iste dolore eveniet suscipit odio officiis est cum ab minima? Eaque, doloremque.
"
      ></PostCard>
    </div>
  );
};

export default PostsPage;
