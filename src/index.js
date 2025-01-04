const createTaskElement = (task) => {
    const button = document.createElement("button")
    button.textContent = task.name

    return button
}

const populateTasksContainer = (tasks) => {
    const tasksContainer = document.getElementById("tasks")
    for (const task of tasks) {
        tasksContainer.appendChild(createTaskElement(task))
    }
}

const main = async () => {
    try {
        const tasksResponse = await fetch(window.location.origin + "/api/v1/tasks")
        const tasks = await tasksResponse.json()
        if (!tasksResponse.ok) {
            throw Error(tasks.error)
        }
        populateAccountsContainer(tasks)
    } catch (error) {
        console.error(error)
    }
}

main()