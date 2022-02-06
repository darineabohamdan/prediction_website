const age = document.getElementById("age");
const gender = document.getElementById("gender");
const country = document.getElementById("country");
const dog_image = document.getElementById("dog_image");
const btn = document.querySelector('button');


//On refresh, random dog picture appears.
document.getElementById("name").value;

window.onload = function getImage() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dog_image.innerHTML = `<img src="${data.message}"/>`
        })
}

//Getting age.

btn.addEventListener("click", async () => {

    const input = document.querySelector("input").value;
    const data = await fetchApi(input);
    document.querySelector("#age").innerHTML = data.age;
    

    async function fetchApi(name) {
        const url = "https://api.agify.io/?name=" + name;
        const dataFetch = await fetch(url, {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        })
        const data = await dataFetch.json();

        return data;
    }
})



















