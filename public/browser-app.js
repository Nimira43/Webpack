const tasksDOM = document.querySelector('tasks')
const loadingDOM = document.querySelector('loading-text')
const formDOM = document.querySelector('task-form')
const taskInputDOM = document.querySelector('task-input')
const formAlertDOM = document.querySelector('form-alert')

const showTasks = async () => {
  loadingDOM.style.visibility = 'visible'
  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1/tasks')
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No task have been listed</h5>'
      loadingDOM.style.visibility = 'hidden'
      return    
    }
    const allTasks = tasks
      .map((task) => {
        const { completed, _id: taskID, name } = task
        return `
          <div class="single-task> ${completed && 'Task-completed'}">
            <h5><span><i class="fa-regular fa-check-circle"></i></span>${name}</h5>
            <div class="task-links">
              <a href="task.html?id=${taskID}" class="edit-link">
                <i class="fa-solid fa-edit"></i>
              </a>
              <button type="btn" class="delete-btn" data=-id="${taskID}">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
        </div>
           
        `
      })
      .join('')
    tasksDOM.innerHTML = allTasks
  } catch (error) {
    tasksDOM.innerHTML = '<h5 class="empty-list">There was an error.</h5>'
  }
  loadingDOM.style.visibility = 'hidden'
}

showTasks()

tasksDOM,addEventListener('click', async (e) => {

})

formDOM.addEventListener('submit', async (e) => {

})