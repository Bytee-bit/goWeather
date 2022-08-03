const key = "294ad08460228f58617e171de3b04294";
const baseUrl = "https://api.openweathermap.org/data/2.5/forecast/daily";
const param = `?q=London&units=metric&cnt=7&appid=${key}`;
export const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`;

export const client = async (endpoint)=>{
    try{
        const response = await fetch(endpoint);
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error(response.statusText)
    }catch(error){
        return error;
    }
}
client.get = (endpoint) =>{
    return client(endpoint);
}