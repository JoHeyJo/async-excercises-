// request single card, console.log() == number, suit

"use strict"

const BASE_URL = "http://deckofcardsapi.com/api";
let DECK_ID = async function getDeckId(){
    let deckData = await axios({ url:`${BASE_URL}/deck/new/shuffle/?deck_count=1`});
    DECK_ID = deckData.data.deck_id;
}
async function randomCard(numOfDraws) {
//   evt.preventDefault()
//   $("#lucky-number").empty()
//   console.log("Successfully prevented default event")
//   const favoriteNum = $(".number").val()
    let hand = []
    const deckId = await axios({ url:`${BASE_URL}/deck/new/shuffle/?deck_count=1`});
    // const drawOne = await axios({ url:`${BASE_URL}/deck/${deckId.data.deck_id}/draw/?count=1`}); = 5S

    for(let i = 0; i < numOfDraws; i++){
        hand.push(await axios({ url:`${BASE_URL}/deck/${deckId.data.deck_id}/draw/?count=1`}))
    }
    console.log(hand)
    // console.log(drawOneAgain)

//   const response = Promise.all([resp1, resp2, resp3, resp4])
//   response
//   .then((allResp)=>{
//     let responseText = allResp.map(respObject=>{
      
//       return respObject.data.text
//     })
//     showResults(responseText);
//   })
//   .catch((err) => {
//     populateError(err)
//   })
}

// event listener

// $("#lucky-number").on("submit", luckyNums);

// //populate function

// function showResults(array) {
//   console.log("populating Results")
//   console.log(array)
//   $("#lucky-number").append("<hr>Here Are the facts about your favorite number: ")
//   const $facts = $(".facts");
//   for(let text of array){
//   $facts.append(`<li>${text}</li>`)
//   }
// }

// function populateError(err){
//   $("#lucky-number").append(`${err}`)
// }
//createand populate error element
