import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from "../Redux/rock-paper-scissors"
import RootLayout from './layout'


export default function App({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  </Provider>)
}
