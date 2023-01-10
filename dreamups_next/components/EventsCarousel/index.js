import React, { useRef, useCallback } from "react";
import Link from "next/link";

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

            <div className="row mb-4">
                <Col xxl="3">
                    <EventsTextBlock>
                        <div>
                            <h1 className="title">Lattest</h1>
                            <h1 className="subtitle">Check our open programs and upcoming events</h1>
                        </div>

                        <div className="arrows">
                            <img src="previous.png" style={{width: '8%'}} onClick={() => handlePrev()}/>
                            <img src="next.png" style={{width: '8%'}} onClick={() => handleNext()}/>
                        </div>
                    </EventsTextBlock>
                </Col>
                <Col xxl="9">
                    <EventsSlider>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={2.3}
                            onSlideChange={() => console.log('slide change')}
                            ref={swiperRef}
                            loop={true}
                            >
                            <SwiperSlide>
                                <EventCard>
                                    <Link href="https://www.facebook.com/events/473750011408147" >
                                        <img src="Hackathon Incluziune și Accesibilitate..png" style={{width: '93%'}} />
                                        </Link>
                                </EventCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <EventCard>
                                    <Link href="https://www.facebook.com/events/840330217318267">
                                        <img src="InnovationJam.png" style={{width: '87%'}}/>
                                    </Link>
                                </EventCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <EventCard>
                                    <Link href="https://www.facebook.com/events/2105619506312889/?active_tab=about">
                                        <img src="SG Rooftop party.png" style={{width: '87%'}}/>
                                    </Link>
                                </EventCard>
                            </SwiperSlide>
                            <SwiperSlide>
                                <EventCard>
                                    <Link href="https://www.facebook.com/events/460353676115999/?ref=newsfeed">
                                        <img src="StartupGrind cu SMatei.png" style={{width: '87%'}} />
                                    </Link>
                                </EventCard>
                            </SwiperSlide>

                        </Swiper>
                    </EventsSlider>
                </Col>
            </div>
        </EventsCarouselWrapper>
        </>
    )



}

export default EventsCarousel;
