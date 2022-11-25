import React from "react";
import styled from "styled-components";
import avatar from "../images/Copy_of_Copy_of_Unnamed_Design-removebg-preview.png";

const Conatiner = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 50%;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: ${({ theme }) => theme.textSoft};
`;
const Text = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Conatiner>
      <Avatar src={avatar} />
      <Detail>
        <Name>
          John Doe
          <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          ducimus cumque rem veritatis quia amet beatae culpa magnam vero alias.
        </Text>
      </Detail>
    </Conatiner>
  );
};

export default Comment;
