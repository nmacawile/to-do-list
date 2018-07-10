import LayoutEffects from "./layout-effects"
import Project from "./project"
import Task from "./task"
import DOMHandler from "./dom-handler"

const projectForm = document.querySelector("#new-project-form")
projectForm.addEventListener('submit', e => {
  e.preventDefault()
  generateProject(document.forms["project"]["name"].value)
  DOMHandler.closeModal("#new-project-modal")
  projectForm.reset()
})

const taskForm = document.querySelector("#new-task-form")
taskForm.addEventListener('submit', e => {
  e.preventDefault()
  const name = document.forms["task"]["name"].value
  const desc = document.forms["task"]["description"].value
  const dueDate = document.forms["task"]["due_date"].value
  const priority = document.forms["task"]["priority"].value
  generateTask(name, desc, dueDate, priority)
  DOMHandler.closeModal("#new-task-modal")
  taskForm.reset()
  DOMHandler.resetSliderLabel()
})

document.addEventListener('click', e => {
  if (e.target && e.target.classList.contains("sidebar-link"))
    loadProjectData(e.target.dataset.id)
})

const generateProject = name => {
  let project = Project.create(name)
  DOMHandler.createProject(project)
  loadProjectData(project.id)
  return project
}

const generateTask = (name, desc, dueDate, priority) => {
  let task = Task.create(name, desc, dueDate, priority)
  Project.active.add(task)
  console.log(task)
  DOMHandler.createTask(task)
  return task
}

// COMPLETION STATUS TOGGLER
document.addEventListener('change', e => {
  if(e.target && e.target.classList.contains("hidden-checkbox") && e.target.checked) {
    let taskDOM = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
    let taskId = taskDOM.dataset["task_id"]
    Task.find(taskId).complete = true
    taskDOM.classList.add("complete")
  } 
  else if(e.target && e.target.classList.contains("hidden-checkbox") && !e.target.checked){
    let taskDOM = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
    let taskId = taskDOM.dataset["task_id"]
    Task.find(taskId).complete = true
    taskDOM.classList.remove("complete")
  }   
})

const loadProjectData = id => {
  let project = Project.find(id)
  Project.active = project
  document.querySelector(".project-name u").textContent = project.name
  document.querySelectorAll(".sidebar-link").forEach(link => link.classList.remove("active-sidebar-link"))
  document.querySelector(`[data-id="${id}"]`).classList.add("active-sidebar-link")
  DOMHandler.closeSidebar()
  loadTasks(project)
}

const loadTasks = project => {
  DOMHandler.clearTasks()
  project.tasks.forEach(task => {
    DOMHandler.createTask(task)
  })
}


let p = generateProject("Default Project")
Project.active = p

let task1 = p.newTask("Task1", "description", "later", "3", true)
let task2 = p.newTask("Task2", "description", "later", "2", "false")
let task3= p.newTask("Task3", "description", "yesterday", "1")
let task4 = p.newTask("Task4", "description", "later", "3")

let q = generateProject("Second Project")
let task5 = q.newTask("Task5", "description", "much later", "3")
let task6 = q.newTask("Task6", "description", "probably never", "2")
let task7 = q.newTask("Task7", "description", "yesterday", "1")
let task8 = q.newTask("Task8", "description", "later", "3")
loadProjectData(q.id)
  
