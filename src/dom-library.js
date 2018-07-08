const DOMLibrary = (() => {
  const find = selector => document.querySelector(selector)
  
  const createText = text => document.createTextNode(text)
  
  const create = (tag, options = { id: null, classes: null, text: null }) => {
    let element = document.createElement(tag)
    if (options) addProperties(element, options)
    return element
  }
  
  const addProperties = (element, options) => {
    addOtherProperties(element, options)
    addId(element, options.id)
    addClasses(element, options.classes)
    addText(element, options.text)
  }
  
  const addOtherProperties = (element, options) => {
    Object.entries(options).forEach(([k,v]) => {
      if (k !== "classes" && k !== "text" && k !== "id")
        element[k] = v
    })
  }
  
  const addId = (element, id) => {
    if (id) element.id = id
  }
  
  const addText = (element, text) => {
    if (text) element.appendChild(createText(text))
  }
  
  const addClasses = (element, classes) => {
    if (classes && Array.isArray(classes))
      element.classList.add(...classes)
    else if (classes && typeof classes === "string") {
      let classesArr = classes.split(" ")
      element.classList.add(...classesArr)
    }
  }
  
  return { find, createText, create }
})()

export default DOMLibrary