import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/Theme";
import { Routes, Route } from "react-router-dom";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='home' element={<Home />}></Route>
              <Route path='video' element={<Video />}></Route>
              <Route path='signin' element={<SignIn />}></Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
