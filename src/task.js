import Project from "./project"

let index = 1

const taskFactory = (projectId, name, desc, dueDate, priority, complete = false) => {
  const id = index ++
  
  const project = () => Project.find(projectId)

  return { projectId, id, name, desc, dueDate, priority, complete, project }
}


const Task = (() => {
  const list = []
  
  const find = id => list.find(task => task.id == id)
  
  const destroy = id => { 
    const task = find(id)
    task.project().remove(task)
    const taskIndex = list.indexOf(find(id))
    list.splice(taskIndex, 1)
  }

  const create = (projectId, name, desc, dueDate, priority, complete) => {
    const task = taskFactory(projectId, name, desc, dueDate, priority, complete)
    list.push(task)
    return task
  }

  return {
    find, create, destroy,
    get all() {
     return list
    } 
  }
})()

export default Task
