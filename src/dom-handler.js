const DOMHandler = (() => {
  const createProject = project => {
    const list = document.querySelector(".sidebar-list")
    const element = document.createElement("li")
    const link = document.createElement("a")
    link.href = "#"
    link.dataset.id = project.id
    link.className = "sidebar-link"
    link.appendChild(document.createTextNode(project.name))
    element.appendChild(link)
    list.prepend(element)
  }

  const closeModal = modalBackground => {
    setTimeout(() => { modalBackground.style.display = "none" }, 200)
    modalBackground.classList.add("hidden")
  }
  
  const openModal = modalBackground => {
    modalBackground.style.display = "flex"
    setTimeout(() => { modalBackground.classList.remove("hidden") }, 10)
  }
  
  return { createProject, closeModal, openModal }
})()

export default DOMHandler