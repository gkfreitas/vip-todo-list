import { connect } from "mongoose"

export default class MongoDB {

  constructor(){
    this.main()
  }

  public async main() {
    try {
      connect(
        'mongodb+srv://gkfreitas:GdC3ZNJSJQy79UZf@cluster0.iprds1d.mongodb.net/?retryWrites=true&w=majority'
      )
      console.log('MongoDB conectado!')
    } catch (error) {
      console.log(`Erro: ${error}`)
    }
  }
  

  
}