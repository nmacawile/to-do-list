import Sortable from "sortablejs"
// SHOW/HIDE SIDEBAR TOGGLER
const menuButton = document.querySelector(".menu-button")
const sidebar = document.querySelector(".sidebar")
menuButton.addEventListener('click', e => {
  menuButton.classList.toggle("open")
  sidebar.classList.toggle("collapsed")
})

// SORTABLE LIST
const sortable = Sortable.create(document.querySelector(".task-list"), {
  animation: 150,
  draggable: ".task",
  handle: ".handle"
})

// SHOW/HIDE DETAILS TOGGLER
document.addEventListener('click', e => {
  if (e.target && e.target.classList.contains("details-toggler")) {
    let task = e.target.parentElement.parentElement.parentElement.parentElement
    task.classList.toggle("show")
  }
})

// COMPLETION STATUS TOGGLER
document.addEventListener('change', e => {
  if(e.target && e.target.classList.contains("hidden-checkbox") && e.target.checked) {
    let task = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
    task.classList.add("complete")
  } 
  else if(e.target && e.target.classList.contains("hidden-checkbox") && !e.target.checked){
    let task = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
    task.classList.remove("complete")
  }   
})

// SLIDER TEXT DISPLAY
const slider = document.querySelector("#priority-slider")
const priorityDisplay = document.querySelector("#priority-value")

slider.addEventListener('change', e => {
  let priorityValue = parseInt(slider.value)

  let text
  let prioClass
  switch(priorityValue) {
  case 1:
    text = "Low"
    prioClass = "low-prio-color"
    break;
  case 3:
    text = "High"
    prioClass = "high-prio-color"   
    break;
  default: 
    text = "Normal"
    prioClass = "normal-prio-color"
  }

  priorityDisplay.textContent = text
  priorityDisplay.className = prioClass
})

// CLOSE TASK MODAL
const closeTaskModalButton = document.querySelector("#close-task-modal")
const taskModalBackground = document.querySelector("#new-task-modal")
const newTaskButton = document.querySelector(".new-task-button")
const taskForm = document.querySelector("#new-task-form")

closeTaskModalButton.addEventListener('click', e => {
  e.preventDefault()
  setTimeout(() => { taskModalBackground.style.display = "none" }, 200)
  taskModalBackground.classList.add("hidden")
})

// OPEN TASK MODAL
newTaskButton.addEventListener('click', e => {
  taskModalBackground.style.display = "flex"
  setTimeout(() => { taskModalBackground.classList.remove("hidden") }, 10)
})

// CLOSE PROJECT MODAL
const closeProjectModalButton = document.querySelector("#close-project-modal")
const projectModalBackground = document.querySelector("#new-project-modal")
const newProjectButton = document.querySelector(".new-project-button")
const projectForm = document.querySelector("#new-project-form")

closeProjectModalButton.addEventListener('click', e => {
  e.preventDefault()
  setTimeout(() => { projectModalBackground.style.display = "none" }, 200)
  projectModalBackground.classList.add("hidden")
})

// OPEN PROJECT MODAL
newProjectButton.addEventListener('click', e => {
  projectModalBackground.style.display = "flex"
  setTimeout(() => { projectModalBackground.classList.remove("hidden") }, 10)
})