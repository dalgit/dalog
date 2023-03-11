import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/androidstudio.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
