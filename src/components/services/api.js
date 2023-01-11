import axios from 'axios';

export async function getTrendingMovies(){
try {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=87b30e96836a8de3573742dd24a908fa')
    return data;
} catch (error) {
    console.error(error);
}
}


export async function getQueryMovies(query){
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=87b30e96836a8de3573742dd24a908fa&language=en-US&page=1&include_adult=false&query=${query}`)
        return data;
    } catch (error) {
        console.error(error);
    }
    }


export async function getMoviesByID(movieId){
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=87b30e96836a8de3573742dd24a908fa&language=en-US`)
            return data;
        } catch (error) {
            console.error(error);
        }
        }

        
export async function getCast(movieId){
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=87b30e96836a8de3573742dd24a908fa&language=en-US`)
            return data;
        } catch (error) {
            console.error(error);
        }
        }

                
export async function getReviews(movieId){
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=87b30e96836a8de3573742dd24a908fa&language=en-US&page=1`)
        return data;
    } catch (error) {
        console.error(error);
    }
    }

  
    


       
