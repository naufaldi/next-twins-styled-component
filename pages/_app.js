import GlobalStyles from './../styles/GlobalStyles'

const MyApp = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default MyApp
