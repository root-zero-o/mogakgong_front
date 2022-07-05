import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          <title>모각공</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
