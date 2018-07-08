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