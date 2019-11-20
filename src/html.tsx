import React from 'react'

interface HTMLProps {
  htmlAttributes: React.HTMLAttributes<HTMLHtmlElement>
  headComponents: Array<JSX.Element>
  bodyAttributes: React.HTMLAttributes<HTMLBodyElement>
  preBodyComponents: Array<JSX.Element>
  body: string
  postBodyComponents: Array<JSX.Element>
}

export default function HTML(props: HTMLProps) {
  return (
    <html lang="ko" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <link rel="stylesheet" href="https://cdn.shk.im/webcore/v19.css" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://blog.niceb5y.net/index.xml"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          이 블로그는 JavaScript를 사용할 때 더 좋은 경험을 제공합니다.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script async src="https://cdn.shk.im/webcore/v19.js"></script>
      </body>
    </html>
  )
}
