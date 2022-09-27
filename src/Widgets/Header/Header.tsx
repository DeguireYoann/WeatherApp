import { FC } from "react";
import styled from "styled-components";
import Toggle from "../../Components/Common/Toggle";

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${x => x.theme.design.color.accentBackground};
    box-shadow: 10px 0 10px rgba(0,0,0,0.25);
`
// test

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    padding: 1em;
`

const AppTitle = styled.h1`
    color: ${x => x.theme.design.color.title};
`

const Header: FC = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <AppTitle>MyWeatherApp</AppTitle>
                <Toggle/>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;