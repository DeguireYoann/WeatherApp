
import { FC } from 'react'
import styled, { css } from 'styled-components'
import {InjectableCss, StyledWrapper} from '../Common/StyledWrapper'


export interface CardProps {
    type: "sunny" | "cloudy" | "rainy";
    date: string;
    location: string;
    temp: {
        degree: string;
        humidity: string;
        precipitation: string;
        forecast: string;
    }
}

const baseCardStyles = () => css`
display: flex;
flex-direction: column;
position: relative;
width: 200px;
height: 400px;
padding: 50px 1em;
margin: 0 1em;
border-radius: 50px;
box-shadow: 4px 4px 15px rgba(0,0,0,0.25);
color: #fff;

    &:first-child {
        margin-left: 0;
    }
`
interface WeatherCardStyles {
    cardHeading: InjectableCss;
    imageContainer: InjectableCss;
    weatherWrapper: InjectableCss;
}

const styles: WeatherCardStyles = {
    cardHeading: {css:''},
    imageContainer: {
        css:`
            position: relative;
        `,},
    weatherWrapper: {
        css:`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 1em;

            ::before {
                content: '';
                position: absolute;
                width: 80%;
                height: 1px;
                right: 0;
                background-color: #fff;
            }

            div {
                display: flex;
                flex-direction: column;
                width: 30%;
            }
        `,},
}

const WeatherType = styled.p`   
    position: absolute;
    top: 125px;
    right: 0;
    font-size: 1.2rem;
    font-weight: 700;
    transform: rotate(90deg);
`



const Degree = styled.span`
    width: 100%;
    font-size: 3rem;
    font-weight: 700;
`

const WeatherCard: FC<CardProps> = (props) => {

    const Card = styled.div`
        ${baseCardStyles()};
        background-color: ${x => x.theme.design.weatherCard.background[props.type]};
    `
    return (
            <Card>
                <StyledWrapper {...styles.cardHeading}>
                    <p>{props.date}</p>
                    <p>{props.location}</p>
                </StyledWrapper>
                <img src={`/images/${props.type}.png`} alt="rain illustration"/>
                <WeatherType>{props.type}</WeatherType>
                <StyledWrapper {...styles.weatherWrapper}>
                    <Degree>{props.temp.degree}°</Degree>
                    <div><span>Hum.</span><span>{props.temp.humidity}</span></div>
                    <div><span>Prec.</span><span>{props.temp.precipitation}</span></div>
                    <div><span>Fore.</span><span>{props.temp.forecast}</span></div>
                </StyledWrapper>
            </Card>
    )
}

export default WeatherCard;