import React from "react";
import styled from "styled-components";
import avatar from "../images/Copy_of_Copy_of_Unnamed_Design-removebg-preview.png";
import Comment from "./Comment";

const Conatiner = styled.div``;
const NewComment = styled.div`
display: flex;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
`;
const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    outline: none;
    width: 100%;
    margin-left: 8px;
`;

const Comments = () => {
  return (
    <Conatiner>
      <NewComment>
        <Avatar src={avatar} />
        <Input type="text" placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Conatiner>
  );
};

export default Comments;
