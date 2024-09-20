import { Hono } from 'hono'
import { cors } from 'hono/cors'
const app = new Hono()

// app.use('/static/*', serveStatic({ root: './' }))
// ^ how you'd go about serving static files in a folder named 'static'
const port = process.env.PORT || 8080
app.use(cors())
app.post('/api', async (c) => {
  console.log('Request from backend')
})
Bun.serve({
  port: port,
  fetch: app.fetch
})

console.log(`Running on port ${port}`)



