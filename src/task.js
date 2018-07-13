import Storage from "./storage"
import Seeds from "./seeds"

let index = Storage.loadIndex("task") || Seeds.taskId()
const getIndex = () => {
  let out = index
  Storage.saveIndex("task", ++ index)
  return out
}

const Task = (projectId, name, desc, dueDateString, priority, complete = false) => {
  const id = getIndex()
  
  const dueDate = new Date(dueDateString)

  return { id, name, desc, dueDate, priority, complete, projectId }
}

export default Task
