const addressBarContent = new URLSearchParams(location.search)
console.log(addressBarContent)
// estrapolo dai parametri dell'indirizzo quello che in index.js ho chiamato "concertId"
const itemId = addressBarContent.get('codice')
console.log(itemId)

const box = document.getElementsByClassName('row')[0]
const card = document.createElement('div')
card.classList.add('col')

const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2FiNTE4N2U1YzAwMTgxNGM2MGYiLCJpYXQiOjE3MDU2NTQ5NjUsImV4cCI6MTcwNjg2NDU2NX0.mIrE414HqOpT-f_JyzY83NS2zQTxnn0cUJGNd5FnEpA'
const url = 'https://striveschool-api.herokuapp.com/api/product'

fetch(url + '/' + itemId, {
  headers: { Authorization: key },
})
  .then((ris) => {
    console.log(ris)
    if (ris.ok) {
      return ris.json()
    } else throw new Error('errore nella chiamata')
  })
  .then((dati) => {
    console.log(dati)
    card.innerHTML = `<div class="card opacity-75">
    <div class="card-header bg-success text-center text-light fs-3">${dati.name}</div>
    <img src="${dati.imageUrl}" class="card-img-top img-fluid border-bottom border-2 " alt="..." />
    <div class="card-body text-center">
      <p class="card-text">Brand:${dati.brand}</p>
      <p class="card-text">${dati.description}</p>
      <p class="card-text">Prezzo:${dati.price} €</p>
  </div>`
    box.appendChild(card)
  })
