import '../styles/globals.css'
import { NextUIProvider} from '@nextui-org/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {SessionProvider} from "next-auth/react"; //for bootstrap grid to work
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
      <SessionProvider
          // Provider options are not required but can be useful in situations where
          // you have a short session maxAge time. Shown here with default values.
          session={pageProps.session}
      >
        <NextUIProvider>
          <Component {...pageProps} />
            <ToastContainer />
        </NextUIProvider>
      </SessionProvider>
  );
}

export default MyApp
