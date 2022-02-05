
const dog_image = document.getElementById("dog_image");
//On refresh, random dog picture appears.
window.onload = function getImage() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dog_image.innerHTML = `<img src="${data.message}"/>`
        })
}



