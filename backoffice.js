const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2FiNTE4N2U1YzAwMTgxNGM2MGYiLCJpYXQiOjE3MDU2NTQ5NjUsImV4cCI6MTcwNjg2NDU2NX0.mIrE414HqOpT-f_JyzY83NS2zQTxnn0cUJGNd5FnEpA'
const url = 'https://striveschool-api.herokuapp.com/api/product'

const nomeInput = document.getElementById('nome')
const descInput = document.getElementById('descrizione')
const brandInput = document.getElementById('brand')
const urlInput = document.getElementById('url')
const priceInput = document.getElementById('price')

document.getElementById('reset').addEventListener('click', function () {
  confermaReset()
})

document.getElementById('add').addEventListener('click', function () {
  const newItem = {
    name: nomeInput.value,
    description: descInput.value,
    brand: brandInput.value,
    imageUrl: urlInput.value,
    price: priceInput.value,
  }
  console.log(newItem)

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: { Authorization: key, 'Content-Type': 'application/json' },
  })
    .then((response) => {
      console.log(response)
      if (response.ok) {
        // il concerto è stato creato correttamente!
        alert('Articolo aggiunto al listino')
        // svuoto il form
        nomeInput.value = ''
        descInput.value = ''
        priceInput.value = ''
        brandInput.value = ''
        urlInput.value = ''
      } else {
        alert('PROBLEMA NEL SALVATAGGIO!')
        // hai sbagliato qualcosa nella richiesta?
      }
    })
    .catch((err) => {
      console.log(err)
    })
})

const reset = function () {
  nomeInput.value = ''
  descInput.value = ''
  priceInput.value = ''
  brandInput.value = ''
  urlInput.value = ''
}

function confermaReset() {
  let conferma = confirm('Sei sicuro di voler resettare?')

  if (conferma) {
    reset()
  }
}
