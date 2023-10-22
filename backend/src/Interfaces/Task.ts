export default interface ITask {
  taskName: string
  tag: string
  startDate: string
  dueDate: string
  priority: 'Alta' | 'Média' | 'Baixa'
  description: string
}