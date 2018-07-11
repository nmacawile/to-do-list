const Storage = (() => {
  const storageAvailable = () => {
    try {
      let storage = window['localStorage'],
          x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0;
    }
  }
  
  const save = project => {
    if (storageAvailable()) {
      let data = JSON.stringify(project)
      localStorage.setItem(`to-do.project-${project.id}`, data)
    }  
  }
  
  const destroy = projectId => {
    if (storageAvailable()) localStorage.removeItem(`to-do.project-${projectId}`)
  }
  
  const load = projectId => {
    let data
    if (storageAvailable() && (data = localStorage.getItem(`to-do.project-${projectId}`))) {
      let project = JSON.parse(data)
      return project
    }
  }
  
  const saveIndex = (model, index) => {
    if (storageAvailable()) {
      let data = JSON.stringify(index)
      localStorage.setItem(`to-do.${model}-index`, data)
    }
  }
  
   const loadIndex = model => {
    let data
    if (storageAvailable() && (data = localStorage.getItem(`to-do.${model}-index`))) {
      let index = JSON.parse(data)
      return index
    }
  }
  
  const saveMeta = meta => {
    if (storageAvailable()) {
      let data = JSON.stringify(meta)
      localStorage.setItem(`to-do.meta`, data)
    }   
  }
  
  const loadMeta = () => {
    let data
    if (storageAvailable() && (data = localStorage.getItem(`to-do.meta`))) {
      let meta = JSON.parse(data)
      return meta
    }
  }
  
  const saveLastOpen = openProjectId => {
    if (storageAvailable()) {
      let data = JSON.stringify(openProjectId)
      localStorage.setItem(`to-do.open`, data)
    }   
  }
  
  const loadLastOpen = () => {
    let data
    if (storageAvailable() && (data = localStorage.getItem(`to-do.open`))) {
      let openProjectId = JSON.parse(data)
      return openProjectId
    }
  }
  
  return { save, load, saveIndex, loadIndex, saveMeta, loadMeta, destroy, saveLastOpen, loadLastOpen }
})()

export default Storage