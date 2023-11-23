import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/*// @ts-ignore*/}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
      <body className={"font-body"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
