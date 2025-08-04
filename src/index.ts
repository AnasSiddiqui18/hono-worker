import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('hi from hono!')
})

export default app
