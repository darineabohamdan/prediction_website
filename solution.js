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



//get gender


btn.addEventListener("click", async () => {

    const input = document.querySelector("input").value;
    const data = await fetchApi(input);

    document.querySelector("#gender").innerHTML = data.gender;
    console.log(data);


    async function fetchApi(name) {
        const url = "https://api.genderize.io?name=" + name;
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

// get nationaloty:

btn.addEventListener("click", async () => {

    const input = document.querySelector("input").value;
    const data = await fetchApi(input);


    document.querySelector("#country").innerHTML = data.country[0].country_id + " " + data.country[1].country_id;
    console.log(data);

    async function fetchApi(name) {
        const url = "https://api.nationalize.io/?name=" + name;
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


//Getting a random dog image when submit button is pressed.


btn.addEventListener("click", function getImage() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dog_image.innerHTML = `<img src="${data.message}"/>`
        })
})













