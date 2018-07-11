import Task from "./task"
let index = 1

const projectFactory = name => {
  let tasks = []
  
  const id = index ++
  
  const contains = task => tasks.find(content => content.id == task.id)
  
  const findTask = taskId => tasks.find(content => content.id == taskId)
  
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
  
  const removeAll = () => {
    tasks.forEach(task => task.projectId = null)
    tasks.length = 0
  }
  
  const newTask = (name, desc, dueDate, priority, complete) => {
    const task = Task(id, name, desc, dueDate, priority, complete)
    add(task)
    return task
  }

  let project = { id, name, tasks, findTask, add, remove, removeAll, newTask }
  return project
}

const Project = (() => {
  const list = []
  
  let active
  
  const find = id => list.find(project => project.id == id)
  
  const destroyActive = () => {
    let project = Project.active
    project.removeAll()
    destroy(project)
    Project.active = null
  }
  
  const create = name => {
    const project = projectFactory(name)
    list.push(project)
    return project
  }
  
  const destroy = projectId => {
    let project
    project = (typeof projectId === "string" || typeof projectId === "number") ? find(projectId) : projectId
    const projectIndex = list.indexOf(project)
    list.splice(projectIndex, 1)
  }

  return {
    find, destroyActive, create, active,
    get all() {
     return list
    } 
  }
})()

export default Project
