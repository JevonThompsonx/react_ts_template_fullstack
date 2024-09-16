import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => {
  return c.text("It's aliiiive!!")
})

const port = process.env.PORT || 8080
Bun.serve({
  fetch: app.fetch,
  port: Number(port),
  development: true,
});

console.log(`Listening on port: ${port}`)
export default app
