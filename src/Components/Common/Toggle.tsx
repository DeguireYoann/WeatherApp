import { FC, useState } from "react";
import styled, { ThemeContext } from "styled-components";

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  .theme {
    margin: 0 .5em;
    color: #ccc;
    font-size: .75em;
    font-weight: 700;
    transition: all 0.4s ease-in-out;
  }

  span.light-span {
    color: #4589E1;
  }

  span.dark-span {
    color: #FA9FBD;
  }
`

const ToggleLabel = styled.label`
--width: 50px;
--height: calc(var(--width) / 2);

position: relative;
display: inline-block;
width: var(--width);
height: var(--height);
border-radius: var(--height);
cursor: pointer;

    input {
    display: none;
  }
  
    .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--height);
    background-color: #fff;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease-in-out;
  }
  
    .slider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5px;
    width: calc(var(--height) * 0.6);
    height: calc(var(--height) * 0.6);
    border-radius: calc(var(--height) / 2);
    background-color: #ccc;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease-in-out;
    transform: translateY(-50%);
  }
  
    input:checked+.slider {
    background-color: #ccc;
  }
  
    input:checked+.slider::before {
      background-color: #fff;
      transform: translate(25px, -50%);
  }
  
    .labels {
    position: absolute;
    top: 8px;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-family: sans-serif;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
  }
  
    .labels::after {
    content: attr(data-off);
    position: absolute;
    right: 5px;
    color: #4d4d4d;
    opacity: 1;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease-in-out;
  }
  
    .labels::before {
    content: attr(data-on);
    position: absolute;
    left: calc(var(--height) - var(--width) + 2px);
    color: #ffffff;
    opacity: 0;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
    transition: all 0.4s ease-in-out;
  }
  
    input:checked~.labels::after {
    opacity: 0;
    transform: translateX(calc(var(--width) - var(--height)));
  }
  
    input:checked~.labels::before {
    opacity: 1;
    transform: translateX(calc(var(--width) - var(--height)));
  }
  
`;

const Toggle: FC = () => {

  const [isLight, setIsLight] = useState(true)

    const setTheme = () => {
      setIsLight(!isLight)
    }
  
    return (

      <ThemeContext.Consumer>
      {({toggleTheme}) => (
      <ToggleWrapper>
        <span className={`theme ${isLight ? "light-span" : ""}`}>Light</span>
        <ToggleLabel>
          <input type="checkbox" value="isLight" onChange={() => {
            setTheme();
            toggleTheme();
            }} 
          />
          <span className="slider"></span>
        </ToggleLabel>
        <span className={`theme ${!isLight ? "dark-span" : ""}`}>Dark</span>
        </ToggleWrapper>
      )}
    </ThemeContext.Consumer>
    )
}

export default Toggle;
