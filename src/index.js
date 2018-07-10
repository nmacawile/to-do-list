import LayoutEffects from "./layout-effects"
import Project from "./project"
import Task from "./task"
import DOMHandler from "./dom-handler"
import Lib from "./dom-library"

// NEW PROJECT FORM
Lib.attachEvent("#new-project-form", e => {
  e.preventDefault()
  generateProject()
  closeProjectModal()
}, 'submit')

// NEW TASK FORM
Lib.attachEvent("#new-task-form", e => {
  e.preventDefault()
  generateTask()
  closeTaskModal()
}, 'submit')

const closeProjectModal = () => {
  DOMHandler.closeModal("#new-project-modal")
  Lib.find("#new-project-form").reset()
}

const closeTaskModal = () => {
  DOMHandler.closeModal("#new-task-modal")
  Lib.find("#new-task-form").reset()
  DOMHandler.resetSliderLabel()
}

// LOAD PROJECT
Lib.attachEvent(".sidebar-link", e => loadProjectData(e.target.dataset.id), 'click', true)

// COMPLETION STATUS TOGGLER
Lib.attachEvent(".hidden-checkbox", e => {
  let taskDOM = Lib.findAncestor(e.target, "task")
  let taskId = taskDOM.dataset["task_id"]
  if(e.target.checked) {
    Task.find(taskId).complete = true
    taskDOM.classList.add("complete")
  } 
  else if(!e.target.checked){
    Task.find(taskId).complete = false
    taskDOM.classList.remove("complete")
  }
}, 'change', true)

const generateProject = () => {
  let project = Project.create(document.forms["project"]["name"].value)
  DOMHandler.createProject(project)
  loadProjectData(project.id)
}

const generateTask = () => {
  let task = Project.active.newTask(...taskFormData())
  DOMHandler.createTask(task)
}

const taskFormData = () => {
  const name = document.forms["task"]["name"].value
  const desc = document.forms["task"]["description"].value
  const dueDate = document.forms["task"]["due_date"].value
  const priority = document.forms["task"]["priority"].value
  return [name, desc, dueDate, priority]
}

const loadProjectData = id => {
  let project = Project.find(id)
  Project.active = project
  loadTasks(project)
  DOMHandler.updateProjectTitle(project)
  DOMHandler.closeSidebar()
}

const loadTasks = project => {
  DOMHandler.clearTasks()
  project.tasks.forEach(task => DOMHandler.createTask(task))
}

let p = Project.create("Default Project")
DOMHandler.createProject(p)
Project.active = p

p.newTask("Task1", "description", "later", "3", true)
p.newTask("Task1", "description", "later", "3", true)
p.newTask("Task2", "description", "later", "2", "false")
p.newTask("Task3", "description", "yesterday", "1", false)
p.newTask("Task4", "description", "later", "3")

let q = Project.create("Second Project")
DOMHandler.createProject(q)
Project.active =  q
q.newTask("Task5", "description", "much later", "3")
q.newTask("Task6", "description", "probably never", "2")
q.newTask("Task7", "description", "yesterday", "1")
q.newTask("Task8", "description", "later", "3")

loadProjectData(Project.active.id)

  
