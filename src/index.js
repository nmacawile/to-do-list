import LayoutEffects from "./layout-effects"
import Project from "./project"
import Task from "./task"
import DOMHandler from "./dom-handler"

const projectForm = document.querySelector("#new-project-form")
projectForm.addEventListener('submit', e => {
  e.preventDefault()
  const name = document.forms["project"]["name"].value
  let project = Project.create(name)
  DOMHandler.createProject(project)
  DOMHandler.closeModal(document.querySelector("#new-project-modal"))
  projectForm.reset()
})

const taskForm = document.querySelector("#new-task-form")
taskForm.addEventListener('submit', e => {
  e.preventDefault()
  const name = document.forms["task"]["name"].value
  const desc = document.forms["task"]["description"].value
  const dueDate = document.forms["task"]["due_date"].value
  const priority = document.forms["task"]["priority"].value
  let task = Task.create(name, desc, dueDate, priority)
  DOMHandler.createTask(task)
  DOMHandler.closeModal(document.querySelector("#new-task-modal"))
  taskForm.reset()
  DOMHandler.resetSliderLabel()
})

