let searchInput = document.getElementById("search-input");
let selectNumber = document.getElementById("select-number");
let searchBtn = document.getElementById("search-btn");
let resultDiv = document.getElementById("result-div");

window.onload = function () {
  searchInput.value = "white dragon";
  searchCards("white dragon");
}

for (let i = 1; i <= 20; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  selectNumber.appendChild(option);
}

function searchCards(name) {
  fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`)
  .then(res => res.json())
  .then(result => {
    if (result.error) {
      console.log(result);
      resultDiv.innerHTML = `There is no card with "${name}" name`;
    } else {
      console.log(result);
      for (let i = 0; i < selectNumber.value; i++) {
        let img = document.createElement("img");
        img.src = result.data[i].card_images[0].image_url;
        resultDiv.appendChild(img);
      }
    }
  })
}

searchBtn.addEventListener("click", function () {
  if (resultDiv.hasChildNodes()) {
    resultDiv.innerHTML = "";
    searchCards(searchInput.value);
  } else {
    searchCards(searchInput.value);
  }
})
