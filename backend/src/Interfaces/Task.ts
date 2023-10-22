export default interface ITask {
  taskName: string
  tag: string
  startDate: Date
  dueDate: Date
  priority: 'Alta' | 'Média' | 'Baixa'
  description: string
}