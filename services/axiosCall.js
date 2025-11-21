
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
        headers: headers,
        body: JSON.stringify(body)
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