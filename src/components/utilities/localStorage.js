const getStoredApplications = () => {
    const storedApplications = localStorage.getItem('savedApplication')
    if (storedApplications) {
        return JSON.parse(storedApplications)
    }
    return []
}


// const saveApplicationToLocalStorage = (savedApplication) => {
//     const savedApplicationStringify = JSON.stringify(savedApplication)
//     localStorage.setItem('savedApplication', savedApplicationStringify)
// }

// const addApplicationToLocalStorage = (id) => {
//     const savedApplication = getStoredApplications()

//     const exist = savedApplication.find(application => application.id === id)
//     if (!exist) {
//         savedApplication.push(id)
//         saveApplicationToLocalStorage(savedApplication)
//     }
// }

const saveApplicationToLocalStorage = (id) => {
    const storedApplication = getStoredApplications()
    const exist = storedApplication.find(application => application.id === id)
    if (!exist) {
        storedApplication.push(id)
        localStorage.setItem('storedApplication', JSON.stringify(storedApplication))
    }
}

export { saveApplicationToLocalStorage }

// export { addApplicationToLocalStorage }

