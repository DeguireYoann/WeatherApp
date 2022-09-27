
import { FC } from 'react'
import styled, { css } from 'styled-components'


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

const CardHeading = styled.div`
`

const ImageContainer = styled.div`
    position: relative;
`

const WeatherType = styled.p`   
    position: absolute;
    top: 125px;
    right: 0;
    font-size: 1.2rem;
    font-weight: 700;
    transform: rotate(90deg);
`

const WeatherWrapper = styled.div`
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
`

const Degree = styled.span`
    width: 100%;
    font-size: 3rem;
    font-weight: 700;
`

const WeatherCard: FC<CardProps> = (props) => {

    const Card = styled.div`
        ${baseCardStyles()}

        ${props.type === "sunny" && (css`
            background-color: #FA9FBD;
        `
        )}
        ${props.type === "cloudy" && (css`
            background-color: #31A752;
        `
        )}
        ${props.type === "rainy" && (css`
            background-color: #0F63FF;
        `
        )}
    `
    return (
            <Card>
                <CardHeading>
                    <p>{props.date}</p>
                    <p>{props.location}</p>
                </CardHeading>
                <img src={`/images/${props.type}.png`} alt="rain illustration"/>
                <WeatherType>{props.type}</WeatherType>
                <WeatherWrapper>
                    <Degree>{props.temp.degree}°</Degree>
                    <div><span>Hum.</span><span>{props.temp.humidity}</span></div>
                    <div><span>Prec.</span><span>{props.temp.precipitation}</span></div>
                    <div><span>Fore.</span><span>{props.temp.forecast}</span></div>
                </WeatherWrapper>
            </Card>
    )
}

export default WeatherCard;