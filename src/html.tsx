import React from 'react'

interface HTMLProps {
  htmlAttributes: React.HTMLAttributes<HTMLHtmlElement>
  headComponents: Array<JSX.Element>
  bodyAttributes: React.HTMLAttributes<HTMLBodyElement>
  preBodyComponents: Array<JSX.Element>
  body: string
  postBodyComponents: Array<JSX.Element>
}

const HTML = (props: HTMLProps) => (
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
      <link rel="alternate" type="application/rss+xml" href="/index.xml" />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
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

export default HTML
