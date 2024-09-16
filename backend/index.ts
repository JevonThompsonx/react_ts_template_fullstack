import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
  return c.text("It's aliiiive!!")
})

const port = process.env.PORT || 8080

console.log(`Listening on port: ${port}`)

export default { 
  port: port, 
  fetch: app.fetch, 
} 