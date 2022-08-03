// const key = "294ad08460228f58617e171de3b04294";
// export const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`;

// This is api fetching for get request for multiple endpoint request
export const client = async (endpoint)=>{
    try{
        const response = await fetch(endpoint);
        console.log(endpoint)
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error(response.statusText)
    }catch(error){
        console.log(error)
    }
}
client.get = (endpoint) =>{
    return client(endpoint);
}