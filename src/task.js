let index = 1

const taskFactory = (name, desc, dueDate, priority, projectId = null, complete = false) => {
  const id = index ++

  return { id, name, desc, dueDate, priority, projectId, complete }
}


const Task = (() => {
  const list = []
  
  const find = id => list.find(task => task.id == id)

  const build = (name, desc, dueDate, priority, projectId, complete) => taskFactory(name, desc, dueDate, priority, projectId, complete)

  const create = (name, desc, dueDate, priority, projectId , complete) => {
    const task = taskFactory(name, desc, dueDate, priority, projectId, complete)
    list.push(task)
    return task
  }

  return {
    build, create, find,
    get all() {
     return list
    } 
  }
})()

export default Task
