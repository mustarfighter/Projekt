import axios from 'axios';

const API_URL = 'ccaff4c77ec8a3842ca659eaa5ba8436';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_URL}    
});

export const searchMovies = async(query: string) => {
    try{
        const response = await client.get('/search/movie',{
            params: {query,},
        });

        if(response.data && response.data.results){
            return response.data.results;
        }else{
            console.error("Could not find any movies for this query")
        }
    }catch(error){
        console.error(error);
        return [];
    }
}