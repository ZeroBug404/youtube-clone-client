import React from "react";
import styled from "styled-components";
import thumb from "../images/thumb.jpg";
import ChanelImg from '../images/Copy_of_Copy_of_Unnamed_Design-removebg-preview.png'
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  cursor: pointer;
  margin-bottom: ${(props)=>props.type==='sm'?'10px':'15px'};
  display: ${(props)=>props.type==='sm'&&'flex'};
  gap:10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props)=>props.type==='sm'?'120px':'202px'};
  background-color: #ccc;
`;
const Details = styled.div`
display: flex;
justify-content: space-between;
margin-top: ${(props)=>props.type==='sm'?'0px':'10px'};
`;
const ChanelImage = styled.img`
width: 32px;
height: 32px;
margin-right: 8px;
display: ${(props)=>props.type==='sm'?'none':''};
`;

const Texts = styled.div`

`;
const Title = styled.h1`
  font-size: ${(props)=>props.type==='sm'?'14px':'16px'};
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
const ChanelName = styled.h2`
  /* font-size: 14px; */
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to='/video' style={{textDecoration: "none"}}>
    <Container type={type}>
      <Image type={type} src={thumb} />
      <Details type={type}>
        <ChanelImage type={type} src={ChanelImg}/>
        <Texts>
            <Title type={type}>
              To create a productioin build, use npm run build.....
            </Title>
            <ChanelName>
                STube
            </ChanelName>
            <Info>
                660,908 views . 1 day ago
            </Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
};

export default Card;
