export default function fetchCats () {
  fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1') // 1
    .then(res => res.json()) // 2
    .then(resJson => {
      this.setState({ data: resJson }) // 3
    }).catch(e => console.log(e))
}
