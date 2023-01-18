import { Main, MainHeading, WelcomeText } from './styles';
// import head component
import Head from 'next/head';
const MainText = () => {
  return (

    <>
       <Head>
         
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