const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const trainerCards = document.getElementById('trainer-cards');

document.addEventListener('DOMContentLoaded', () => {
//
const addPokemon = document.getElementById('card')
//   addPokemon.addEventListener('click', newPokemonAdded )
//
//   function newPokemonAdded(event) {
//    debugger
//   event.preventDefault();
//   event.target
//
//    }
//
})

function addNewPokemon (event, trainerIdButton) {
  let list = event.target.parentElement.querySelector("ul")

  fetch(POKEMONS_URL, {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({trainer_id: trainerIdButton} )
  })
  .then(pokemon=> pokemon.json())
  .then(pokemon => {

  list.innerHTML += `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
})
}


trainerCards.addEventListener('click', function(event) {
  console.log(event)
  let trainerIdButton = event.target.dataset.trainerId
  let pokemonIdButton = event.target.dataset.pokemonId

  if (trainerIdButton) {
    addNewPokemon(event, trainerIdButton)

  }
  else if (pokemonIdButton) {
    let list = event.target.parentElement.remove()
    fetch(`${POKEMONS_URL}/${pokemonIdButton}`,{
      method: 'DELETE'})
  }
})


const parseJSON = resp => resp.json();
//name the fetch getTrainer or such
fetch("http://localhost:3000/trainers")
    .then(parseJSON)
    .then(putTrainersOnPage)

//pokemon fetch
function putTrainersOnPage(trainers) {

let htmlForTrainers = ""
  const trainerCardDiv = document.getElementById('trainer-cards')

  const card = document.getElementsByClassName('card')

  trainers.forEach(function(trainer){
    htmlForTrainers+=`
      <div class="card"><h2>${trainer.name}</h2>
      <button data-trainer-id="${trainer.id}">Add Pokemon</button>
      <ul id="selected-pokemons" >`
  trainer.pokemons.forEach(function(pokemon) {
    htmlForTrainers +=`
      <li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
    })
    htmlForTrainers += `</ul> </div>`
  })
  trainerCardDiv.innerHTML = htmlForTrainers
}


// when add a pokemon to a trainer - want it to add a li
// need event listner for add pokemon button
//need event listener for release button
//fetching info
