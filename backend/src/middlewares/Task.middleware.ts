import { NextFunction, Request, Response } from 'express';



export default class TaskValidations {

  static validateTask(req: Request, res:Response, next: NextFunction): Response | void {
    const { taskName, tag, startDate, dueDate, priority, description} = req.body

    const allFields = [taskName, tag, startDate, dueDate, priority, description];


    const errorFiled = allFields.some((e) => !e)

    if (errorFiled) return res.status(400).json({ message: 'Preencha todos os valores'})
    
    const regexDate = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

    if (!regexDate.test(startDate) || !regexDate.test(dueDate)) return res.status(400)
    .json({ message: 'Datas não preenchidas corretamente'})

    next()
  }

}
