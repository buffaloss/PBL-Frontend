import React, {useState} from 'react';
import {HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward, ArrowRight,HeroImg} from './HeroElements';
import { Button } from '../ButtonElements';
import Unicorn from '../../pictures/unicorn-svgrepo-com.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
</style>
const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        
      <HeroContent> 
        <HeroH1>
            From zero <br/>
            to a unicorn
        </HeroH1>
        <HeroP>
            Innovate, accelerate, raise capital<br/>
            and build global startups along with<br/>
            the largest community of founders<br/>
            and experts
        </HeroP>
        <HeroBtnWrapper>
            <Button to = "Learn more" onMouseEnter = {onHover} 
            onMouseLeave = {onHover}>
              Learn more {hover ? <ArrowForward/> : <ArrowRight />}  
            </Button>
        </HeroBtnWrapper>
        <HeroImg>
            <img style = {{width: 300, height: 300}} src = {Unicorn}/>
        </HeroImg>
        
      </HeroContent>
        
    </HeroContainer>
  )
}

export default HeroSection;