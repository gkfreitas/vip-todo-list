import mongoose from 'mongoose'

export default class MongoDB {

  public mongoose: mongoose.Mongoose

  constructor(){
    this.mongoose = mongoose

    this.main()
  }

  public main() {
    try {
      this.mongoose.connect(
        'mongodb+srv://gkfreitas:GdC3ZNJSJQy79UZf@cluster0.iprds1d.mongodb.net/?retryWrites=true&w=majority'
      )

      console.log('MongoDB conectado!')
    } catch (error) {
      console.log(`Erro: ${error}`)
    }
  }
  
}