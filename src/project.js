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
      taskIndex.splice(taskIndex, 1)
    }
  }

  return { id, name, tasks, add }
}

const Project = (() => {
  const list = []

  const build = name => projectFactory(name)

  const create = name => {
    const project = projectFactory(name)
    list.push(project)
    return project
  }

  return {
    build, create,
    get all() {
     return list
    } 
  }
})()

export default Project
