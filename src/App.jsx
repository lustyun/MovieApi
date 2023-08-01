import { useState, useEffect } from "react";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/From";
import { GlobalStyles } from "./GlobalStyles";

export default function App() {
    //variable with your apiKey
    const apiKey = "f371a1f2";
    //State to hold movie data
    const [movie, setMovie] = useState(null);

    const getMovie = async (searchTerm) => {
        // make fetch request and store response
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
            );
            // Parse JSON response into a javascript object
            const data = await response.json();
            //set the Movie state to the movie
            setMovie(data);
        } catch (e) {
            console.error(e);
        }
    };

    //This will run on the first render but not on subsquent renders
    useEffect(() => {
        getMovie("Clueless");
    }, []);

    // USE OUR COMPONENTS IN APPs RETURNED JSX
    // We pass the getMovie function as a prop called moviesearch
    // We pass movie as props to movie display
    return (
        <GlobalStyles>
            <div className="App">
                <h1 className="title">Movie Search</h1>
                <Form moviesearch={getMovie} />
                <MovieDisplay movie={movie} />
            </div>
        </GlobalStyles>
    );
}
