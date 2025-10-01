import mongoose from 'mongoose'

import config from './config/index.ts'
import app from './app.ts'

bootStrap().catch(err => console.log(err))

async function bootStrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Connected to MongoDB successfully')
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect to MongoDB', error)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootStrap()
