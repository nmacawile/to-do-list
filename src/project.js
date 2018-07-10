import Task from "./task"
let index = 1

const projectFactory = name => {
  const tasks = []
  
  const id = index ++
  
  const contains = task => tasks.find(content => content.id === task.id)

  const add = task => {
    if (!contains(task)) {
      task.projectId = id
      tasks.push(task)
    }
  }
  
  const remove = task => {
    const taskIndex = tasks.indexOf(task)
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1)
    }
  }
  
  const newTask = (name, desc, dueDate, priority, complete) => {
    const task = Task.create(id, name, desc, dueDate, priority, complete)
    add(task)
    return task
  }

  return { id, name, tasks, add, remove, newTask }
}

const Project = (() => {
  const list = []
  
  let active
  
  const find = id => list.find(project => project.id == id)
  
  const create = name => {
    const project = projectFactory(name)
    list.push(project)
    return project
  }

  return {
    find, create, active,
    get all() {
     return list
    } 
  }
})()

export default Project
