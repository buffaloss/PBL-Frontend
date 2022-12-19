import React, { useRef, useCallback } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import {EventsCarouselWrapper, EventsTextBlock, EventsSlider, EventCard} from './styles';
import { Col, Row } from "reactstrap";
import Head from "next/head";

const EventsCarousel = () => {


    const swiperRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    return (
        <>
         <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
      </Head>
      
        <EventsCarouselWrapper>

            <div className="row">
                <Col xxl="3">
                    <EventsTextBlock>
                        <div>
                            <h1 className="title">Lattest</h1>
                            <h1 className="subtitle">Check our open programs and upcoming events</h1>
                        </div>

                        <div className="slider-navigation">
                            <button onClick={() => handlePrev()}>Prev</button>
                            <button onClick={() => handleNext()}>Next</button>
                        </div>
                    </EventsTextBlock>
                </Col>
                <Col xxl="9">
                    <EventsSlider>
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={2.3}
                            onSlideChange={() => console.log('slide change')}
                            ref={swiperRef}
                            loop={true}
                            >
                            <SwiperSlide>
                                <EventCard>
                                    <h2 className="event-location">Chisinau</h2>
                                </EventCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <EventCard>

                                </EventCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <EventCard></EventCard>
                            </SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>

                        </Swiper>
                    </EventsSlider>
                </Col>
            </div>
        </EventsCarouselWrapper>
        </>
    )



}

export default EventsCarousel;
