import { Main, MainHeading, WelcomeText } from './styles';
// import head component
import Head from 'next/head';
const MainText = () => {
  return (

    <>
       <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
      </Head>
      <Main>
        <MainHeading>
          From zero <br />
          to a unicorn
        </MainHeading>
        <WelcomeText>
          Innovate, accelerate, raise capital<br />
          and build global startups along with<br />
          the largest community of founders<br />
          and experts
        </WelcomeText>

      </Main>
    </>
  )
}
export default MainText;