import React from "react";
import {
  StyledCommentBox,
  StyledTitle,
  StyledDescription,
  StyledInfoBox,
  StyledInfoText,
} from "./styles";
import { IComment } from "../../types/types";

const Comment: React.FC<IComment> = ({
  id,
  postId,
  name,
  body,
  email,
  date,
}) => {
  return (
    <StyledCommentBox>
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription>{body}</StyledDescription>
      <StyledInfoBox>
        <StyledInfoText>{email}</StyledInfoText>
        <StyledInfoText>{date ? date : "--/--/--"}</StyledInfoText>
      </StyledInfoBox>
    </StyledCommentBox>
  );
};

export default Comment;
