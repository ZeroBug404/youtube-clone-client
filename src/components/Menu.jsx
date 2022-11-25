import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "../images/logo.png";


const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bgLighter};
  height: 100vh;
  color: ${({theme}) => theme.text};
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 0px 14px;
  /* font-size: 12px; */
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin: 7px 0px;
`;
const Img = styled.img`
  
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 5px 0px;
  font-size: 11.5px;

  &:hover{
    background-color:  ${({theme}) => theme.soft};
  }
`;
const Hr = styled.div`
  margin: 12px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`;
const Login = styled.p`
  font-size: 12px;
`;
const Button = styled.button`
  margin: 5px 0px;
  padding: 5px 8px;
  width: 95px;
  border: 2px solid #3ea6ff;
  background-color: transparent;
  color: #3ea6ff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Menu = ({darkMode, setDarkMode}) => {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{textDecoration: "none", color:"inherit"}}>
        <Logo>
          <Img width={"35px"} src={logo}></Img>
          STube
        </Logo>
        </Link>

        <Item>
            <HomeIcon style={{ fontSize: 15 }}/>
            Home
        </Item>
        <Item>
            <ExploreIcon style={{ fontSize: 15 }}/>
            Explore
        </Item>
        <Item>
            <SubscriptionsIcon style={{ fontSize: 15 }}/>
            Subscription
        </Item>
        <Hr />
        <Item>
            <VideoLibraryIcon style={{ fontSize: 15 }}/>
            Library
        </Item>
        <Item>
            <RestoreIcon style={{ fontSize: 15 }}/>
            History
        </Item>

        <Hr />
        <Login>
        Sign In to Like, Comment and Subscribe
        </Login>
        <Link to='/signin' style={{textDecoration:'none'}}>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
        </Link>
        <Hr />

        <Item>
            <LibraryMusicOutlinedIcon style={{ fontSize: 15 }}/>
            Music
        </Item>
        <Item>
            <SportsBasketballOutlinedIcon style={{ fontSize: 15 }}/>
            Sorts
        </Item>
        <Item>
            <SportsEsportsOutlinedIcon style={{ fontSize: 15 }}/>
            Gaming
        </Item>
        <Item>
            <MovieCreationOutlinedIcon style={{ fontSize: 15 }}/>
            Movies
        </Item>
        <Item>
            <ArticleOutlinedIcon style={{ fontSize: 15 }}/>
            News
        </Item>
        <Item>
            <LiveTvOutlinedIcon style={{ fontSize: 15 }}/>
            Live
        </Item>
        <Hr />
        <Item>
            <SettingsOutlinedIcon style={{ fontSize: 15 }}/>
            Settings
        </Item>
        <Item>
            <FlagOutlinedIcon style={{ fontSize: 15 }}/>
            Reort
        </Item>
        <Item>
            <HelpOutlineOutlinedIcon style={{ fontSize: 15 }}/>
            Help
        </Item>
        <Item onClick={handleDarkMode}>
            <HomeIcon style={{ fontSize: 15 }}/>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>

      </Wrapper>
    </Container>
  );
};

export default Menu;
