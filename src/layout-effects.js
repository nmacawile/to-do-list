import DOMHandler from "./dom-handler"

// SHOW/HIDE SIDEBAR TOGGLER
const menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', e => {
  DOMHandler.toggleSidebar()
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
  let priorityValue = parseInt(slider.value) - 1
  let prioLevels = ["Low", "Normal" ,"High"]
  priorityDisplay.textContent = prioLevels[priorityValue]
  priorityDisplay.className = prioLevels[priorityValue].toLowerCase() + "-prio-color"
})

// OPEN AND CLOSE MODALS

// TASK MODAL
const closeTaskModalButton = document.querySelector("#close-task-modal")
const newTaskButton = document.querySelector(".new-task-button")

// CLOSE TASK MODAL
closeTaskModalButton.addEventListener('click', e => {
  e.preventDefault()
  DOMHandler.closeModal("#new-task-modal")
})

// OPEN TASK MODAL
newTaskButton.addEventListener('click', e => {
  DOMHandler.openModal("#new-task-modal")
})

// PROJECT MODAL
const closeProjectModalButton = document.querySelector("#close-project-modal")
const newProjectButton = document.querySelector(".new-project-button")

// CLOSE PROJECT MODAL
closeProjectModalButton.addEventListener('click', e => {
  e.preventDefault()
  DOMHandler.closeModal("#new-project-modal")
})

// OPEN PROJECT MODAL
newProjectButton.addEventListener('click', e => {
  DOMHandler.openModal("#new-project-modal")
})
