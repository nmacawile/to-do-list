let index = 1

const taskFactory = (name, dueDate, priority, projectId, complete = false) => {
  const id = index ++

  return { id, name, dueDate, priority, projectId, complete }
}


const Task = (() => {
  const list = []

  const build = name => taskFactory(name)

  const create = (name, dueDate, priority, projectId, complete) => {
    const task = taskFactory(name, dueDate, priority, projectId, complete)
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
