import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('some changes made!')
})

export default app
