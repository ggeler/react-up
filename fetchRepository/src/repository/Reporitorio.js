import repository from './repository'

const fecthRepository = () => {
  const resource = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1'
  const response = fetch(resource)
    .then(res => {
      if (!res.status === 200) {
        return res.text().then(text => { throw new Error(text) })
      } else {
        return res.json()
      }
    })
    .catch(e => console.log('Error :', e))
  response.then(data => console.log('Sync', data))
  return response
}

const asyncFecthRepository = async () => {
  const resource = 'https://api.thecatapi.com/v1/images/search?limit=20&page=1'
  try {
    const response = await fetch(resource)
    const data = await response.json()
    console.log('Async: ', data)
    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

function localRepository() {
  const repo = repository
  console.log(repo)
  return repo
}

export { asyncFecthRepository as repository }
