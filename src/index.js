import LayoutEffects from "./layout-effects"
import Project from "./project"
import DOMHandler from "./dom-handler"
import Lib from "./dom-library"
import Sortable from "./Sortable.min"

// NEW PROJECT FORM
Lib.attachEvent("#new-project-form", e => {
  e.preventDefault()
  generateProject()
  DOMHandler.resetProjectModal()
}, 'submit')

// NEW TASK FORM
Lib.attachEvent("#new-task-form", e => {
  e.preventDefault()
  if (Project.active) {
    generateTask()
    DOMHandler.resetTaskModal()
  }
  else alert("No project is loaded. Please create a project first.")
  
}, 'submit')

// LOAD PROJECT
Lib.attachEvent(".sidebar-link", e => {
  e.preventDefault()
  loadProjectData(e.target.dataset.id)
}, 'click', true)

// COMPLETION STATUS TOGGLER
Lib.attachEvent(".hidden-checkbox", e => {
  let taskDOM = Lib.findAncestor(e.target, "task")
  let taskId = taskDOM.dataset["task_id"]
  if(e.target.checked) {
    Project.active.findTask(taskId).complete = true
    taskDOM.classList.add("complete")
  } 
  else if(!e.target.checked){
    Project.active.findTask(taskId).complete = false
    taskDOM.classList.remove("complete")
  }
}, 'change', true)

// DESTROY PROJECT
Lib.attachEvent(".delete-project-button", e => {
  if (Project.active && confirm('Are you sure you want to delete this project and all of its tasks?')) {
    const id = Project.active.id
    Project.destroyActive()
    tryLoadingOtherProject()
    DOMHandler.destroyProject(id)
  }
})

// DESTROY TASK
Lib.attachEvent(".delete-task-button", e => {
  if (confirm('Are you sure you want to delete this task?')) {
    const id = e.target.dataset["target_task_id"]
    Project.active.remove(id)
    DOMHandler.destroyTask(id)
  }
}, 'click', true)

// SORTABLE TASK LIST
const sortable = Sortable.create(Lib.find(".task-list"), {
  animation: 150,
  delay: 0, 
  draggable: ".task",
  dataIdAttr: 'data-task_id',
  handle: ".handle",
  onSort: e => sortTasks(e)
})

// SORT TASKS
const sortTasks = e => {
  let item = Project.active.tasks.splice(e.oldIndex, 1)[0]
  Project.active.tasks.splice(e.newIndex, 0, item)
}

// CREATE PROJECT
const generateProject = () => {
  let project = Project.create(document.forms["project"]["name"].value)
  DOMHandler.createProject(project)
  loadProjectData(project.id)
}

// CREATE TASK
const generateTask = () => {
  let task = Project.active.newTask(...taskFormData())
  DOMHandler.createTask(task)
}

// RETRIEVE TASK FORM DATA
const taskFormData = () => {
  const name = document.forms["task"]["name"].value
  const desc = document.forms["task"]["description"].value
  const dueDate = document.forms["task"]["due_date"].value
  const priority = parseInt(document.forms["task"]["priority"].value)
  return [name, desc, dueDate, priority]
}

// LOAD PROJECT 
const loadProjectData = id => {
  let project = Project.find(id)
  Project.active = project
  DOMHandler.showProjectPanel()
  loadTasks(project)
  DOMHandler.updateProjectTitle(project)
  DOMHandler.closeSidebar()
}

// LOAD ANOTHER PROJECT (AFTER DELETING CURRENT ACTIVE)
const tryLoadingOtherProject = () => {
  if (Project.all.length > 0)
    loadProjectData(Project.all[0].id)
  else {
    DOMHandler.hideProjectPanel()
    DOMHandler.clearProjectPanel()
  }
}

// LOAD TASKS
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

  
