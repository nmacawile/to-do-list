let index = 1

const taskFactory = (projectId, name, desc, dueDate, priority, complete = false) => {
  const id = index ++

  return { projectId, id, name, desc, dueDate, priority, complete }
}


const Task = (() => {
  const list = []
  
  const find = id => list.find(task => task.id == id)

  const create = (projectId, name, desc, dueDate, priority, complete) => {
    const task = taskFactory(projectId, name, desc, dueDate, priority, complete)
    list.push(task)
    return task
  }

  return {
    find, create,
    get all() {
     return list
    } 
  }
})()

export default Task
