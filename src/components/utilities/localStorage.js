const getStoredApplications = () => {
    const storedApplications = localStorage.getItem('storedApplication')
    if (storedApplications) {
        return JSON.parse(storedApplications)
    }
    return []
}

const saveApplicationToLocalStorage = (id) => {
    const storedApplication = getStoredApplications()
    const exist = storedApplication.find(application => application == id)
    if (!exist) {
        storedApplication.push(id)
        localStorage.setItem('storedApplication', JSON.stringify(storedApplication))
    }
}

export { saveApplicationToLocalStorage }


