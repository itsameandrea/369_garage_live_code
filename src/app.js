// TODO: Build an awesome garage!
// 1. Fetch cars array
fetch("https://wagon-garage-api.herokuapp.com/legarage/cars")
.then(response => response.json())
.then(data => {
  console.log(data)
  data.forEach(car => {
    addCar(car)
  })
})

const brand = document.querySelector('#brand')
const model = document.querySelector('#model')
const plate = document.querySelector('#plate')
const owner = document.querySelector('#owner')

// 2. Iterate the array
// 3. Add to the html the snippet
// 3.5. Add and event listener to button
const form = document.querySelector('#new-car')
form.addEventListener('submit', event => {
  console.log(event)
  event.preventDefault()
  fetch("https://wagon-garage-api.herokuapp.com/legarage/cars",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       "brand": brand.value,
       "model": model.value,
       "owner": owner.value,
       "plate": plate.value
    })
  })
  .then(response => response.json())
  .then(data => {
  addCar(data)
})
})

const addCar = (car) => {
 const list = document.querySelector(".cars-list")
 list.insertAdjacentHTML('beforeend', `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
          </div>
          <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
          </div>
        </div>`)
}

// 4. get the value of the elements and send to api
// 5. Send a post request to the API
// 6. Display new car
