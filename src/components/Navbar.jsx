import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  /* width: 95%; */
  padding: 0px 20px;
  background-color: ${({theme}) => theme.bgLighter};
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  align-items: center;
`;
const Search = styled.div`
  padding: 5px 0px;
  width: 33rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid gray;
  border-radius: 5px;
  `;
const Input = styled.input`
    width: 30rem;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0px 12px;
    font-size: 14px;
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
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search"/>
          <SearchOutlinedIcon />
        </Search>
        <Link to='/signin' style={{textDecoration:'none'}}>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
