import './App.css';

import React, { useState } from 'react';

import TypingPage from './tabs/TypingPage/TypingPage'
import Timer from './Components/Timer'

import Music from './Components/backgroundnoise'

import Splash from "./Components/LightingMode";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#ffeee2",
  titleColor: "#3d5467",
  tagLineColor: "black",
  toggleIcon: "#ffc759",
  toggleBg:"#3d5467",
};

const DarkTheme = {
  pageBackground: "#3d5467",
  titleColor: "#ffeee2",
  tagLineColor: "lavender",
  toggleIcon: "#ffc759",
  toggleBg:"#3d5467",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}



function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
      <TypingPage/>
      <Music/>
    </ThemeProvider>
  );
}

export default App;
