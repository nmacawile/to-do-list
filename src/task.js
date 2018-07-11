import Storage from "./storage"

let index = Storage.loadIndex("task") || 1
const getIndex = () => {
  let out = index
  Storage.saveIndex("task", ++ index)
  return out
}

const Task = (projectId, name, desc, dueDate, priority, complete = false) => {
  const id = getIndex()

  return { id, name, desc, dueDate, priority, complete, projectId }
}

export default Task
