import LayoutEffects from "./layout-effects"
import Project from "./project"
import Task from "./task"
import DOMHandler from "./dom-handler"

const projectForm = document.querySelector("#new-project-form")
projectForm.addEventListener('submit', e => {
  e.preventDefault()
  const name = document.querySelector("#project-name-textbox").value
  let project = Project.create(name)
  DOMHandler.createProject(project)
  DOMHandler.closeModal(document.querySelector("#new-project-modal"))
  projectForm.reset()
})