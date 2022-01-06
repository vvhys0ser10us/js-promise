const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const url =
  'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?cs=srgb&dl=pexels-pixabay-163036.jpg&fm=jpg'

btn.addEventListener('click', async () => {
  loadImg(url)
    .then((img) => container.appendChild(img))
    .catch((error) => alert(error))

  // addColour(1000, one, 'green')
  //   .then(() => addColour(1000, two, 'green'))
  //   .then(() => addColour(2000, three, 'red'))
  //   .catch((error) => alert(error))
  try {
    await addColour(1000, one, 'green')
    await addColour(1000, two, 'green')
    await addColour(2000, three, 'red')
  } catch (error) {
    alert(error)
  }
})

function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.addEventListener('load', () => {
      resolve(img)
    })

    img.addEventListener('error', () => {
      reject(new Error('url not valid'))
    })

    img.src = url
  })
}

function addColour(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
      }, time)
      resolve()
    } else {
      reject(new Error('No such element'))
    }
  })
}
