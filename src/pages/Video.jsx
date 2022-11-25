import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import React from "react";
import styled from "styled-components";
import Comments from "../components/Comments";
import chanelImage from "../images/Copy_of_Copy_of_Unnamed_Design-removebg-preview.png";
import Cards from '../components/Cards';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 15px 35px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.text}; ;
`;
const Details = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.textSoft};
  cursor: pointer;
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Hr = styled.div`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 10px 0px;
`;
const Chanel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChanelInfo = styled.div`
    display: flex;
    gap: 20px;
`;

const ChanelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`;
const ChanelName = styled.span`
font-weight: 400;
`;
const ChanelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px; 
font-size: 12px;
color: ${({ theme }) => theme.textSoft};
`;
const Description = styled.p`
font-size: 14px;
`;
const ChanelImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const Subscriber = styled.button`
background-color: #ff0000;
border: none;
height: max-content;
font-weight: 400;
color: white;
border-radius: 3px;
padding: 10px 20px;
cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width={"100%"}
            height="450px"
            src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>

        <Title>To create a productioin build, use npm run build.....</Title>
        <Details>
          <Info>660,908 views . 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> Like
            </Button>
            <Button>
              <ThumbDownAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ShareOutlinedIcon /> Share
            </Button>
            <Button>
              <LibraryAddOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Chanel>
          <ChanelInfo>
            <ChanelImg src={chanelImage} />
            <ChanelDetail>
                <ChanelName>
                    Zerobug
                </ChanelName>
                <ChanelCounter>
                    100k Subscribers
                </ChanelCounter>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit incidunt, quae maiores quas eveniet iure neque architecto nobis pariatur ad et.
                </Description>
            </ChanelDetail>
          </ChanelInfo>
          <Subscriber>Subscribe</Subscriber>
        </Chanel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
      </Recommendation>
    </Container>
  );
};

export default Video;
