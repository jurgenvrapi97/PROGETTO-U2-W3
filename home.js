const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2FiNTE4N2U1YzAwMTgxNGM2MGYiLCJpYXQiOjE3MDU2NTQ5NjUsImV4cCI6MTcwNjg2NDU2NX0.mIrE414HqOpT-f_JyzY83NS2zQTxnn0cUJGNd5FnEpA'
const url = 'https://striveschool-api.herokuapp.com/api/product'

const box = document.getElementsByClassName('row')[0]

const brands = []
const brandsFiltered = []

function nascondiLoader() {
  document.getElementById('loader').style.display = 'none'
}

fetch(url, {
  headers: { Authorization: key },
})
  .then((ris) => {
    console.log(ris)
    if (ris.ok) {
      return ris.json()
    } else throw new Error('errore nella chiamata')
  })
  .then((dati) => {
    setTimeout(() => {
      nascondiLoader()

      dati.forEach((item) => {
        console.log(item)
        const card = document.createElement('div')
        card.classList.add('col')
        card.innerHTML = `<div class="card mb-2 h-100">
    <div class="card-header bg-success text-center text-light fs-4">${item.name}</div>
    <img src="${item.imageUrl}" class="card-img-top img-fluid border-bottom border-2 " alt="..." />
    <div class="d-flex flex-column justify-content-between card-body text-center">
    <div id="brand" >
      <p  class="card-text">Brand:${item.brand}</p>
      <p class="card-text">${item.description}</p>
      <p class="card-text">Prezzo:${item.price},00 €</p>
      </div>
      <div class="d-grid gap-2">
      <a class="btn btn-success" href="detail.html?codice=${item._id}" type="button">Dettaglio</a>
     
    </div>
  </div>`

        box.appendChild(card)
        brands.push(item.brand)
      })
    }, 1000)

    document.getElementById('btn-cerca').addEventListener('click', function () {
      search()
      noElemnts()
    })
    document
      .getElementById('btn-remove')
      .addEventListener('click', function () {
        delateSearch()
      })
  })
  .catch((err) => {
    console.log(err)
  })

const itemList = document.getElementsByClassName('col')

const search = function () {
  console.log(itemList)
  const searchInput = document.getElementById('search')
  for (let i = 0; i < brands.length; i++) {
    console.log(brands[i])
    if (brands[i] != searchInput.value) {
      itemList[i].classList.add('d-none')
    } else {
    }
  }
}

const noElemnts = function () {
  const searchInput = document.getElementById('search')
  const verifica = brands.every((elemento) => elemento != searchInput.value)

  if (!verifica) {
  } else {
    alert('spiacente tutto finito')
  }
}

function delateSearch() {
  for (let i = 0; i < brands.length; i++) {
    if (itemList[i].classList.contains('d-none')) {
      itemList[i].classList.remove('d-none')
    }
  }
}
