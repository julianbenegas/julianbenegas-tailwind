import { AppProps } from 'next/app'
import 'css/global.css'
import 'css/tailwind.css'
import 'css/tailwind-utils.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
