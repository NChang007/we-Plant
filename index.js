let plants = []

//fetch plants from fake api
let loadData = fetch("customInfo.json")
    .then((response) => response.json())
    .then((data) => {
        plants = data.succulents;
        console.log(plants,"fetch");
    })
    .catch((error) => {
        console.log('There is an error on the fetch ');
})


window.onload = async () => {
    console.log(plants, "onLoad"); 
    people = await loadData
    function makeCard (){
        let container = document.querySelector('.card-container');
        for (let i = 0; i < plants.length; i++) {
            let myDiv = document.createElement("div");
            // myDiv.classList.add("col-4")
            // myDiv.style.height = "500px";
            myDiv.innerHTML = 
            `<div class="card" id="${[i]}" style="width: 18rem; heigth: 18rem;">
            <img src=${plants[i].image} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${plants[i].name}</h5>
            </div>
            </div>`
            
            container.appendChild(myDiv);
        }
    }
    makeCard()

};

    

