const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
//user add pokemon in their team-card
    //max 6
  //user can release pokemon off of card(not delete from db)
    //  click function event listner

//when user loads page:
    //see trainer name in each card
function putTrainersOnPage(trainers) {
  console.log(trainers)



}



//fetching info
const parseJSON = resp => resp.json();

fetch("http://localhost:3000/trainers")
    .then(parseJSON)
    .then(putTrainersOnPage)
