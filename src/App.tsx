import styled, { ThemeConsumer } from 'styled-components';
import './App.css';
import CardList from './Widgets/CardList/CardList';
import Header from './Widgets/Header/Header';
import { Themes } from "./Themes/Themes";
import { ThemeProvider } from "styled-components";
import { useState } from 'react';

interface ThemeState  {
  design: any;
  toggleTheme: ()=> void;
}

const Interface = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #4589E1;
    
`
function App() {
  const [theme, setTheme] = useState(Themes.light)
  const toggleTheme = () => {
    setTheme(theme === Themes.light ? Themes.dark : Themes.light)
  };

  const themeState: ThemeState = {
    design: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeProvider theme={themeState}>
      <Interface>
        <Header />
        <CardList />
      </Interface>
    </ThemeProvider>
  );
}

export default App;
