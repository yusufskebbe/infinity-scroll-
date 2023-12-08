const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')


let imagesArray = []

// Unsplash API

const count = 10
const apiKey = 'Xi0lWhPJy6p5yJYmYxlw_59xHW9Io0eQlXCpn3zMWG4'
const urlAPI = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


function setAttributes(element, attribute) {

  for (const key in attribute) {
    element.setAttribute(key, attribute[key])
  }

}


// Create elements for link and images, Add to DOM

function displayPhotos() {

  imagesArray.forEach((photo) => {

    // create <a> </a> to link
    const item = document.createElement('a')
    // item.setAttribute('href',photo.links.html)
    // item.setAttribute('target','_blank')
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    })

    // create <img> for photo

    const img = document.createElement('img')
    // img.setAttribute('src', photo.url.regular)
    // img.setAttribute('alt', photo.alt.description)
    // img.setAttribute('title', photo.alt.description)

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })

    item.appendChild(img)
    imageContainer.appendChild(item)
  })

}

async function getPhotos() {
  try {

    const response = await fetch(urlAPI)

    imagesArray = await response.json()

    displayPhotos()


  } catch (error) {
    console.log(error);
  }


}


getPhotos()