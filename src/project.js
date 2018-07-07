let index = 1

const projectFactory = (name) => {
  const tasks = []
  
  const id = index ++

  const add = task => {
    tasks.push(task)
  }

  const project = { id, name, tasks, add }

  return project
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
