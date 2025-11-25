
const commonRequest = async (url, method, bodyData, header) => {
  try{
    if(method === 'GET'){
      let response = await fetch(url);
      let data = await response.json()
      return data
    }
    else if(method === "POST"){
      let response = await fetch(url,{
        method: method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title: bodyData.title,
          body: bodyData.body,
          userId: bodyData.userId
        }),
      })
      let data = await response.json();
      return data
    }
  }
  catch(err){
    console.log(err)
  }
}

export default commonRequest