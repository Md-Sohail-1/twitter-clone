
const commonRequest = async (url, method, body, headers) => {
  try{
    if(method === 'GET'){
      let response = await fetch(url);
      let data = await response.json()
      return data
    }
    else{
      let response = await fetch(url,{
        method: method,
        body: JSON.stringify(body)
        headers: headers,
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