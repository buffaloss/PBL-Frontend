import { Main, MainHeading, WelcomeText } from './styles';
// import head component
import Head from 'next/head';
const MainText = () => {
  return (

    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
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