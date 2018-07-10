import DOMHandler from "./dom-handler"

// SHOW/HIDE SIDEBAR TOGGLER
const menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', e => {
  DOMHandler.toggleSidebar()
})

import Sortable from "./Sortable.min"
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

// OPEN AND CLOSE MODALS

// TASK MODAL
const closeTaskModalButton = document.querySelector("#close-task-modal")
const taskModalBackground = document.querySelector("#new-task-modal")
const newTaskButton = document.querySelector(".new-task-button")

// CLOSE TASK MODAL
closeTaskModalButton.addEventListener('click', e => {
  e.preventDefault()
  DOMHandler.closeModal(taskModalBackground)
})

// OPEN TASK MODAL
newTaskButton.addEventListener('click', e => {
  DOMHandler.openModal(taskModalBackground)
})

// PROJECT MODAL
const closeProjectModalButton = document.querySelector("#close-project-modal")
const projectModalBackground = document.querySelector("#new-project-modal")
const newProjectButton = document.querySelector(".new-project-button")

// CLOSE PROJECT MODAL
closeProjectModalButton.addEventListener('click', e => {
  e.preventDefault()
  DOMHandler.closeModal(projectModalBackground)
})

// OPEN PROJECT MODAL
newProjectButton.addEventListener('click', e => {
  DOMHandler.openModal(projectModalBackground)
})
