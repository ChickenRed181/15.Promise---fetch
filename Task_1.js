const dataContainer = document.getElementById('data-container')
const loader = document.getElementById('loader')

const fetchUsers = async () => {
  loader.hidden = false

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }

    const users = await response.json()
    
    loader.hidden = true

    users.forEach(user => {
      const listItem = document.createElement('li')
      const link = document.createElement('a')
      link.href = '#'
      link.textContent = user.name

      listItem.appendChild(link)
      dataContainer.appendChild(listItem)
    })
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
    loader.hidden = true
  }
}

fetchUsers()
