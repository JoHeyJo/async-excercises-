// request single card, console.log() == number, suit

"use strict"

const BASE_URL = "http://deckofcardsapi.com/api";
let DECK_ID = async function getDeckId(){
    let deckData = await axios({ url:`${BASE_URL}/deck/new/shuffle/?deck_count=1`});
    DECK_ID = deckData.data.deck_id;
}
async function randomCard(DECK_ID) {
//   evt.preventDefault()
//   $("#lucky-number").empty()
//   console.log("Successfully prevented default event")
//   const favoriteNum = $(".number").val()
    let cardResp = axios({ url:`${BASE_URL}/deck/${DECK_ID}/draw/?count=1`})

    cardResp 
  .then((cardResp)=>{
    console.log( cardResp.data.cards[0].image)
    console.log( cardResp.data.cards[0].code)
      return cardResp.data.cards[0].image
  })
  .catch((err) => {
    populateError(err)
  })
}


// $("#lucky-number").on("submit", luckyNums);

// //populate function

// function showResults(array) {
//   console.log("populating Results")
//   console.log(array)
//   $("#cards").append("<hr>Here Are the facts about your favorite number: ")
//   const $facts = $(".facts");
//   for(let text of array){
//   $facts.append(`<li>${text}</li>`)
//   }
// }

// function populateError(err){
//   $("#lucky-number").append(`${err}`)
// }
DECK_ID();