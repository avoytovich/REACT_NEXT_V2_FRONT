import Document, { Head, Main, NextScript, Title } from 'next/document'

import stylesheet from 'antd/dist/antd.min.css'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <head>
        <title>Next Apollo Example</title>
      </head>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
        #components-layout-demo-top-side-2 .logo {
          width: 120px;
          height: 31px;
          background: #333;
          border-radius: 6px;
          margin: 16px 28px 16px 0;
          float: left;
        }
      `}</style>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}