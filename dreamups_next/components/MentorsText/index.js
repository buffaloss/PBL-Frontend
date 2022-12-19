import { Main, MainHeading, WelcomeText} from './styles';
import Head from 'next/head';

const MentorsText = () => {
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
            World class experts<br/>
            and mentors
            </MainHeading>
            <WelcomeText>
            Find qualified advice and connect with<br/>
            experts and mentors in any business field<br/>
            </WelcomeText>
        </Main>
      </>
    )
  }
  export default MentorsText;