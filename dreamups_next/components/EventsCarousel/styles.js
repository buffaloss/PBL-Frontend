import styled from "styled-components";

export const EventsCarouselWrapper = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 150px;
    @media only screen and (max-width: 1920px) {
        margin-bottom: 70px;
    }

`;


export const EventsTextBlock = styled.div`
    height: 500px;
    display: flex;
    font-family: 'Poppins';
    flex-direction: column;
    justify-content: space-between;
    padding-top : 15px;
    padding-bottom: 15px;
    .title{
        font-size: 25px;
    }
    @media only screen and (max-width: 1920px) {
        height: 400px;
    }

    .arrows{
        display: flex;
        flex-direction: row;
    }
    .subtitle{
        font-size: 18px;
    }

`;


export const EventsSlider = styled.div`
    width: 100%;
    display: flex;
`;

export const EventCard = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    padding: 16px;

    @media only screen and (max-width: 1920px) {
        height: 400px;
    }
       

    .event-location{
        font-size: 15px;
        text-align: center;
    }


`;


