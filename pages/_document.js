import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            {/* <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
            <script noModule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript>
            {/* <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
            <script noModule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script> */}
          </NextScript>
        </body>
      </Html>
    )
  }
}

export default MyDocument