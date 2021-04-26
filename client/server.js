// https://nextjs.org/docs/advanced-features/custom-server
//  Create Custom sever 

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    // Apply proxy in Dev mode
    if(dev) {
        server.use("/api", createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true
        }))
    }

    // Apply convert all backend url to frontend url
    server.all("*", (req, res) => {
        return handle(req, res)
    })

    // Server listen
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:8000')
    })
  })
  .catch((err) => console.log('Error: ', err))
