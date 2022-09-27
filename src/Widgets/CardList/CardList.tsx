import { FC } from 'react'
import styled from 'styled-components'
import WeatherCard from '../../Components/WeatherCard/WeatherCard'


const SunnyCard = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 400px;
padding: 1em;
margin: 0 1em;
border-radius: 50px;
background-color: #FA9FBD;
box-shadow: 4px 4px 15px rgba(0,0,0,0.25);
`

const CloudyCard = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 400px;
padding: 1em;
margin: 0 1em;
border-radius: 50px;
background-color: #31A752;
box-shadow: 4px 4px 15px rgba(0,0,0,0.25);
`

const RainyCard = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 400px;
padding: 1em;
margin: 0 1em;
border-radius: 50px;
background-color: #0F63FF;
box-shadow: 4px 4px 15px rgba(0,0,0,0.25);
`

const CardListContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
`

const CardListWrapper = styled.div`
display: flex;
align-items: center;
flex-grow: 1;
width: 100%;
padding: 3em 1em;
margin: auto;
`


const CardList: FC = () => {
    const date = "February 24, Wednesday";
    const location = "Montreal";
    const temp = {
        degree: "21",
        humidity: "20%",
        precipitation: "0 mm",
        forecast: "0%"
    }
    return (
        <CardListContainer>
            <CardListWrapper>
                <WeatherCard type="sunny" date={date} location={location} temp={temp} />
                <WeatherCard type="cloudy" date={date} location={location} temp={temp} />
                <WeatherCard type="rainy" date={date} location={location} temp={temp} />
            </CardListWrapper>
        </CardListContainer>
    )
}

export default CardList;