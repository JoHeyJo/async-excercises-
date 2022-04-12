"use strict"

const BASE_URL = "http://numbersapi.com"

async function luckyNums(evt) {
  evt.preventDefault()
  $("#lucky-number").empty()
  console.log("Successfully prevented default event")
  const favoriteNum = $(".number").val()
  const resp1 = axios({ url:`${BASE_URL}/${favoriteNum}?json`});
  const resp2 = axios({ url:`${BASE_URL}/${favoriteNum}?json`});
  const resp3 = axios({ url:`${BASE_URL}/${favoriteNum}?json`});
  const resp4 = axios({ url:`${BASE_URL}/${favoriteNum}?json`});

  
  const response = Promise.all([resp1, resp2, resp3, resp4])
  response
  .then((allResp)=>{
    let responseText = allResp.map(respObject=>{
      
      return respObject.data.text
    })
    showResults(responseText);
  })
  .catch((err) => {
    populateError(err)
  })
}

// event listener

$("#lucky-number").on("submit", luckyNums);

//populate function

function showResults(array) {
  console.log("populating Results")
  console.log(array)
  $("#lucky-number").append("<hr>Here Are the facts about your favorite number: ")
  const $facts = $(".facts");
  for(let text of array){
  $facts.append(`<li>${text}</li>`)
  }
}

function populateError(err){
  $("#lucky-number").append(`${err}`)
}
//createand populate error element
