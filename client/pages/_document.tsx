import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
    <Html lang="en">
      <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin={"true"}/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5057991032154669"
              crossOrigin="anonymous"></script>
      <body className={"font-body"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
