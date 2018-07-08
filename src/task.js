let index = 1

const taskFactory = (name, desc, dueDate, priority, projectId = null, complete = false) => {
  const id = index ++

  return { id, name, desc, dueDate, priority, projectId, complete }
}


const Task = (() => {
  const list = []

  const build = name => taskFactory(name)

  const create = (name, desc, dueDate, priority, projectId, complete) => {
    const task = taskFactory(name, desc, dueDate, priority, projectId, complete)
    list.push(task)
    return task
  }

  return {
    build, create,
    get all() {
     return list
    } 
  }
})()

export default Task
