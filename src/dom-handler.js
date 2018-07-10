import Lib from "./dom-library"
const DOMHandler = (() => {
  const createProject = project => {
    const list = Lib.find(".sidebar-list")
    const element = Lib.create("li")
    const link = Lib.create("a", { href: "#", classes: "sidebar-link", text: project.name })
    link.dataset.id = project.id
    element.appendChild(link)
    list.prepend(element)
  }
  
  const prioClass = prioValue => {
    if (prioValue == 1) return "low-prio"
    else if (prioValue == 3) return "high-prio"
    else return "normal-prio"
  }
  
  const createTask = task => {
    const list = Lib.find(".task-list")
    let classes = ["task", prioClass(task.priority)]
    if (task.complete) {
      classes.push("complete")
       
    }
    
    const element = Lib.create("li", { classes: classes  })
    element.dataset["task_id"] = task.id
    const header = Lib.create("div", { classes: "task-header" })
    const handle = Lib.create("div", { classes: "handle" })
    const handleIcon = Lib.create("i", { classes: "fas fa-thumbtack" })
    const headerContent = Lib.create("div", { classes: "task-header-content" })
    const taskName = Lib.create("h3", { classes: "task-name", text: task.name })
    const taskInfo = Lib.create("div", { classes: "task-info" })
    const dueDate = Lib.create("div", { classes: "task-due-date", text: task.dueDate })
    const detailsToggler = Lib.create("button", { classes: "details-toggler", type: "button" })
    const body = Lib.create("div", { classes: "task-body" })
    const details = Lib.create("div", { classes: "task-details" })
    const prio = Lib.create("div", { classes: "task-priority" })
    const desc = Lib.create("p", { classes: "task-desc", text: task.desc })
    const actions = Lib.create("div", { classes: "task-actions" })
    const completionIndicator = Lib.create("label", { classes: "completion-indicator", text: "Complete" })
    const checkbox = Lib.create("input", { classes: "hidden-checkbox", type: "checkbox", checked: task.complete })
    const overlayCheckbox = Lib.create("div", { classes: "completion-checkbox" })
    const check = Lib.create("i", { classes: "fas fa-check" })
    const deleteBtn = Lib.create("button", { classes: "delete-button", type: "button", text: "Delete" })
    
    list.appendChild(element)
    element.appendChild(header)
    element.appendChild(body)
    header.appendChild(handle)
    handle.appendChild(handleIcon)
    header.appendChild(headerContent)
    headerContent.appendChild(taskName)
    headerContent.appendChild(taskInfo)
    taskInfo.appendChild(dueDate)
    taskInfo.appendChild(detailsToggler)
    body.appendChild(details)
    details.appendChild(prio)
    details.appendChild(desc)
    details.appendChild(actions)
    actions.appendChild(completionIndicator)
    actions.appendChild(deleteBtn)
    completionIndicator.appendChild(checkbox)
    completionIndicator.appendChild(overlayCheckbox)
    overlayCheckbox.appendChild(check)
  }

  const closeModal = modalBackground => {
    setTimeout(() => { modalBackground.style.display = "none" }, 200)
    modalBackground.classList.add("hidden")
  }
  
  const openModal = modalBackground => {
    modalBackground.style.display = "flex"
    setTimeout(() => { modalBackground.classList.remove("hidden") }, 10)
  }
  
  const resetSliderLabel = () => {
    const priorityDisplay = Lib.find("#priority-value")
    priorityDisplay.textContent = "Normal"
    priorityDisplay.className = "normal-prio-color"
  }
  
  const clearTasks = () => {
    Lib.find(".task-list").innerHTML = ""
  }
  
  return { createProject, createTask, closeModal, openModal, resetSliderLabel, clearTasks }
})()

export default DOMHandler