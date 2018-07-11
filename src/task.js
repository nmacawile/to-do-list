let index = 1

const Task = (projectId, name, desc, dueDate, priority, complete = false) => {
  const id = index ++

  return { id, name, desc, dueDate, priority, complete, projectId }
}

export default Task
