import Task from "./task"
import Storage from "./storage"

let index = Storage.loadIndex("project") || 1
const getIndex = () => {
  let out = index
  Storage.saveIndex("project", ++ index)
  return out
}

const projectFactory = name => {
  return projectFunctions(projectData(name))
}

const projectData = name => {
  let tasks = []
  
  const id = getIndex()

  return { id, name, tasks }
}

const projectFunctions = project => {
  const contains = task => project.tasks.find(content => content.id == task.id)
  
  const findTask = taskId => project.tasks.find(content => content.id == taskId)
  
  const add = task => {
    if (!contains(task)) {
      task.projectId = project.id
      project.tasks.push(task)
    }
  }
  
  const save = () => Storage.save(project)
  
  const destroy = () => Storage.destroy(project.id)
  
  const remove = taskId => {
    const taskIndex = project.tasks.indexOf(findTask(taskId))
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1)
      save()
    }
  }
  
  const removeAll = () => {
    project.tasks.forEach(task => task.projectId = null)
    project.tasks.length = 0
  }
  
  const newTask = (name, desc, dueDate, priority, complete) => {
    const task = Task(project.id, name, desc, dueDate, priority, complete)
    add(task)
    save()
    return task
  }
  
  return { id: project.id, name: project.name, tasks: project.tasks, findTask, add, remove, removeAll, newTask, save, destroy }
}

const Project = (() => {
  let meta = Storage.loadMeta() || []
  
  const saveMeta = () => {
    Storage.saveMeta(meta)
  }
  
  const find = id => projectFunctions(Storage.load(id))
  
  const create = name => {
    const project = projectFactory(name)
    project.save()
    meta.push({ id: project.id, name: project.name })
    saveMeta()
    return project
  }
  
  const destroy = project => {
    const projectIndex = meta.indexOf(meta.find(m => m.id === project.id))
    meta.splice(projectIndex, 1)
    project.destroy()
    saveMeta()
  }

  return {
    find, create, meta, saveMeta, destroy
  }
})()

export default Project