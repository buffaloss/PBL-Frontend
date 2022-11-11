import '../styles/globals.css'
import { NextUIProvider} from '@nextui-org/react'
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap grid to work

function MyApp({ Component, pageProps }) {
  return (
  <NextUIProvider>
  <Component {...pageProps} />
  </NextUIProvider>
  );
}

export default MyApp