"use strict"

const BASE_URL = "http://numbersapi.com"

async function luckyNums() {
  const resp1 = axios({ url:`${BASE_URL}/10?json`});
  const resp2 = axios({ url:`${BASE_URL}/10?json`});
  const resp3 = axios({ url:`${BASE_URL}/10?json`});
  const resp4 = axios({ url:`${BASE_URL}/10?json`});

  
  const response = Promise.all([resp1, resp2, resp3, resp4])
  response
  .then((allResp)=>{
    let responseText = allResp.map(respObject=>{
      return respObject.data.text
    })
    console.log(responseText);
  })
  .catch()
}

